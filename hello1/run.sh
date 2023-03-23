#!/usr/bin/env/bash

set -xe

nerdctl --namespace k8s.io build --tag nginx-helloworld:latest .
kubectl run hello-world --image=nginx-helloworld:latest --image-pull-policy=Never --port=80

sleep 3
echo Open 'http://localhost:8080' in your browser
kubectl port-forward pods/hello-world 8080:80

kubectl delete pod hello-world
