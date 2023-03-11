package controller

import (
	"context"

	"github.com/SlashNephy/muni/backend/external/vimeo"
	"github.com/SlashNephy/muni/backend/pb"
)

func (c *Controller) ListVideoVideos(ctx context.Context, _ *pb.ListVideoVideosRequest) (*pb.ListVideoVideosResponse, error) {
	client, err := vimeo.NewClient(c.config.VimeoClientID, c.config.VimeoClientSecret)
	if err != nil {
		return nil, err
	}

	response, err := client.GetChannelVideos(ctx, "beeple", 1)
	if err != nil {
		return nil, err
	}

	var result pb.ListVideoVideosResponse
	for _, data := range response.Data {
		result.Videos = append(result.Videos, &pb.VimeoVideo{
			Key:        data.Uri,
			Title:      data.Name,
			Url:        data.Link,
			PreviewUrl: data.Pictures.BaseLink,
			AuthorName: data.User.Name,
		})
	}

	return &result, nil
}
