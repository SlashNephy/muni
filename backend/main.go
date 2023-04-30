package main

import (
	"os"
	"os/signal"

	"go.uber.org/zap"

	"github.com/SlashNephy/muni/backend/config"
	"github.com/SlashNephy/muni/backend/logger"
	"github.com/SlashNephy/muni/backend/server"
)

func main() {
	log, err := logger.NewLogger()
	if err != nil {
		panic(err)
	}

	cfg, err := config.Load()
	if err != nil {
		log.Fatal("failed to load config", zap.Error(err))
	}

	s, err := server.NewServer(cfg)
	if err != nil {
		log.Fatal("failed to create server", zap.Error(err))
	}

	go func() {
		log.Info("server is now listening", zap.Uint16("port", cfg.Port))

		if err = s.Start(cfg.Port); err != nil {
			log.Error("failed to start server", zap.Error(err))
		}
	}()

	handle := make(chan os.Signal, 1)
	signal.Notify(handle, os.Interrupt)
	<-handle

	s.Shutdown()
}
