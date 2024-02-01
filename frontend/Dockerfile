FROM node:21.6.1-bullseye-slim@sha256:0567f3294fac3e372bbc33beef37a55109a2579956a504b4eaae177de2e248b6 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
