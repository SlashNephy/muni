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
				Name: "test floor#1",
				Host: &pb.Host{
					Name: "Kashiwa",
				},
				Authentication: pb.Authentication_None,
			},
			{
				Id:   "xxx-yyyy-zzz",
				Name: "test floor#2",
				Host: &pb.Host{
					Name: "ci7lus",
				},
				Authentication: pb.Authentication_None,
			},
			{
				Id:   "ekh-fetv-vns",
				Name: "test floor#3",
				Host: &pb.Host{
					Name: "samekan",
				},
				Authentication: pb.Authentication_Password,
			},
		},
	}, nil
}
