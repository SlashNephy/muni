# syntax=docker/dockerfile:1@sha256:fe40cf4e92cd0c467be2cfc30657a680ae2398318afd50b0c80585784c604f28
FROM golang:1.23.0-bullseye@sha256:ea90fd4edb6db8b5cf8751fe5eeb08a25549090f48d08c7f3fa91dae648308b6 AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN make build

FROM debian:bullseye-slim@sha256:00558f781b91e90469812bad32002f311ab26ef241b4a1996f6600680ec82f5c AS production
WORKDIR /app

RUN groupadd -g 1000 app && useradd -u 1000 -g app app

RUN apt-get update \
    && apt-get install -yqq --no-install-recommends \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER app
COPY --from=build /app/muni-backend ./
CMD ["./muni-backend"]

FROM golang:1.23.0-bullseye@sha256:ea90fd4edb6db8b5cf8751fe5eeb08a25549090f48d08c7f3fa91dae648308b6 AS development
WORKDIR /app

CMD ["make", "dev"]
