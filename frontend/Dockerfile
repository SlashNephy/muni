FROM node:22.15.1-bullseye-slim@sha256:095b5c1684b260da1069dccca7aa373f67d0a20751cf70d2658f3b3e540b2c67 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
