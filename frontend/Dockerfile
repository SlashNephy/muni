FROM node:20.6.0-bullseye-slim@sha256:b905764e7025655563028e985a8c5a88023e181645d28e2fc7cf73e32293dfda AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
