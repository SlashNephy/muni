import { css } from '@emotion/react'
import YouTube from '@u-wave/react-youtube'
import React from 'react'

export function YouTubePlayer({
  videoId,
}: {
  videoId: string
}): React.ReactElement {
  return (
    <>
      {/* 被せてインタラクションできないようにする */}
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
        `}
      />

      <YouTube
        autoplay
        disableKeyboard
        modestBranding
        muted
        allowFullscreen={false}
        annotations={false}
        controls={false}
        showCaptions={false}
        showRelatedVideos={false}
        video={videoId}
      />
    </>
  )
}
