from node:alpine

RUN \
    mkdir -p /app && \
    cd /app && \
    npm init -y && \
    npm install express

COPY ./server.js /app

ENTRYPOINT node /app/server.js