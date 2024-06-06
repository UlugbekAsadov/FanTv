import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';

export const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex bg-secondary">
      <Sidebar />
      <div className="flex-grow  h-dvh overflow-y-scroll max-w-6xl w-full mx-auto">
        <Header />
        <div className="flex flex-1 flex-col p-4">{children}</div>
      </div>
    </div>
  );
};
