#!/bin/bash

set -e

TAG=${1:-"latest"}

docker build -t registry.int.mimikko.cn/tasseo:$TAG ./tasseo-dashboards

docker push registry.int.mimikko.cn/tasseo:$TAG
