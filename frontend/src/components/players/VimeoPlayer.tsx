import { css } from '@emotion/react'
import Vimeo from '@u-wave/react-vimeo'
import React from 'react'

export function VimeoPlayer({
  videoId,
}: {
  videoId: number
}): React.ReactElement {
  return (
    <Vimeo
      autopause
      background
      dnt
      loop
      muted
      playsInline
      controls={false}
      keyboard={false}
      pip={false}
      showByline={false}
      showPortrait={false}
      showTitle={false}
      video={videoId}
      css={css`
        & iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}
    />
  )
}
