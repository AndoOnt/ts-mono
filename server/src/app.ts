import { Hono } from 'hono';
import { corsMiddleware } from './middlewares/cors';
import { logger } from 'hono/logger';

const app = new Hono();

app.use(corsMiddleware);
app.use(logger());

app.get('/public', (c) => {
  const { json } = c;

  return json({
    message: 'Public route',
  });
});

export { app };
