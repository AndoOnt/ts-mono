import { serve } from '@hono/node-server';

import { app } from './app';
import { Env } from '@/utils/getEnv';

const runServer = () => {
  serve({
    fetch: app.fetch,
    port: Env.PORT,
  });

  console.log(`✅ Server is running on http://localhost:${Env.PORT}`);
};

runServer();
