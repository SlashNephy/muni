import { Badge } from '@mantine/core'
import { IconFlask } from '@tabler/icons-react'
import React from 'react'

export function ExperimentalBadge(): React.ReactElement {
  return (
    <Badge
      color="green"
      leftSection={
        <IconFlask
          size={16}
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        />
      }
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        textTransform: 'initial',
      }}
    >
      試験運用中の機能
    </Badge>
  )
}
