import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from 'lucide-react';

import { IGradientDirection } from '../interfaces/gradient.interface';

export const gradientDirections: IGradientDirection[] = [
  {
    direction: 'to top',
    icon: ChevronUp,
  },
  {
    direction: 'to right',
    icon: ChevronRight,
  },
  {
    direction: 'to bottom',
    icon: ChevronDown,
  },
  {
    direction: 'to left',
    icon: ChevronLeft,
  },
];
