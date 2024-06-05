#!/bin/bash

npm run build

aws s3 sync build/ s3://jamesresumes3

aws cloudfront create-invalidation --distribution-id EOOUQCELCLSDX --paths "/*"