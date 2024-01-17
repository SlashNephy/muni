FROM node:21.6.0-bullseye-slim@sha256:ef46f8bf489e6a6c2d056e0c0bec23a4120b34aabb9551a446baf68282defa01 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
