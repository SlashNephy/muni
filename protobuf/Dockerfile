FROM golang:1.19.6-bullseye AS development
WORKDIR /app

RUN apt update \
    && apt install -y --no-install-recommends protobuf-compiler unzip \
    && curl -o /tmp/protoc.zip -L https://github.com/protocolbuffers/protobuf/releases/download/v22.0/protoc-22.0-linux-aarch_64.zip \
    && cd /tmp \
    && unzip /tmp/protoc.zip \
    && mv include/* /usr/include/

CMD ["make", "watch"]
