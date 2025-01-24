FROM node:22.13.1-bullseye-slim@sha256:8d01d258d1c400417c3ea058b10e6e0c93a605276aac84b3ec7cb0c08b8c5d33 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
