import { z } from 'zod'

const schema = z.object({
  backendOrigin: z.string(),
})

export const config = schema.parse({
  backendOrigin: import.meta.env.VITE_BACKEND_ORIGIN,
})
