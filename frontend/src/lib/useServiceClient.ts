import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { useMemo } from 'react'

import { config } from './config'
import { FloorServiceClient } from '../pb/Floor.client'
import { VimeoServiceClient } from '../pb/Vimeo.client'

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

export const useVimeoServiceClient = (): VimeoServiceClient =>
  useMemo(
    () =>
      new VimeoServiceClient(
        new GrpcWebFetchTransport({
          format: 'binary',
          baseUrl: config.backendOrigin,
        })
      ),
    []
  )
