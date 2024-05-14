FROM node:21.7.3-bullseye-slim@sha256:332380f55d15ac48a594f91f1a24ab8d04189fb491090a65aefa57189beb600e AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
