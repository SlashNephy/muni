FROM node:21.7.1-bullseye-slim@sha256:ac4c91bdd9cd1293e312096029570d1419330f151ca96756919c665c65a25cf6 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
