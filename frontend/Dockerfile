FROM node:21.6.1-bullseye-slim@sha256:383ded27268efc3424c99e8e48f1f227f6e9467852ba7cb1e10cfa4e9a893c8a AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
