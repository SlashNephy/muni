FROM node:22.15.0-bullseye-slim@sha256:dc5b6461793b93115c5484d855d7ca3e49bdd0797c8fe977d80462b73da6b30a AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
