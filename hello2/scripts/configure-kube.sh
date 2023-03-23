#!/usr/bin/env bash

set -xe

kubectl apply -f config/server-pod.yml
kubectl apply -f config/server-service.yml
kubectl apply -f config/client-pod.yml
