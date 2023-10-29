FROM node:21.1.0-bullseye-slim@sha256:caa20b1d12bfda5fe3fb4078eb4b0a95665daadae335066490c058cf7ff3e341 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
