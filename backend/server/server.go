package server

import (
	"fmt"
	"github.com/SlashNephy/muni/backend/logger"
	"net"

	grpcMiddleware "github.com/grpc-ecosystem/go-grpc-middleware"
	zapMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	tagsMiddleware "github.com/grpc-ecosystem/go-grpc-middleware/tags"
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

func NewServer(cfg *config.Config) (*Server, error) {
	log, err := logger.NewLogger()
	if err != nil {
		return nil, err
	}

	server := grpc.NewServer(
		grpc.UnaryInterceptor(grpcMiddleware.ChainUnaryServer(
			zapMiddleware.UnaryServerInterceptor(log),
			tagsMiddleware.UnaryServerInterceptor(),
		)),
		grpc.StreamInterceptor(grpcMiddleware.ChainStreamServer(
			zapMiddleware.StreamServerInterceptor(log),
			tagsMiddleware.StreamServerInterceptor(),
		)),
	)

	ctl := controller.NewController(cfg)
	pb.RegisterFloorServiceServer(server, ctl)
	pb.RegisterVimeoServiceServer(server, ctl)

	return &Server{
		s: server,
	}, nil
}
