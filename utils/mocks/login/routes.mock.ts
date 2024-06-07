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
  {
    path: '/auth/login',
    title: 'Login',
    isHidden: true,
  },
  {
    path: '/auth/register',
    title: 'Register',
    isHidden: true,
  },
];
