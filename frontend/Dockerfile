FROM node:21.4.0-bullseye-slim@sha256:3afb93c631e692edb893a403d25f9b4cae4b03748244cc9804c31dd957235682 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
