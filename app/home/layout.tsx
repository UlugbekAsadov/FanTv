import { MainLayout } from '@/layout/main-layout';

export const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainLayout>{children}</MainLayout>;
};

export default HomeLayout;
