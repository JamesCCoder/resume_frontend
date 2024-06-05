<!-- test -->

git add
git commit -m
git push


<!-- production -->

npm run build
aws s3 sync build/ s3://jamesresumes3


(chmod +x deploy.sh)
/deploy.sh