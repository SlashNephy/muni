watch: install-tools
	go install github.com/cespare/reflex@latest
	reflex --regex='\.proto$$' --start-service make generate

generate: generate-go generate-go-grpc generate-grpc-web

generate-go:
	protoc --go_out=paths=source_relative:'../backend' pb/*.proto

generate-go-grpc:
	protoc --go-grpc_out=paths=source_relative:'../backend' pb/*.proto

generate-grpc-web:
	protoc --grpc-web_out='import_style=typescript,mode=grpcwebtext:../frontend/src' pb/*.proto

install-tools:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
	bash -c "curl -o /usr/local/bin/protoc-gen-grpc-web -L \"https://github.com/grpc/grpc-web/releases/download/1.4.2/protoc-gen-grpc-web-1.4.2-linux-$$(uname -m)\""
	chmod +x /usr/local/bin/protoc-gen-grpc-web
