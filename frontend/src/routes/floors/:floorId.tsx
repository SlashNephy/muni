import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PlayerLayout } from '../../components/layouts/PlayerLayout'
import { VimeoPlayer } from '../../components/players/VimeoPlayer'
import { useFloorServiceClient } from '../../lib/useFloorServiceClient'

export function Floor(): React.ReactElement {
  const { floorId } = useParams<'floorId'>()

  const client = useFloorServiceClient()
  useEffect(() => {
    ;(async () => {
      const p = client.joinFloor({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        floorId: floorId!,
      })

      for await (const res of p.responses) {
        console.log(res)
      }
    })().catch(console.error)
  }, [client, floorId])

  return (
    <PlayerLayout>
      <VimeoPlayer videoId={252893118} />
      {/* <YouTubePlayer videoId="8ajBxCch0No" /> */}
      {/* <Html5VideoPlayer videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}
    </PlayerLayout>
  )
}
