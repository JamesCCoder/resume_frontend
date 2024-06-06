<!-- test environment-->

git add
git commit -m
git push


<!-- production environment-->

npm run build
aws s3 sync build/ s3://jamesresumes3


(chmod +x deploy.sh)
/deploy.sh

<!-- production environment 2 -->

.github/wrokflows/deploy.yml