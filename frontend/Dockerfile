FROM node:22.12.0-bullseye-slim@sha256:52e4282a01d63eb4cfce7a395364d366cee488c278079110d3aa49dd21b2bf18 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
