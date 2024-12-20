package config

import (
	"flag"
	"os"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type Config struct {
	Port              uint16 `env:"PORT" envDefault:"7080"`
	VimeoClientID     string `env:"VIMEO_CLIENT_ID,required"`
	VimeoClientSecret string `env:"VIMEO_CLIENT_SECRET,required"`
}

func Load() (*Config, error) {
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
	// ファイルが存在する場合のみ読み込む
	if !fileExists(path) {
		return nil
	}

	return godotenv.Load(path)
}

func fileExists(path string) bool {
	info, err := os.Stat(path)
	if err != nil {
		return false
	}

	return !info.IsDir()
}
