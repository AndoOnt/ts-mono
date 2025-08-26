import { Env } from '@/utils/getEnv';

import { cors } from 'hono/cors';

const corsMiddleware = cors({
  allowMethods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: [Env.REACT_APP_URL],
  credentials: true,
  allowHeaders: ['Access-Control-Allow-Origin'],
});

export { corsMiddleware };
