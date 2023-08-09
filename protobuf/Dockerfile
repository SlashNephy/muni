FROM namely/protoc-all:1.51_2@sha256:33e47b2aece23a282a9f8d03a193c063cdd4b1f60d427b148b3c449b51a3ba3c AS development
WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt install -y nodejs \
    && npm i @protobuf-ts/plugin -g --force \
    && curl -L https://github.com/cespare/reflex/releases/download/v0.3.1/reflex_linux_amd64.tar.gz | tar -zx --strip-components=1 -C /usr/local/bin

ENTRYPOINT ["reflex", "-r", "(\\.proto|compile\\.sh)$", "-s", "./compile.sh"]
