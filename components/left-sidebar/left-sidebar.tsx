'use client';

import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';
import { cn } from '@/lib/utils';
import { availableBlocks } from '@/utils/mocks/blocks.mock';

export const LeftSidebar = () => {
  const { t } = useLocaleContext();
  const { selectedBlock, handleAddBlock } = usePhoneContext();

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
    <aside className="max-w-[300px] w-full border-r sticky top-0">
      <div className="py-2 border-b">
        <h3 className="text-center">{t('sidebar.add_new_block')}</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4">{renderBlocks}</div>
    </aside>
  );
};
