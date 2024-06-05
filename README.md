<!-- test -->

git add
git commit -m
git push


<!-- production -->

npm run build
aws s3 sync build/ s3://jamesresume3


(chmod +x deploy.sh)
/deploy.sh