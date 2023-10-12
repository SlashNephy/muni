FROM node:20.8.0-bullseye-slim@sha256:3948235dedc00cadb7c8a7c8536818f3c788a8c80c175a4b2726944d9e5dc534 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
