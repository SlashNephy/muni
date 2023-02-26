import { css } from '@emotion/react'
import { AppShell, AspectRatio } from '@mantine/core'
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router'

import { config } from '../../lib/config'
import { useScreenWakeLock } from '../../lib/useScreenWakeLock'
import { FloorServiceClient } from '../../pb/Floor.client'

export const Floor: React.FC = () => {
  const { floorId } = useParams<'floorId'>()

  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoUrl] = useState(
    'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  )

  const client = useMemo(
    () =>
      new FloorServiceClient(
        new GrpcWebFetchTransport({
          format: 'binary',
          baseUrl: config.backendOrigin,
        })
      ),
    []
  )

  useEffect(() => {
    const promise = async () => {
      const p = client.joinFloor({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        floorId: floorId!,
      })

      for await (const res of p.responses) {
        console.log(res)
      }
    }
    promise().catch(console.error)
  }, [client, floorId])

  useScreenWakeLock(
    () => {
      void videoRef.current?.play()
    },
    () => {
      videoRef.current?.pause()
    }
  )

  return (
    <AppShell>
      <AspectRatio
        ratio={16 / 9}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          overflow: hidden;
        `}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          crossOrigin="anonymous"
          playsInline
          controls={false}
          autoPlay
          disablePictureInPicture
          disableRemotePlayback={false}
        />
      </AspectRatio>
    </AppShell>
  )
}
