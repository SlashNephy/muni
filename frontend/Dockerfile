FROM node:22.12.0-bullseye-slim@sha256:571c3799f27880cd0b619724959b5c88fdfb0a96e5ea19354a02cce20ddc6600 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
