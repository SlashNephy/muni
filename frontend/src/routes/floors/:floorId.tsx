import { css } from '@emotion/react'
import { AppShell, AspectRatio } from '@mantine/core'
import { useDocumentVisibility } from '@mantine/hooks'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { useWakeLock } from 'react-screen-wake-lock'

export const Floor: React.FC = () => {
  const { floorId } = useParams<'floorId'>()

  const documentState = useDocumentVisibility()
  const { isSupported, request, release } = useWakeLock()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoUrl] = useState(
    'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  )

  useEffect(() => {
    switch (documentState) {
      case 'hidden':
        videoRef.current?.pause()
        if (isSupported) {
          release().catch(console.error)
        }
        return
      case 'visible':
        void videoRef.current?.play()
        if (isSupported) {
          request('screen').catch(console.error)
        }
    }
  }, [documentState, isSupported, release, request])

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
