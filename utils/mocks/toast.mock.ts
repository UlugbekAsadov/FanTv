import { ToasterToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

export const toastConfig: Omit<ToasterToast, 'id'> = {
  className: cn(
    'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 '
  ),
};
