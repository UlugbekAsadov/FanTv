import { HomeIcon } from 'lucide-react';

import { IRoute } from '@/utils/interfaces/routes.interface';

export const availableRoutes: IRoute[] = [
  {
    path: '/home',
    title: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/channel/:username',
    title: 'Channel',
    isHidden: true,
  },
];
