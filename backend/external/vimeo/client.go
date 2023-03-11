package vimeo

type Client struct {
	clientID     string
	clientSecret string
}

func NewClient(clientID string, clientSecret string) (*Client, error) {
	return &Client{
		clientID:     clientID,
		clientSecret: clientSecret,
	}, nil
}
