package controller

import (
	"context"

	"github.com/SlashNephy/muni/backend/pb"
)

func (c *Controller) ListFloors(ctx context.Context, _ *pb.ListFloorsRequest) (*pb.ListFloorsResponse, error) {
	return &pb.ListFloorsResponse{
		Floors: []*pb.Floor{
			{
				Id:   "abc-defg-hij",
				Name: "test floor",
				Host: &pb.Host{
					Name: "Kashiwa",
				},
				Authentication: pb.AuthenticationMode_None,
			},
		},
	}, nil
}
