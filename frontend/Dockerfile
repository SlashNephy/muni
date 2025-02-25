FROM node:22.14.0-bullseye-slim@sha256:c47d5e7a994ede82082b5775b8ac2df649ce8295b992f1d91d71c532b3404b12 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
