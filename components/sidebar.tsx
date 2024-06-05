'use client';

import { HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const Sidebar = () => {
  const isActive = true;
  return (
    <div className="flex max-w-[250px] w-full flex-col h-dvh  px-4 bg-background">
      <div className="flex-1 overflow-auto py-2">
        <Image src="/logo.svg" alt="fantv logo" width={64} height={64} />
        <nav className="grid items-start text-sm font-medium">
          <Link
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
              isActive && 'bg-muted'
            )}
            href="#"
          >
            <HomeIcon className="h-5 w-5 text-primary" />
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};
