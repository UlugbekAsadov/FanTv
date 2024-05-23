'use client';
import { SaveIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useLocaleContext } from '@/context/locale.context';
import { useUserContext } from '@/context/user.context';

export const PreviewLink = () => {
  const { lang, t } = useLocaleContext();
  const { userName, saveTemplate } = useUserContext();

  return (
    <div className="border border-gray-300 px-3 py-1 rounded-lg flex flex-col lg:flex-row items-center gap-2 max-w-lg w-full">
      <Link className="block flex-grow underline md:list-none w-full text-center lg:text-start" href={`/${lang}/${userName}`}>
        {window.location.origin}/{lang}/{userName}
      </Link>
      <Button
        onClick={saveTemplate}
        className="text-white flex items-center gap-1 text-sm py-1 w-full lg:w-fit"
      >
        <SaveIcon width={18} />
        {t('save')}
      </Button>
    </div>
  );
};
