import { LeftSidebarOpener } from '@/components/left-sidebar-opener';
import { Phone } from '@/components/phone';
import { PreviewLink } from '@/components/preview-link';

export default function HomePage() {
  return (
    <div className=" w-full flex flex-col space-y-3 items-center justify-center">
      <PreviewLink />
      <Phone />
      <LeftSidebarOpener />
    </div>
  );
}
