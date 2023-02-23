package main

import (
	"flag"
	"os"

	"github.com/caarlos0/env/v7"
	"github.com/joho/godotenv"
)

type Config struct {
	IsDebug bool `env:"debug"`
}

func LoadConfig() (*Config, error) {
	envFile := flag.String("env-file", ".env", "path to .env file")
	flag.Parse()

	if err := loadDotEnv(*envFile); err != nil {
		return nil, err
	}

	var config Config
	if err := env.Parse(&config); err != nil {
		return nil, err
	}

	return &config, nil
}

func loadDotEnv(path string) error {
	_, err := os.Stat(path)

	// ファイルが存在する場合のみ読み込む
	if !os.IsNotExist(err) {
		return godotenv.Load(path)
	}

	return err
}
