import http.server
import socketserver
import os
import re

PORT = 8080

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.0"
    
    def do_GET(self):
        filepath = self.translate_path(self.path)
        
        if os.path.isdir(filepath):
            if os.path.exists(os.path.join(filepath, "index.php")):
                filepath = os.path.join(filepath, "index.php")
            elif os.path.exists(os.path.join(filepath, "index.html")):
                filepath = os.path.join(filepath, "index.html")

        if filepath.endswith('.php') and os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            base_path_match = re.search(r'\$basePath\s*=\s*[\'"]([^\'"]*)[\'"];', content)
            base_path = base_path_match.group(1) if base_path_match else ""

            page_title_match = re.search(r'\$pageTitle\s*=\s*[\'"]([^\'"]+)[\'"];', content)
            page_title = page_title_match.group(1) if page_title_match else ""

            canonical_match = re.search(r'\$canonicalUrl\s*=\s*[\'"]([^\'"]+)[\'"];', content)
            canonical = canonical_match.group(1) if canonical_match else ""

            body_class_match = re.search(r'\$bodyClass\s*=\s*[\'"]([^\'"]+)[\'"];', content)
            body_class = body_class_match.group(1) if body_class_match else ""
            
            css_matches = re.search(r'\$pageCSS\s*=\s*\[(.*?)\];', content)
            page_css = []
            if css_matches:
                css_str = css_matches.group(1)
                page_css = re.findall(r'[\'"]([^\'"]+)[\'"]', css_str)

            css_html = ""
            for css in page_css:
                css_html += f'<link href="{base_path}{css}" media="all" rel="stylesheet" type="text/css"/>\n'

            def process_include(include_filename):
                include_filepath = os.path.join(os.path.dirname(filepath), base_path, include_filename)
                if os.path.exists(include_filepath):
                    with open(include_filepath, 'r', encoding='utf-8') as inc_f:
                        inc_content = inc_f.read()
                        
                        # Process CSS mapping if exists in head-common
                        if "head-common" in include_filename:
                            inc_content = re.sub(r'<\?php\s*//.*?\s*if\s*\(isset\(\$pageCSS\).*?endif;\s*\?>', css_html, inc_content, flags=re.DOTALL)
                            inc_content = re.sub(r'<\?php.*?if\s*\(isset\(\$pageCSS\).*?\}[\s\n]*\}\s*\?>', css_html, inc_content, flags=re.DOTALL)
                        
                        return inc_content
                return f"<!-- missing include: {include_filepath} -->"

            # Parse includes and break out of PHP block
            content = re.sub(r'include(?:_once)?\s*\(?\$basePath\s*\.\s*[\'"]([^\'"]+)[\'"]\)?;\s*', lambda m: f"?>\n{process_include(m.group(1))}\n<?php\n", content)

            # Process inline PHP echoes
            content = re.sub(r'<\?php\s+echo\s+\$bodyClass;\s*\?>', body_class, content)
            content = re.sub(r'<\?=\s*htmlspecialchars\(\$bodyClass\)\s*\?>', body_class, content)
            content = re.sub(r'<\?=\s*htmlspecialchars\(\$canonicalUrl\)\s*\?>', canonical, content)
            content = re.sub(r'<\?=\s*htmlspecialchars\(\$pageTitle\)\s*\?>', page_title, content)
            content = re.sub(r'<\?=\s*\$basePath\s*\?>', base_path, content)
            content = content.replace('<?php echo isset($pageTitle) ? $pageTitle : \'...\'; ?>', page_title)
            
            # Final cleanup of php blocks
            content = re.sub(r'<\?php.*?\?>', '', content, flags=re.DOTALL)
            content = re.sub(r'<\?=.*?\?>', '', content, flags=re.DOTALL)

            self.send_response(200)
            self.send_header("Content-type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(content.encode("utf-8"))
        else:
            return super().do_GET()

Handler = MyHttpRequestHandler
ThreadingTCPServer.allow_reuse_address = True
with ThreadingTCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
