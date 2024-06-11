find . -type d -name '.angular'     -exec rm -rf {} +
find . -type d -name '.nx'          -exec rm -rf {} +
find . -type d -name '.vscode'      -exec rm -rf {} +
find . -type d -name 'node_modules' -exec rm -rf {} +

find . -print | sort | while read filename; do touch $filename; done

git add .
git commit -m 'Repositório fechado.'
git push origin main
