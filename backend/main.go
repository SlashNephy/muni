package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
	"go.uber.org/zap"
)

func main() {
	config, err := LoadConfig()
	if err != nil {
		logger.Fatal("failed to load config", zap.Error(err))
	}

	e := echo.New()
	if config.IsDebug {
		e.Debug = true
		e.Logger.SetLevel(log.DEBUG)
		e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
			Format: "[${time_rfc3339}] ${status} ${method} ${uri}\n",
		}))
		e.HTTPErrorHandler = func(err error, c echo.Context) {
			e.Logger.Errorf("%s : %s", c.Request().URL, err)
		}
	}
}
