FROM node:22.11.0-bullseye-slim@sha256:01e6d7155cfe9567294142e456da98864df32fd51e7d64ea04c1287b3fdc4bc5 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
