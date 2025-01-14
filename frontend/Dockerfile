FROM node:22.13.0-bullseye-slim@sha256:325ce775e38a3960fb5492eed4fc60bd86d48ec026e62ce73828081738de8e6b AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
