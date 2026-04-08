import os

files_to_fix = [
    "./item/index.php",
    "./online-shop/index.php",
    "./about-class/index.php",
    "./silkscreen/index.php"
]

for root, _, files in os.walk('./archives'):
    for file in files:
        if file.endswith('.php'):
            files_to_fix.append(os.path.join(root, file))

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '<title>' not in content and '<?php echo $bodyClass;' in content:
        # We need to insert <title><?= htmlspecialchars($pageTitle) ?></title>
        # and <link href="<?= htmlspecialchars($canonicalUrl) ?>" rel="canonical"/>
        # right before </head>
        insert_text = '\n<title><?= htmlspecialchars($pageTitle) ?></title>\n<link href="<?= htmlspecialchars($canonicalUrl) ?>" rel="canonical"/>\n'
        content = content.replace('</head>', insert_text + '</head>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")
