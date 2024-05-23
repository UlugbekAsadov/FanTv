import { ReactNode } from 'react';

import { Header } from '@/components/header';
import { LeftSidebar } from '@/components/left-sidebar/left-sidebar';
import { RightSidebar } from '@/components/right-sidebar/right-sidebar';

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <LeftSidebar />
        <div className="flex-grow overflow-y-scroll p-4 bg-muted h-[calc(100vh-57px)]">
          {children}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};
