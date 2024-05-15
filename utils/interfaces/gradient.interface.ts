import { LucideProps } from 'lucide-react';

import { GradientDirections } from '../types/gradient.type';

export interface IGradientDirection {
  direction: GradientDirections;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}
