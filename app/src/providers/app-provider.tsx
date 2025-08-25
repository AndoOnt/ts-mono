import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen';
import { QueryClientProvider } from './query-provider';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const AppProvider = () => {
  return (
    <>
      <QueryClientProvider>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export { AppProvider };
