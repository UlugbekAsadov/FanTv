import { MainLayout } from '@/layout/main-layout';

const ChannelLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <MainLayout>{children}</MainLayout>;
};

export default ChannelLayout;
