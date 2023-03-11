package controller

import (
	"github.com/SlashNephy/muni/backend/config"
	"github.com/SlashNephy/muni/backend/pb"
)

type Controller struct {
	config *config.Config
	pb.UnimplementedFloorServiceServer
	pb.UnimplementedVimeoServiceServer
}

func NewController(cfg *config.Config) *Controller {
	return &Controller{
		config: cfg,
	}
}
