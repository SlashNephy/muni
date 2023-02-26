import { css } from '@emotion/react'
import { AppShell, Button, Navbar, Text, TextInput } from '@mantine/core'
import { IconBrandYoutube, IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import YouTube from 'react-youtube'

import { ResizeBar } from '../../components/ResizeBar'

export const FloorsBooth: React.FC = () => {
  const { floorId } = useParams<'floorId'>()

  const [youTubeVideoId, setYouTubeVideoId] = useState<string | undefined>(
    '8ajBxCch0No'
  )

  return (
    <AppShell
      navbar={
        <ControlPanel
          onUpdateYouTubeId={(id) => {
            setYouTubeVideoId(id)
          }}
        />
      }
      styles={{
        main: {
          padding: 0,
        },
      }}
    >
      <div
        css={css`
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        `}
      />
      <YouTube
        videoId={youTubeVideoId}
        opts={{
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            modestbranding: 1,
            disablekb: 1,
          },
        }}
        css={css`
          & iframe {
            position: fixed;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: fill;
          }

          // TODO: iframe なのでスタイルが伝播しないのを直す
          & > .ytp-share-button,
          & > .ytp-watermark {
            display: none;
          }
        `}
      />
    </AppShell>
  )
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const ControlPanel: React.FC<{ onUpdateYouTubeId(id?: string): void }> = ({
  onUpdateYouTubeId,
}) => {
  const [width, setWidth] = useState(400)
  const [youTubeVideoId, setYouTubeVideoId] = useState<string>()

  return (
    <Navbar width={{ base: width }}>
      <Text>Navbar</Text>
      <TextInput
        icon={<IconBrandYoutube />}
        value={youTubeVideoId}
        onChange={(e) => {
          setYouTubeVideoId(e.currentTarget.value)
        }}
        rightSection={
          <Button
            onClick={() => {
              onUpdateYouTubeId(youTubeVideoId)
            }}
          >
            <IconSearch />
          </Button>
        }
      />

      <ResizeBar
        initialX={width}
        minWidth={300}
        maxWidth={900}
        onResize={(newWidth) => {
          setWidth(newWidth)
        }}
      />
    </Navbar>
  )
}
