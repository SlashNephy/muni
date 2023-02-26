package main

import (
	"fmt"
	"net"
	"os"
	"os/signal"

	"github.com/grpc-ecosystem/go-grpc-middleware"
	zapMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	tagsMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"go.uber.org/zap"
	"google.golang.org/grpc"

	"github.com/SlashNephy/muni/backend/pb"
)

func main() {
	config, err := LoadConfig()
	if err != nil {
		logger.Fatal("failed to load config", zap.Error(err))
	}

	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", config.Port))
	if err != nil {
		logger.Fatal("failed to bind port", zap.Uint16("port", config.Port), zap.Error(err))
	}

	s := grpc.NewServer(
		grpc.UnaryInterceptor(grpc_middleware.ChainUnaryServer(
			zapMiddleware.UnaryServerInterceptor(logger),
			tagsMiddleware.UnaryServerInterceptor(),
		)),
		grpc.StreamInterceptor(grpc_middleware.ChainStreamServer(
			zapMiddleware.StreamServerInterceptor(logger),
			tagsMiddleware.StreamServerInterceptor(),
		)),
	)
	pb.RegisterRoomServiceServer(s, &server{})

	go func() {
		if err = s.Serve(listener); err != nil {
			logger.Fatal("failed to serve", zap.Error(err))
		}
	}()

	logger.Info("server is now listening", zap.String("address", listener.Addr().String()))

	handle := make(chan os.Signal)
	signal.Notify(handle, os.Interrupt)
	<-handle

	s.GracefulStop()
}
