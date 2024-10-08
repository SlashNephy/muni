# syntax=docker/dockerfile:1@sha256:865e5dd094beca432e8c0a1d5e1c465db5f998dca4e439981029b3b81fb39ed5
FROM golang:1.23.2-bullseye@sha256:ebaf58d74f200c27dce0181203a1347e41b5c159c9aa0517a95bec594aabbde4 AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN make build

FROM debian:bullseye-slim@sha256:3f9e53602537cc817d96f0ebb131a39bdb16fa8b422137659a9a597e7e3853c1 AS production
WORKDIR /app

RUN groupadd -g 1000 app && useradd -u 1000 -g app app

RUN apt-get update \
    && apt-get install -yqq --no-install-recommends \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER app
COPY --from=build /app/muni-backend ./
CMD ["./muni-backend"]

FROM golang:1.23.2-bullseye@sha256:ebaf58d74f200c27dce0181203a1347e41b5c159c9aa0517a95bec594aabbde4 AS development
WORKDIR /app

CMD ["make", "dev"]
