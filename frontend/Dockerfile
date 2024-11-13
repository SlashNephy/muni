FROM node:22.11.0-bullseye-slim@sha256:ba5f9086411a1f5b7b8849c033321075d7143312ac3e1547132afd82de78219b AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
