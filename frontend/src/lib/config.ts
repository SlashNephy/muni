import { z } from 'zod'

const schema = z.object({
  backendOrigin: z.string(),
  vimeoClientId: z.string(),
  vimeoClientSecret: z.string(),
})

export const config = schema.parse({
  backendOrigin: import.meta.env.VITE_BACKEND_ORIGIN,
  vimeoClientId: import.meta.env.VITE_VIMEO_CLIENT_ID,
  vimeoClientSecret: import.meta.env.VITE_VIMEO_CLIENT_SECRET,
})
