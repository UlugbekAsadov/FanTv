import { ReactNode } from 'react';

import { MainLayout } from '@/layout/main-layout';

interface IProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: IProps) {
  return <MainLayout>{children}</MainLayout>;
}
