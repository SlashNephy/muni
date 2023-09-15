FROM node:20.6.1-bullseye-slim@sha256:ee905d8492c443aebe41f4cc525ebabefef757df43556c444be67391cc031cba AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
