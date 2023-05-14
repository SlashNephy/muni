# syntax=docker/dockerfile:1
FROM golang:1.19.9-bullseye@sha256:3329fdcebfd221714087b5e3b989ba075da403c213a69e3738bd3f000138e1a4 AS build
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY ./ ./
RUN make build

FROM debian:bullseye-slim AS production
WORKDIR /app

RUN groupadd -g 1000 app && useradd -u 1000 -g app app

RUN apt-get update \
    && apt-get install -yqq --no-install-recommends \
      ca-certificates \
    && rm -rf /var/lib/apt/lists/*

USER app
COPY --from=build /app/muni-backend ./
CMD ["./muni-backend"]

FROM golang:1.19.9-bullseye@sha256:3329fdcebfd221714087b5e3b989ba075da403c213a69e3738bd3f000138e1a4 AS development
WORKDIR /app

CMD ["make", "dev"]
