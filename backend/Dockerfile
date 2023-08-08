# syntax=docker/dockerfile:1
FROM golang:1.20.4-bullseye@sha256:2dc5c568c8a314583090e887e8d96d313e081e2c5333d0a7b935906baf77cee9 AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN make build

FROM debian:bullseye-slim@sha256:fd3b382990294beb46aa7549edb9f40b11a070f959365ef7f316724b2e425f90 AS production
WORKDIR /app

RUN groupadd -g 1000 app && useradd -u 1000 -g app app

RUN apt-get update \
    && apt-get install -yqq --no-install-recommends \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER app
COPY --from=build /app/muni-backend ./
CMD ["./muni-backend"]

FROM golang:1.20.4-bullseye@sha256:2dc5c568c8a314583090e887e8d96d313e081e2c5333d0a7b935906baf77cee9 AS development
WORKDIR /app

CMD ["make", "dev"]
