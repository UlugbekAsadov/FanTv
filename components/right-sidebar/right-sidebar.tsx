'use client';

import { usePhoneContext } from '@/context/phone.context';
import { defaultOption } from '@/lib/utils';

import { BackgroundSetting } from './right-sidebar-settings/background-setting/background.setting';
import { DonationSetting } from './right-sidebar-settings/donation-setting/donation.setting';
import { LinkSetting } from './right-sidebar-settings/link.setting';
import { ProfileSettings } from './right-sidebar-settings/profile.setting';
import { SeperatorSetting } from './right-sidebar-settings/seperator.setting';
import { TextSetting } from './right-sidebar-settings/text.setting';

export const RightSidebar = () => {
  const { selectedBlog, editingId } = usePhoneContext();

  const getCurrentSetting = () => {
    switch (selectedBlog.type) {
      case 'Background':
        return <BackgroundSetting />;

      case 'Button':
        return <LinkSetting />;

      case 'Text':
        return <TextSetting />;

      case 'Seperator':
        return <SeperatorSetting />;

      case 'Profile':
        return <ProfileSettings />;

      case 'Donate':
        return <DonationSetting />;

      default:
        return defaultOption(selectedBlog.type);
    }
  };

  return (
    <aside className="max-w-[300px] w-full border-l sticky top-0">
      {editingId ? getCurrentSetting() : null}
    </aside>
  );
};
