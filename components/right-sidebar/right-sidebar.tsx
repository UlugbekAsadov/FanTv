'use client';

import { XIcon } from 'lucide-react';

import { SeparatorSetting } from '@/components/right-sidebar/right-sidebar-settings/seperator.setting';
import { TemplatesSettings } from '@/components/right-sidebar/right-sidebar-settings/templates.settings';
import { useLocaleContext } from '@/context/locale.context';
import { usePhoneContext } from '@/context/phone.context';
import { cn, defaultOption } from '@/lib/utils';

import { Button } from '../ui/button';
import { BackgroundSetting } from './right-sidebar-settings/background-setting/background.setting';
import { DonationSetting } from './right-sidebar-settings/donation.setting';
import { LinkSetting } from './right-sidebar-settings/link.setting';
import { ProfileSettings } from './right-sidebar-settings/profile.setting';
import { TextSetting } from './right-sidebar-settings/text.setting';

export const RightSidebar = () => {
  const {
    selectedBlock,
    editingBlockId,
    setIsSidebarOpen,
    isSidebarOpen,
    handleRemoveBlock,
    validatePreviousBlock,
  } = usePhoneContext();

  const { t } = useLocaleContext();
  const getCurrentSetting = () => {
    switch (selectedBlock.type) {
      case 'Background':
        return <BackgroundSetting />;

      case 'Button':
        if (editingBlockId) {
          return <LinkSetting />;
        }
        return null;

      case 'Text':
        if (editingBlockId) {
          return <TextSetting />;
        }
        return null;

      case 'Separator':
        if (editingBlockId) {
          return <SeparatorSetting />;
        }
        return null;

      case 'Profile':
        if (editingBlockId) {
          return <ProfileSettings />;
        }
        return null;

      case 'Donate':
        if (editingBlockId) {
          return <DonationSetting />;
        }
        return null;

      case 'Templates':
        return <TemplatesSettings />;

      default:
        return defaultOption(selectedBlock.type);
    }
  };

  const closeRightSidebar = () => {
    const isDirty = validatePreviousBlock();
    if (isDirty) return null;
    setIsSidebarOpen((prevVal) => ({ ...prevVal, right: false }));
  };

  return (
    <aside
      className={cn(
        '-translate-x-full lg:translate-x-0 fixed h-screen lg:h-full top-0 transition lg:relative  lg:max-w-[300px] w-full lg:border-l bg-white z-10',
        isSidebarOpen.right &&
          'animate-sidebar-left translate-x-0 md:animate-none'
      )}
    >
      <div className="py-2 border-b flex items-center justify-between px-4">
        <h3 className="text-center">{t('sidebar.edit_block')}</h3>
        <XIcon className="block lg:hidden" onClick={closeRightSidebar} />
      </div>
      <div className="p-4 ">
        {getCurrentSetting()}
        <div className="grid grid-cols-2 gap-2 sticky bottom-3 mt-3 lg:hidden">
          <Button
            onClick={closeRightSidebar}
            className="w-full h-12 "
          >
            {t('sidebar.apply')}
          </Button>
          <Button
            onClick={handleRemoveBlock.bind(null, editingBlockId || '1')}
            variant="destructive"
            className="w-full h-12 "
          >
            {t('sidebar.delete_block')}
          </Button>
        </div>
      </div>
    </aside>
  );
};
