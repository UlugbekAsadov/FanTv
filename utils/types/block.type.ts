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

export type IDefaultSetting = {
  [key in EditableBlock]: IAddedBlock;
};

export type BlockPositions = 'start' | 'center' | 'end';
