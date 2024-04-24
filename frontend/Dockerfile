FROM node:21.7.3-bullseye-slim@sha256:458f5a4881440a468829275b145d1c4336645c23b06793f8bf559d821565918b AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
