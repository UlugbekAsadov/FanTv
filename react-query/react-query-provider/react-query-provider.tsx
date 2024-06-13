'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { DialogProvider } from '@/context/dialog.context';

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
    <QueryClientProvider client={queryClient}>
      <DialogProvider>{children}</DialogProvider>
    </QueryClientProvider>
  );
}
