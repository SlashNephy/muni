# syntax=docker/dockerfile:1@sha256:db1ff77fb637a5955317c7a3a62540196396d565f3dd5742e76dddbb6d75c4c5
FROM golang:1.23.3-bullseye@sha256:9e53abacfc22cd3df3e4ebcc04ac64951b71d2a38c52b690f3807af6a2000ed2 AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN make build

FROM debian:bullseye-slim@sha256:8118d0da5204dcc2f648d416b4c25f97255a823797aeb17495a01f2eb9c1b487 AS production
WORKDIR /app

RUN groupadd -g 1000 app && useradd -u 1000 -g app app

RUN apt-get update \
    && apt-get install -yqq --no-install-recommends \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER app
COPY --from=build /app/muni-backend ./
CMD ["./muni-backend"]

FROM golang:1.23.3-bullseye@sha256:9e53abacfc22cd3df3e4ebcc04ac64951b71d2a38c52b690f3807af6a2000ed2 AS development
WORKDIR /app

CMD ["make", "dev"]
