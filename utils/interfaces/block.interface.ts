import { LucideProps } from 'lucide-react';

import { Block, BlockPositions, EditableBlock } from '../types/block.type';
import { Positions } from '../types/properties.type';

export interface IBlock {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  type: Block;
}

export interface IAddedBlock {
  id: string;
  type: EditableBlock;
  color: string;
  backgroundColor?: string;
  text?: string;
  link?: string;
  fontSize?: string;
  borderRadius?: string;
  width?: string;
  blockPosition?: BlockPositions;
  position?: Positions;
  marginTop?: string;
  marginBottom?: string;
  src?: string;
  backgroundImage?: string;
}
