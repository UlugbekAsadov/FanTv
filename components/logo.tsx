'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const Logo = () => {
  const { theme } = useTheme();

  const logoPath = theme === 'light' ? '/logo.svg' : '/logo-dark.svg';

  return <Image src={logoPath} alt="fantv logo" width={64} height={64} />;
};
