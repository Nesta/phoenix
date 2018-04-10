#!/bin/bash

find node_modules/ -name "*.info" -type f -delete

# Slick carousl - cp slick js to js/vendors
find node_modules/slick-carousel/ -name "*.min.js" -exec cp {} ./js/vendors/ \;
