#!/bin/sh
export G=typescript-axios
export C=./open-api-generator-config.json
export O=./src/apis/
export I=./openapi.json

rm -rf $O/*/interfaces/* 
rm -rf $O/*/services/* 


openapi-generator-cli generate \
  -i $I  \
  -g $G  \
  -o $O  \
  -c $C  \
 
 