FROM node:20.8.0-bullseye-slim@sha256:64ba042504e23ad45a5ed02c9c66aa9e8af22617e3a430f715535106760971f8 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
