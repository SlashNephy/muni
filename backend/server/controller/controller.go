package controller

import (
	"github.com/SlashNephy/muni/backend/config"
	"github.com/SlashNephy/muni/backend/pb"
)

type Controller struct {
	config *config.Config
	pb.UnimplementedFloorServiceServer
}

func NewController(cfg *config.Config) *Controller {
	return &Controller{
		config: cfg,
	}
}
