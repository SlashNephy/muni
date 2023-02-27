import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { useMemo } from 'react'

import { config } from './config'
import { FloorServiceClient } from '../pb/Floor.client'

export const useFloorServiceClient = (): FloorServiceClient =>
  useMemo(
    () =>
      new FloorServiceClient(
        new GrpcWebFetchTransport({
          format: 'binary',
          baseUrl: config.backendOrigin,
        })
      ),
    []
  )
