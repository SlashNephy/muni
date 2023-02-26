import { MantineProvider } from '@mantine/core'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { Index } from './routes'
import { ErrorReport } from './routes/error'
import { FloorsIndex } from './routes/floors'
import { Floor } from './routes/floors/:floorId'
import { FloorsBooth } from './routes/floors/booth'
import { FloorsNew } from './routes/floors/new'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/floors',
      element: <FloorsIndex />,
    },
    {
      path: '/floors/new',
      element: <FloorsNew />,
    },
    {
      path: '/floors/:floorId',
      element: <Floor />,
    },
    {
      path: '/floors/:floorId/booth',
      element: <FloorsBooth />,
    },
  ].map((r) => ({
    ...r,
    errorElement: <ErrorReport />,
  }))
)

const queryClient = new QueryClient()

const root = document.getElementById('root')
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <RouterProvider router={router} />
          </RecoilRoot>
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>
  )
}
