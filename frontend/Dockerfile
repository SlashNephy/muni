FROM node:20.1.0-bullseye-slim@sha256:bc5812b018fa74ea7dbe759cb6c0b456ff96a5c2bc8765e132438f6a75cd6946 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
