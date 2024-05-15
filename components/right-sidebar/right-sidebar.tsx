'use client';

import { usePhoneContext } from '@/context/phone.context';
import { defaultOption } from '@/lib/utils';

import { BackgroundSetting } from './right-sidebar-settings/background-setting/background.setting';
import { LinkSetting } from './right-sidebar-settings/link.setting';
import { TextSetting } from './right-sidebar-settings/text.setting';

export const RightSidebar = () => {
  const { selectedBlog, editingId } = usePhoneContext();

  const getCurrentSetting = () => {
    switch (selectedBlog.type) {
      case 'Background':
        return <BackgroundSetting />;
      case 'Button':
        if (editingId) {
          return <LinkSetting />;
        }
        return null;
      case 'Text':
        if (editingId) {
          return <TextSetting />;
        }
        return null;
      default:
        return defaultOption(selectedBlog.type);
    }
  };

  return (
    <aside className="max-w-[300px] w-full border-l">
      {getCurrentSetting()}
    </aside>
  );
};
