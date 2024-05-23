'use client';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';

import { Button } from './ui/button';

export const LeftSidebarOpener = () => {
  const { t } = useLocaleContext();
  const { setIsSidebarOpen } = usePhoneContext();
  return (
    <Button
      className="sticky bottom-0 mx-auto max-w-lg w-full rounded-xl h-12 block lg:hidden"
      onClick={() =>
        setIsSidebarOpen((prevVal) => ({ ...prevVal, left: true }))
      }
    >
      {t('sidebar.add_new_block')}
    </Button>
  );
};
