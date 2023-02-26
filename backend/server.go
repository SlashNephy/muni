package main

import (
	"context"

	"github.com/SlashNephy/muni/backend/pb"
)

type server struct {
	pb.UnimplementedFloorServiceServer
}

func (s *server) ListFloors(ctx context.Context, _ *pb.ListFloorsRequest) (*pb.ListFloorsResponse, error) {
	return &pb.ListFloorsResponse{
		Floors: []*pb.Floor{
			{
				Id:             "abc-def-ghi",
				Name:           "test floor",
				Authentication: pb.AuthenticationMode_None,
			},
		},
	}, nil
}
