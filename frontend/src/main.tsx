import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { i18n } from './locales/i18n'
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
            <I18nextProvider i18n={i18n}>
              <RouterProvider router={router} />
            </I18nextProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>
  )
}
