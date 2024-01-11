FROM node:21.5.0-bullseye-slim@sha256:6459dbe71065404cc3d7608611bc742a3d7829fee2b8e013590323738c5a146c AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
