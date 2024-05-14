import { ReactNode } from 'react';

import { Header } from '@/components/header';
import { RightSidebar } from '@/components/right-sidebar/right-sidebar';
import { Sidebar } from '@/components/sidebar';

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow overflow-y-scroll p-4 h-[calc(100vh-57px)]">
          {children}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};
