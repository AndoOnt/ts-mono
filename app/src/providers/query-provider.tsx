import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const QueryClientProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <Provider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  );
};

export { QueryClientProvider };
