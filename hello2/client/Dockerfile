from node:alpine

RUN \
    mkdir -p /app && \
    cd /app && \
    npm init -y && \
    npm install express axios

COPY ./client.js /app

ENTRYPOINT node /app/client.js