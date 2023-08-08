import { Loader, Stack, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'

import { CardWithImage } from '../../components/CardWithImage'
import { AppLayout } from '../../components/layouts/AppLayout'
import { useVimeoServiceClient } from '../../lib/useServiceClient'

export function FloorsBooth(): React.ReactElement {
  const { floorId } = useParams<'floorId'>()
  const client = useVimeoServiceClient()
  const { data, isLoading } = useQuery(['vimeo-videos'], async () =>
    client.listVideoVideos({
      page: 1,
    })
  )

  return (
    <AppLayout>
      {isLoading ? (
        <Stack>
          <Text>読み込み中です...</Text>
          <Loader />
        </Stack>
      ) : (
        data?.response.videos.map((v) => (
          <CardWithImage
            key={v.key}
            author={v.authorName}
            image={v.previewUrl}
            link={v.url}
            title={v.title}
          />
        ))
      )}
    </AppLayout>
  )
}
