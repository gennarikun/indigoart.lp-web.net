import re

file_path = '/Users/narasaki/Antigravity/hp/静的化対応/indigoart.lp-web.net/silkscreen/index.php'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific opacity string
pattern = r' style="opacity: 0; transform: translateY\(30px\); transition: opacity 0\.6s, transform 0\.6s;"'
content = re.sub(pattern, '', content)

# For those mixed with other styles (e.g. style="xyz; opacity: 0; ...")
pattern2 = r'([\s;]*)opacity:\s*0;\s*transform:\s*translateY\(30px\);\s*transition:\s*opacity\s*0\.6s,\s*transform\s*0\.6s;?'
content = re.sub(pattern2, '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed silkscreen/index.php")
