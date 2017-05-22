git add .

echo 'Entrez le nom de la mise à jour:'
read commitMessage

git commit -m "$commitMessage"

git push origin master

read
