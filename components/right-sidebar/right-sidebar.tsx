'use client';

import { SeparatorSetting } from '@/components/right-sidebar/right-sidebar-settings/seperator.setting';
import { TemplatesSettings } from '@/components/right-sidebar/right-sidebar-settings/templates.settings';
import { usePhoneContext } from '@/context/phone.context';
import { defaultOption } from '@/lib/utils';

import { BackgroundSetting } from './right-sidebar-settings/background-setting/background.setting';
import { DonationSetting } from './right-sidebar-settings/donation.setting';
import { LinkSetting } from './right-sidebar-settings/link.setting';
import { ProfileSettings } from './right-sidebar-settings/profile.setting';
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

      case 'Separator':
        if (editingId) {
          return <SeparatorSetting />;
        }
        return null;

      case 'Profile':
        if (editingId) {
          return <ProfileSettings />;
        }
        return null;

      case 'Donate':
        if (editingId) {
          return <DonationSetting />;
        }
        return null;

      case 'Templates':
        return <TemplatesSettings />;

      default:
        return defaultOption(selectedBlog.type);
    }
  };

  return (
    <aside className="max-w-[300px] w-full border-l sticky top-0 p-4">
      {getCurrentSetting()}
    </aside>
  );
};
