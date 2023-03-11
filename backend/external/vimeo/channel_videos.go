package vimeo

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

type ChannelVideosResponse struct {
	Total   int `json:"total"`
	Page    int `json:"page"`
	PerPage int `json:"per_page"`
	Paging  struct {
		Next     string `json:"next"`
		Previous any    `json:"previous"`
		First    string `json:"first"`
		Last     string `json:"last"`
	} `json:"paging"`
	Data []struct {
		Uri            string  `json:"uri"`
		Name           string  `json:"name"`
		Description    string  `json:"description"`
		Type           string  `json:"type"`
		Link           string  `json:"link"`
		PlayerEmbedUrl string  `json:"player_embed_url"`
		Duration       int     `json:"duration"`
		Width          int     `json:"width"`
		Language       *string `json:"language"`
		Height         int     `json:"height"`
		Embed          struct {
			Html   string `json:"html"`
			Badges struct {
				Hdr  bool `json:"hdr"`
				Live struct {
					Streaming bool `json:"streaming"`
					Archived  bool `json:"archived"`
				} `json:"live"`
				StaffPick struct {
					Normal         bool `json:"normal"`
					BestOfTheMonth bool `json:"best_of_the_month"`
					BestOfTheYear  bool `json:"best_of_the_year"`
					Premiere       bool `json:"premiere"`
				} `json:"staff_pick"`
				Vod              bool `json:"vod"`
				WeekendChallenge bool `json:"weekend_challenge"`
			} `json:"badges"`
		} `json:"embed"`
		CreatedTime        time.Time `json:"created_time"`
		ModifiedTime       time.Time `json:"modified_time"`
		ReleaseTime        time.Time `json:"release_time"`
		ContentRating      []string  `json:"content_rating"`
		ContentRatingClass string    `json:"content_rating_class"`
		RatingModLocked    bool      `json:"rating_mod_locked"`
		License            *string   `json:"license"`
		Privacy            struct {
			View     string `json:"view"`
			Embed    string `json:"embed"`
			Download bool   `json:"download"`
			Add      bool   `json:"add"`
			Comments string `json:"comments"`
		} `json:"privacy"`
		Pictures struct {
			Uri      string `json:"uri"`
			Active   bool   `json:"active"`
			Type     string `json:"type"`
			BaseLink string `json:"base_link"`
			Sizes    []struct {
				Width              int    `json:"width"`
				Height             int    `json:"height"`
				Link               string `json:"link"`
				LinkWithPlayButton string `json:"link_with_play_button"`
			} `json:"sizes"`
			ResourceKey    string `json:"resource_key"`
			DefaultPicture bool   `json:"default_picture"`
		} `json:"pictures"`
		Tags []struct {
			Uri       string `json:"uri"`
			Name      string `json:"name"`
			Tag       string `json:"tag"`
			Canonical string `json:"canonical"`
			Metadata  struct {
				Connections struct {
					Videos struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"videos"`
				} `json:"connections"`
			} `json:"metadata"`
			ResourceKey string `json:"resource_key"`
		} `json:"tags"`
		Stats struct {
			Plays any `json:"plays"`
		} `json:"stats"`
		Categories []struct {
			Uri          string `json:"uri"`
			Name         string `json:"name"`
			Link         string `json:"link"`
			TopLevel     bool   `json:"top_level"`
			IsDeprecated bool   `json:"is_deprecated"`
			Pictures     struct {
				Uri      string `json:"uri"`
				Active   bool   `json:"active"`
				Type     string `json:"type"`
				BaseLink string `json:"base_link"`
				Sizes    []struct {
					Width              int    `json:"width"`
					Height             int    `json:"height"`
					Link               string `json:"link"`
					LinkWithPlayButton string `json:"link_with_play_button"`
				} `json:"sizes"`
				ResourceKey    string `json:"resource_key"`
				DefaultPicture bool   `json:"default_picture"`
			} `json:"pictures"`
			LastVideoFeaturedTime time.Time `json:"last_video_featured_time"`
			Parent                *struct {
				Uri  string `json:"uri"`
				Name string `json:"name"`
				Link string `json:"link"`
			} `json:"parent"`
			Metadata struct {
				Connections struct {
					Channels struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"channels"`
					Groups struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"groups"`
					Users struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"users"`
					Videos struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"videos"`
				} `json:"connections"`
			} `json:"metadata"`
			Subcategories []struct {
				Uri  string `json:"uri"`
				Name string `json:"name"`
				Link string `json:"link"`
			} `json:"subcategories,omitempty"`
			Icon struct {
				Uri      string `json:"uri"`
				Active   bool   `json:"active"`
				Type     string `json:"type"`
				BaseLink string `json:"base_link"`
				Sizes    []struct {
					Width  int    `json:"width"`
					Height int    `json:"height"`
					Link   string `json:"link"`
				} `json:"sizes"`
				ResourceKey    string `json:"resource_key"`
				DefaultPicture bool   `json:"default_picture"`
			} `json:"icon,omitempty"`
			ResourceKey string `json:"resource_key"`
		} `json:"categories"`
		Uploader struct {
			Pictures struct {
				Uri      string `json:"uri"`
				Active   bool   `json:"active"`
				Type     string `json:"type"`
				BaseLink string `json:"base_link"`
				Sizes    []struct {
					Width  int    `json:"width"`
					Height int    `json:"height"`
					Link   string `json:"link"`
				} `json:"sizes"`
				ResourceKey    string `json:"resource_key"`
				DefaultPicture bool   `json:"default_picture"`
			} `json:"pictures"`
		} `json:"uploader"`
		Metadata struct {
			Connections struct {
				Comments struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Total   int      `json:"total"`
				} `json:"comments"`
				Credits struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Total   int      `json:"total"`
				} `json:"credits"`
				Likes struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Total   int      `json:"total"`
				} `json:"likes"`
				Pictures struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Total   int      `json:"total"`
				} `json:"pictures"`
				Texttracks struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Total   int      `json:"total"`
				} `json:"texttracks"`
				Related struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
				} `json:"related"`
				Recommendations struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
				} `json:"recommendations"`
			} `json:"connections"`
			Interactions struct {
				Channel any `json:"channel"`
				Report  struct {
					Uri     string   `json:"uri"`
					Options []string `json:"options"`
					Reason  []string `json:"reason"`
				} `json:"report"`
			} `json:"interactions"`
			IsVimeoCreate  bool `json:"is_vimeo_create"`
			IsScreenRecord bool `json:"is_screen_record"`
		} `json:"metadata"`
		User struct {
			Uri          string `json:"uri"`
			Name         string `json:"name"`
			Link         string `json:"link"`
			Capabilities struct {
				HasLiveSubscription            bool `json:"hasLiveSubscription"`
				HasEnterpriseLihp              bool `json:"hasEnterpriseLihp"`
				HasSvvTimecodedComments        bool `json:"hasSvvTimecodedComments"`
				HasSimplifiedEnterpriseAccount bool `json:"hasSimplifiedEnterpriseAccount"`
			} `json:"capabilities"`
			Location    string    `json:"location"`
			Gender      string    `json:"gender"`
			Bio         string    `json:"bio"`
			ShortBio    any       `json:"short_bio"`
			CreatedTime time.Time `json:"created_time"`
			Pictures    struct {
				Uri      string `json:"uri"`
				Active   bool   `json:"active"`
				Type     string `json:"type"`
				BaseLink string `json:"base_link"`
				Sizes    []struct {
					Width  int    `json:"width"`
					Height int    `json:"height"`
					Link   string `json:"link"`
				} `json:"sizes"`
				ResourceKey    string `json:"resource_key"`
				DefaultPicture bool   `json:"default_picture"`
			} `json:"pictures"`
			Websites []struct {
				Uri         string `json:"uri"`
				Name        any    `json:"name"`
				Link        string `json:"link"`
				Type        string `json:"type"`
				Description any    `json:"description"`
			} `json:"websites"`
			Metadata struct {
				Connections struct {
					Albums struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"albums"`
					Appearances struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"appearances"`
					Channels struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"channels"`
					Feed struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
					} `json:"feed"`
					Followers struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"followers"`
					Following struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"following"`
					Groups struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"groups"`
					Likes struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"likes"`
					Membership struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
					} `json:"membership"`
					ModeratedChannels struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"moderated_channels"`
					Portfolios struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"portfolios"`
					Videos struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"videos"`
					Shared struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"shared"`
					Pictures struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"pictures"`
					FoldersRoot struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
					} `json:"folders_root"`
					Teams struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"teams"`
					PermissionPolicies struct {
						Uri     string   `json:"uri"`
						Options []string `json:"options"`
						Total   int      `json:"total"`
					} `json:"permission_policies"`
				} `json:"connections"`
			} `json:"metadata"`
			LocationDetails struct {
				FormattedAddress string `json:"formatted_address"`
				Latitude         any    `json:"latitude"`
				Longitude        any    `json:"longitude"`
				City             any    `json:"city"`
				State            any    `json:"state"`
				Neighborhood     any    `json:"neighborhood"`
				SubLocality      any    `json:"sub_locality"`
				StateIsoCode     any    `json:"state_iso_code"`
				Country          any    `json:"country"`
				CountryIsoCode   any    `json:"country_iso_code"`
			} `json:"location_details"`
			Skills           []any  `json:"skills"`
			AvailableForHire bool   `json:"available_for_hire"`
			CanWorkRemotely  bool   `json:"can_work_remotely"`
			ResourceKey      string `json:"resource_key"`
			Account          string `json:"account"`
		} `json:"user"`
		Play struct {
			Status string `json:"status"`
		} `json:"play"`
		App *struct {
			Name string `json:"name"`
			Uri  string `json:"uri"`
		} `json:"app"`
		Status      string `json:"status"`
		ResourceKey string `json:"resource_key"`
		Upload      any    `json:"upload"`
		Transcode   any    `json:"transcode"`
		IsPlayable  bool   `json:"is_playable"`
		HasAudio    bool   `json:"has_audio"`
	} `json:"data"`
}

func (c *Client) GetChannelVideos(ctx context.Context, channelID string, page int) (*ChannelVideosResponse, error) {
	request, err := http.NewRequestWithContext(ctx, http.MethodGet, fmt.Sprintf("https://api.vimeo.com/channels/%s/videos?page=%d", channelID, page), nil)
	if err != nil {
		return nil, err
	}

	request.SetBasicAuth(c.clientID, c.clientSecret)

	response, err := http.DefaultClient.Do(request)
	if err != nil {
		return nil, err
	}

	defer func(Body io.ReadCloser) {
		_ = Body.Close()
	}(response.Body)

	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}

	var result ChannelVideosResponse
	if err = json.Unmarshal(body, &result); err != nil {
		return nil, err
	}

	return &result, nil
}
