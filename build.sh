#!/usr/bin/env bash

rm *.zip

now=$(date +"%Y%m%d_%H%M")

zip -r relutionEnhancer_${now}.zip background.js icon128.png icon16.png icon48.png manifest.json script.js
