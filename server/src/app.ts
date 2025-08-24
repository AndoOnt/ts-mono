import { Hono } from 'hono';
import { corsMiddleware } from './middlewares/cors';
import { logger } from 'hono/logger';

import { User } from '@mono/shared';

const app = new Hono();

app.use(corsMiddleware);
app.use(logger());

app.get('/public', (c) => {
  const { json } = c;

  const user: User = {
    fullName: 'Andony Nuñez',
    email: 'ando@g.com',
  };

  return json({
    message: 'Public route',
    user,
  });
});

export { app };
