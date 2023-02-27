import React, { useRef } from 'react'

import { useScreenWakeLock } from '../../lib/useScreenWakeLock'

export function Html5VideoPlayer({
  videoUrl,
}: {
  videoUrl: string
}): React.ReactElement {
  const ref = useRef<HTMLVideoElement>(null)

  useScreenWakeLock(
    () => {
      ref.current?.play()?.catch(console.error)
    },
    () => {
      ref.current?.pause()
    }
  )

  return (
    <video
      ref={ref}
      autoPlay
      disablePictureInPicture
      loop
      muted
      playsInline
      controls={false}
      crossOrigin="anonymous"
      disableRemotePlayback={false}
      src={videoUrl}
    />
  )
}
