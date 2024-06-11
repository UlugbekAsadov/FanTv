'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

export default function ReactQueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 30 * 1000, // 30s
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
