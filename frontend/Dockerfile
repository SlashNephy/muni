FROM node:21.7.2-bullseye-slim@sha256:c77336dd02a5ae20328ea1c33b9f648dbfc848080c8562d325304251a86faa08 AS development
WORKDIR /app

CMD ["bash", "-c", "yarn install --immutable && yarn dev --host 0.0.0.0"]
