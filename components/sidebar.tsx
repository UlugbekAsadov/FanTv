'use client';

import { Logo } from './logo';
import { NavLinks } from './nav-links';

export const Sidebar = () => {
  return (
    <div className=" max-w-[250px] w-full flex-col h-dvh  px-4 bg-background hidden md:flex">
      <div className="flex-1 overflow-auto py-2">
        <Logo />
        <nav className="grid items-start text-sm font-medium">
          <NavLinks withActiveBg withIcon />
        </nav>
      </div>
    </div>
  );
};
