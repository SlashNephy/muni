import { css } from '@emotion/react'
import { Card, Grid, Group, Text, Title } from '@mantine/core'
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { IconLock } from '@tabler/icons-react'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { AppLayout } from '../../components/layouts/AppLayout'
import { config } from '../../lib/config'
import { Authentication_Mode } from '../../pb/Floor'
import { FloorServiceClient } from '../../pb/Floor.client'

import type { Floor } from '../../pb/Floor'

export const FloorsIndex: React.FC = () => {
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

  const { data: floors } = useQuery(
    ['floors'],
    async () => await client.listFloors({})
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
