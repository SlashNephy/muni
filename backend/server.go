package main

import (
	"context"

	"github.com/SlashNephy/muni/backend/pb"
)

type server struct {
	pb.UnimplementedRoomServiceServer
}

func (s *server) ListRooms(ctx context.Context, _ *pb.ListRoomsRequest) (*pb.ListRoomsResponse, error) {
	return &pb.ListRoomsResponse{
		Rooms: []*pb.Room{
			{
				Id:             "abc-def-ghi",
				Name:           "test room",
				Authentication: pb.AuthenticationMode_None,
			},
		},
	}, nil
}
