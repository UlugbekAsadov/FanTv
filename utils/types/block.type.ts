import { Positions } from '@/utils/types/properties.type';

import { IAddedBlock } from '../interfaces/block.interface';

export type Block =
  | 'Background'
  | 'Text'
  | 'Button'
  | 'Separator'
  | 'Profile'
  | 'Donate'
  | 'Templates';

export type EditableBlock = Exclude<Block, 'Background' | 'Templates'>;
export type UnEditableBlock = Extract<Block, 'Background' | 'Templates'>;

export type IBlockDefaultSetting = {
  [key in EditableBlock]: IAddedBlock;
};

export type BlockPositions = Positions;
