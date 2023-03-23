#!/usr/bin/env/bash

set -xe

nerdctl --namespace k8s.io build --tag hello-server:latest server
nerdctl --namespace k8s.io build --tag hello-client:latest client