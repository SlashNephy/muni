FROM node:21.7.2-bullseye-slim@sha256:0e5b29a68cfc22742195acf48881a983d5efe939edbbc7ae55fad0a410a6a76c AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
