'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useGetMe } from '@/react-query/hooks/hooks';
import { Theme } from '@/utils/enums/theme.enum';

import { Logo } from './logo';
import { NavLinks } from './nav-links';
import { Button } from './ui/button';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const { data: user } = useGetMe();
  const handleToggleTheme = () => {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  };

  return (
    <header className="flex h-16 items-center w-full justify-between md:justify-end px-6 sticky bg-background md:bg-transparent top-0 z-10">
      <div className="block md:hidden">
        <Logo />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="bg-background rounded-full">
          <div className="flex p-2 items-center cursor-pointer shadow-sm ">
            <MenuIcon width={32} />

            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover',
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="block md:hidden">
            <NavLinks asDropdownItem />
          </div>

          <DropdownMenuItem onClick={handleToggleTheme}>
            {theme === Theme.Dark ? (
              <div className="flex items-center gap-2 flex-row-reverse">
                <SunIcon className="h-5 w-5" />
                <span className="">Light Mode</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-row-reverse">
                <MoonIcon className="h-5 w-5" />

                <span className="">Dark Mode</span>
              </div>
            )}
          </DropdownMenuItem>

          <DropdownMenuItem>{user ? 'Logout' : 'Login'}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
