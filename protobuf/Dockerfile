FROM namely/protoc-all:1.51_1 AS development
WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt install -y nodejs \
    && npm i @protobuf-ts/plugin -g --force \
    && curl -L https://github.com/cespare/reflex/releases/download/v0.3.1/reflex_linux_amd64.tar.gz | tar -zx --strip-components=1 -C /usr/local/bin

ENTRYPOINT ["reflex", "-r", "(\\.proto|compile\\.sh)$", "-s", "./compile.sh"]
