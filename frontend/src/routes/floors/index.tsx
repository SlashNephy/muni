import { css } from '@emotion/react'
import { Card, Grid, Group, Text, Title } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

import { AppLayout } from '../../components/layouts/AppLayout'
import { useFloorServiceClient } from '../../lib/useServiceClient'
import { Authentication_Mode } from '../../pb/Floor'

import type { Floor } from '../../pb/Floor'

export function FloorsIndex(): React.ReactElement {
  const client = useFloorServiceClient()
  const { data: floors } = useQuery(['floors'], async () =>
    client.listFloors({})
  )

  return (
    <AppLayout size="xl">
      <Grid>
        {floors?.response.floors.map((floor: Floor) => (
          <Grid.Col key={floor.id} span={6}>
            <Card withBorder shadow="md">
              <Link
                to={`/floors/${floor.id}`}
                css={css`
                  color: #000000;
                `}
              >
                <Group>
                  {floor.authentication !== Authentication_Mode.None && (
                    <IconLock
                      size={32}
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    />
                  )}
                  <Title>{floor.name}</Title>
                </Group>
              </Link>
              {floor.host && <Text>VJ {floor.host.name}</Text>}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </AppLayout>
  )
}
