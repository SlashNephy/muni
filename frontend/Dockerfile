FROM node:22.14.0-bullseye-slim@sha256:d69b7c7ea65e223e1837a03784c6caa987e50bd2f1fcc174156554adfbe7ca6e AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
