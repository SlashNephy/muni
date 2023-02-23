import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Audience } from './routes/Audience'
import { Booth } from './routes/Booth'
import { Error } from './routes/Error'
// noinspection ES6PreferShortImport
import { Index } from './routes/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: '/audience',
    element: <Audience />,
    errorElement: <Error />,
  },
  {
    path: '/booth',
    element: <Booth />,
    errorElement: <Error />,
  },
])

const root = document.getElementById('root')
if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </React.StrictMode>
  )
}
