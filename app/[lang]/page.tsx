'use client';

import { useLocaleContext } from '@/context/locale.context';

export default function Home() {
  const { t } = useLocaleContext();
  return <h1 className="">{t('hello')}</h1>;
}
