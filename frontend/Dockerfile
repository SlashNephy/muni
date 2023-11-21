FROM node:21.2.0-bullseye-slim@sha256:7ceb032d9ffe90538cd140d5da9dd26ac24994f23daa00e757a4718fa377d171 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
