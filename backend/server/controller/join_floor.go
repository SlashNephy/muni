package controller

import (
	"github.com/SlashNephy/muni/backend/pb"
	"time"
)

func (c *Controller) JoinFloor(req *pb.JoinFloorRequest, s pb.FloorService_JoinFloorServer) error {
	for {
		res := &pb.JoinFloorResponse{
			Video: &pb.Video{
				Source: &pb.Video_VimeoId{
					VimeoId: 252893118,
				},
			},
		}
		if err := s.Send(res); err != nil {
			return err
		}

		time.Sleep(3 * time.Second)
	}
}
