import { config } from './config'

export type VimeoChannelVideos = {
  total: number
  page: number
  per_page: number
  paging: {
    next: string
    previous: unknown
    first: string
    last: string
  }
  data: {
    uri: string
    name: string
    description: string
    type: string
    link: string
    player_embed_url: string
    duration: number
    width: number
    language: unknown
    height: number
    embed: {
      html: string
      badges: {
        hdr: boolean
        live: {
          streaming: boolean
          archived: boolean
        }
        staff_pick: {
          normal: boolean
          best_of_the_month: boolean
          best_of_the_year: boolean
          premiere: boolean
        }
        vod: boolean
        weekend_challenge: boolean
      }
    }
    created_time: string
    modified_time: string
    release_time: string
    content_rating: string[]
    content_rating_class: string
    rating_mod_locked: boolean
    license: unknown
    privacy: {
      view: string
      embed: string
      download: boolean
      add: boolean
      comments: string
    }
    pictures: {
      uri: string
      active: boolean
      type: string
      base_link: string
      sizes: {
        width: number
        height: number
        link: string
        link_with_play_button: string
      }[]
      resource_key: string
      default_picture: boolean
    }
    tags: {
      uri: string
      name: string
      tag: string
      canonical: string
      metadata: {
        connections: {
          videos: {
            uri: string
            options: string[]
            total: number
          }
        }
      }
      resource_key: string
    }[]
    stats: {
      plays: unknown
    }
    categories: unknown[]
    uploader: {
      pictures: {
        uri: string
        active: boolean
        type: string
        base_link: string
        sizes: {
          width: number
          height: number
          link: string
        }[]
        resource_key: string
        default_picture: boolean
      }
    }
    metadata: {
      connections: {
        comments: {
          uri: string
          options: string[]
          total: number
        }
        credits: {
          uri: string
          options: string[]
          total: number
        }
        likes: {
          uri: string
          options: string[]
          total: number
        }
        pictures: {
          uri: string
          options: string[]
          total: number
        }
        texttracks: {
          uri: string
          options: string[]
          total: number
        }
        related: {
          uri: string
          options: string[]
        }
        recommendations: {
          uri: string
          options: string[]
        }
      }
      interactions: {
        channel: unknown
        report: {
          uri: string
          options: string[]
          reason: string[]
        }
      }
      is_vimeo_create: boolean
      is_screen_record: boolean
    }
    user: {
      uri: string
      name: string
      link: string
      capabilities: {
        hasLiveSubscription: boolean
        hasEnterpriseLihp: boolean
        hasSvvTimecodedComments: boolean
        hasSimplifiedEnterpriseAccount: boolean
      }
      location: string
      gender: string
      bio: string
      short_bio: unknown
      created_time: string
      pictures: {
        uri: string
        active: boolean
        type: string
        base_link: string
        sizes: {
          width: number
          height: number
          link: string
        }[]
        resource_key: string
        default_picture: boolean
      }
      websites: {
        uri: string
        name: unknown
        link: string
        type: string
        description: unknown
      }[]
      metadata: {
        connections: {
          albums: {
            uri: string
            options: string[]
            total: number
          }
          appearances: {
            uri: string
            options: string[]
            total: number
          }
          channels: {
            uri: string
            options: string[]
            total: number
          }
          feed: {
            uri: string
            options: string[]
          }
          followers: {
            uri: string
            options: string[]
            total: number
          }
          following: {
            uri: string
            options: string[]
            total: number
          }
          groups: {
            uri: string
            options: string[]
            total: number
          }
          likes: {
            uri: string
            options: string[]
            total: number
          }
          membership: {
            uri: string
            options: string[]
          }
          moderated_channels: {
            uri: string
            options: string[]
            total: number
          }
          portfolios: {
            uri: string
            options: string[]
            total: number
          }
          videos: {
            uri: string
            options: string[]
            total: number
          }
          shared: {
            uri: string
            options: string[]
            total: number
          }
          pictures: {
            uri: string
            options: string[]
            total: number
          }
          folders_root: {
            uri: string
            options: string[]
          }
          teams: {
            uri: string
            options: string[]
            total: number
          }
          permission_policies: {
            uri: string
            options: string[]
            total: number
          }
        }
      }
      location_details: {
        formatted_address: string
        latitude: unknown
        longitude: unknown
        city: unknown
        state: unknown
        neighborhood: unknown
        sub_locality: unknown
        state_iso_code: unknown
        country: unknown
        country_iso_code: unknown
      }
      skills: unknown[]
      available_for_hire: boolean
      can_work_remotely: boolean
      resource_key: string
      account: string
    }
    play: {
      status: string
    }
    app: {
      name: string
      uri: string
    }
    status: string
    resource_key: string
    upload: unknown
    transcode: unknown
    is_playable: boolean
    has_audio: boolean
  }[]
}

export async function getVimeoChannelVideos(
  channelId: string,
  page: number
): Promise<VimeoChannelVideos> {
  const credential = window.btoa(
    `${config.vimeoClientId}:${config.vimeoClientSecret}`
  )
  const response = await fetch(
    `https://api.vimeo.com/channels/${channelId}/videos?page=${page}`,
    {
      headers: {
        authorization: `Basic ${credential}`,
      },
    }
  )
  return response.json()
}
