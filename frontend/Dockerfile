FROM node:22.16.0-bullseye-slim@sha256:a0368d5282fd3caa1cefd3fc38ba666f3fd42ac1ab3ecb312b76008fbe56e6a7 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
