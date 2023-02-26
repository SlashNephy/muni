import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Audience } from './routes/Audience'
import { Booth } from './routes/Booth'
import { ErrorReport } from './routes/ErrorReport'
import { HostFloor } from './routes/HostFloor'
// noinspection ES6PreferShortImport
import { Index } from './routes/Index'
import { JoinFloor } from './routes/JoinFloor'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorReport />,
  },
  {
    path: '/join',
    element: <JoinFloor />,
    errorElement: <ErrorReport />,
  },
  {
    path: '/host',
    element: <HostFloor />,
    errorElement: <ErrorReport />,
  },
  {
    path: '/audience',
    element: <Audience />,
    errorElement: <ErrorReport />,
  },
  {
    path: '/booth',
    element: <Booth />,
    errorElement: <ErrorReport />,
  },
])

const queryClient = new QueryClient()

const root = document.getElementById('root')
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </React.StrictMode>
  )
}
