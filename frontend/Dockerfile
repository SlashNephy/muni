FROM node:21.6.2-bullseye-slim@sha256:65998e325b06014d4f1417a8a6afb1540d1ac66521cca76f2221a6953947f9ee AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
