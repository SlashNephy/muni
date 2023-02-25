build:
	go build -o muni-backend ./*.go

run:
	go run .

dev:
	go install github.com/cespare/reflex@latest
	reflex --regex='\.go$$' --start-service make run
