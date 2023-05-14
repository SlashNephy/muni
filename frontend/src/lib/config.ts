import { z } from 'zod'

const schema = z.object({
  backendOrigin: z.string(),
  turnstileSiteKey: z.string().optional(),
})

export const config = schema.parse({
  backendOrigin: import.meta.env.VITE_BACKEND_ORIGIN,
  turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
})
