'use client';

import { XIcon } from 'lucide-react';

import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';
import { cn } from '@/lib/utils';
import { availableBlocks } from '@/utils/mocks/blocks.mock';

export const LeftSidebar = () => {
  const { t } = useLocaleContext();
  const { selectedBlock, handleAddBlock, isSidebarOpen, setIsSidebarOpen } =
    usePhoneContext();

  const renderBlocks = availableBlocks.map((block) => {
    const isActive = block.type === selectedBlock.type;

    return (
      <div
        key={block.type}
        className={cn(
          'px-4 py-2 border rounded-2xl flex items-center flex-col justify-center cursor-pointer',
          isActive && 'border-red-500'
        )}
        onClick={handleAddBlock.bind(null, block)}
      >
        <block.icon />
        <p className="text-sm mt-2">{t(block.title)}</p>
      </div>
    );
  });

  return (
    <aside
      className={cn(
        '-translate-x-full lg:translate-x-0 fixed h-screen top-0 lg:h-full transition lg:relative bg-white lg:max-w-[300px] w-full lg:border-r z-10',
        isSidebarOpen.left &&
          'animate-sidebar-left translate-x-0 md:animate-none'
      )}
    >
      <div className="py-2 border-b flex items-center justify-between px-4">
        <h3 className="text-center">{t('sidebar.add_new_block')}</h3>
        <XIcon
          className="block lg:hidden"
          onClick={() =>
            setIsSidebarOpen((prevVal) => ({ ...prevVal, left: false }))
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-2 p-4">{renderBlocks}</div>
    </aside>
  );
};
