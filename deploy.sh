#!/bin/bash

aws s3 sync build/ s3://jamesresume3

aws cloudfront create-invalidation --distribution-id <your-distribution-id> --paths "/*"