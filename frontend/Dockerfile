FROM node:20.5.1-bullseye-slim@sha256:a2fe8fd3975d4b378abf721519df7cf0d465b8b8fb29e6bbe4d4a79c871bcded AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
