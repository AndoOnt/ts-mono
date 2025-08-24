import { z } from 'zod';

const ALLOWED_ENVIRONMENTS = ['development', 'production'] as const;

const envSchema = z.object({
  ENVIRONMENT: z.union(ALLOWED_ENVIRONMENTS.map((c) => z.literal(c))),

  PORT: z.coerce.number().min(1000),
  REACT_APP_URL: z.url(),
});

export const Env: z.infer<typeof envSchema> = envSchema.parse(process.env);
