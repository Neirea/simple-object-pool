#!/bin/bash

# Find and rename *.js files to *.cjs in dist folder
for file in $(find ./dist -type f -name '*.js'); do
    mv "$file" "${file%.js}.cjs"
done

# Find and rename *.d.ts files to *.d.cts in dist folder
for file in $(find ./dist -type f -name '*.d.ts'); do
    mv "$file" "${file%.d.ts}.d.cts"
done