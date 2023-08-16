FROM node:20.5.1-bullseye-slim@sha256:f54a16be368537403c6f20e6e9cfa400f4b71c71ae9e1e93558b33a08f109db6 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
