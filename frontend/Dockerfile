FROM node:21.7.3-bullseye-slim@sha256:1691c8869263157f44ac8288c77372891a3c88f8d465145831b72e3b73e50415 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
