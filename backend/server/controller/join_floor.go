package controller

import (
	"github.com/SlashNephy/muni/backend/pb"
	"time"
)

func (c *Controller) JoinFloor(req *pb.JoinFloorRequest, s pb.FloorService_JoinFloorServer) error {
	for {
		res := &pb.JoinFloorResponse{
			FloorId: req.FloorId,
		}
		if err := s.Send(res); err != nil {
			return err
		}

		time.Sleep(3 * time.Second)
	}
}
