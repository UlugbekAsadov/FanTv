import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-secondary h-dvh overflow-y-scroll">
        <Header />
        <div className="flex flex-1 flex-col p-4">{children}</div>
      </div>
    </div>
  );
};
