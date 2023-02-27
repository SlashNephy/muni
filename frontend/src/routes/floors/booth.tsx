import { AppShell, Button, Navbar, Text, TextInput } from '@mantine/core'
import { IconBrandYoutube, IconSearch } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { ResizeBar } from '../../components/ResizeBar'

function ControlPanel(): React.ReactElement {
  const [width, setWidth] = useState(400)
  const [youTubeVideoId, setYouTubeVideoId] = useState<string>()

  return (
    <Navbar width={{ base: width }}>
      <Text>Navbar</Text>
      <TextInput
        icon={<IconBrandYoutube />}
        value={youTubeVideoId}
        rightSection={
          <Button>
            <IconSearch />
          </Button>
        }
        onChange={(e) => {
          setYouTubeVideoId(e.currentTarget.value)
        }}
      />

      <ResizeBar
        initialX={width}
        maxWidth={900}
        minWidth={300}
        onResize={(newWidth) => {
          setWidth(newWidth)
        }}
      />
    </Navbar>
  )
}

export function FloorsBooth(): React.ReactElement {
  const { floorId } = useParams<'floorId'>()

  return (
    <AppShell
      navbar={<ControlPanel />}
      styles={{
        main: {
          padding: 0,
        },
      }}
    >
      {floorId}
    </AppShell>
  )
}
