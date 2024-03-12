FROM node:21.7.1-bullseye-slim@sha256:eacf88f50e8c5b5f9e3ff757a1ca078c2e249d601cb9ac90b515932a09164e74 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
