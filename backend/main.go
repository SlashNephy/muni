package main

import (
	"os"
	"os/signal"

	"go.uber.org/zap"

	"github.com/SlashNephy/muni/backend/config"
	"github.com/SlashNephy/muni/backend/server"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		logger.Fatal("failed to load config", zap.Error(err))
	}

	s := server.NewServer(cfg, logger)
	go func() {
		logger.Info("server is now listening", zap.Uint16("port", cfg.Port))

		if err = s.Start(cfg.Port); err != nil {
			logger.Error("failed to start server", zap.Error(err))
		}
	}()

	handle := make(chan os.Signal)
	signal.Notify(handle, os.Interrupt)
	<-handle

	s.Shutdown()
}
