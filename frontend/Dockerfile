FROM node:22.13.1-bullseye-slim@sha256:78d58cb33cd6508d24dc07b6b9825d4669275b094ea2aafc9ae10610991d8945 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
