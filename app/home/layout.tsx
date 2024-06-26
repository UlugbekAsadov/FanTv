import { MainLayout } from '@/layout/main-layout';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainLayout>{children}</MainLayout>;
};

export default HomeLayout;
