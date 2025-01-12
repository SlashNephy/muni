FROM node:22.13.0-bullseye-slim@sha256:7e935963ae04467f1349e99e766c91265a2d053c108c2f3aafbe02115c68e44d AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
