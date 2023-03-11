package server

import (
	"fmt"
	"net"

	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	zapMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	tagsMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"go.uber.org/zap"
	"google.golang.org/grpc"

	"github.com/SlashNephy/muni/backend/config"
	"github.com/SlashNephy/muni/backend/pb"
	"github.com/SlashNephy/muni/backend/server/controller"
)

type Server struct {
	s *grpc.Server
}

func (s *Server) Start(port uint16) error {
	listener, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		return fmt.Errorf("failed to bind port %d: %w", port, err)
	}

	if err = s.s.Serve(listener); err != nil {
		return fmt.Errorf("failed to server: %w", err)
	}

	return nil
}

func (s *Server) Shutdown() {
	s.s.GracefulStop()
}

func NewServer(cfg *config.Config, logger *zap.Logger) *Server {
	server := grpc.NewServer(
		grpc.UnaryInterceptor(grpcMiddleware.ChainUnaryServer(
			zapMiddleware.UnaryServerInterceptor(logger),
			tagsMiddleware.UnaryServerInterceptor(),
		)),
		grpc.StreamInterceptor(grpcMiddleware.ChainStreamServer(
			zapMiddleware.StreamServerInterceptor(logger),
			tagsMiddleware.StreamServerInterceptor(),
		)),
	)

	ctl := controller.NewController(cfg)
	pb.RegisterFloorServiceServer(server, ctl)
	pb.RegisterVimeoServiceServer(server, ctl)

	return &Server{
		s: server,
	}
}
