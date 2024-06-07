import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface IProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  withActiveBg?: boolean;
}

export const NavLink = ({
  children,
  className,
  href,
  withActiveBg,
  ...props
}: IProps) => {
  const pathName = usePathname();
  const defaultClassNames =
    'flex items-center gap-3 rounded-lg px-3 py-2 text-black transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50';
  const isActive = pathName === href;
  const activeClassNames = withActiveBg && 'bg-muted';

  return (
    <Link
      href={href}
      {...props}
      className={cn(defaultClassNames, className, isActive && activeClassNames)}
    >
      {children}
    </Link>
  );
};
