FROM node:21.4.0-bullseye-slim@sha256:e42a19a34d91f1d9be82f60bc7a8e349171df305b5f6aefe862d44d98089d9bb AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
