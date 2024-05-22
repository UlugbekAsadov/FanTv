import {
  CircleUserRound,
  DollarSignIcon,
  Link,
  Minus,
  Paintbrush,
  PaletteIcon,
  TextIcon,
} from 'lucide-react';
import { v4 } from 'uuid';

import { IBlock } from '../interfaces/block.interface';
import { IDefaultSetting, UnEditableBlock } from '../types/block.type';

export const availableBlocks: IBlock[] = [
  { icon: PaletteIcon, title: 'sidebar.templates', type: 'Templates' },
  { icon: Paintbrush, title: 'sidebar.background', type: 'Background' },
  { icon: CircleUserRound, title: 'sidebar.profile', type: 'Profile' },
  { icon: TextIcon, title: 'sidebar.text', type: 'Text' },
  { icon: Link, title: 'sidebar.link', type: 'Button' },
  { icon: Minus, title: 'sidebar.Separator', type: 'Separator' },
  { icon: DollarSignIcon, title: 'sidebar.donation', type: 'Donate' },
];

export const defaultSettings: IDefaultSetting = {
  Button: {
    id: v4(),
    color: '#ffffff',
    backgroundColor: '#000000',
    text: 'New Button',
    type: 'Button',
    link: undefined,
    fontSize: '16',
    borderRadius: '8',
    width: '100',
    blockPosition: 'center',
    position: 'center',
    marginTop: '5',
    marginBottom: '5',
  },
  Text: {
    id: v4(),
    color: '#000000',
    text: 'New Text',
    type: 'Text',
    backgroundColor: undefined,
    link: undefined,
    fontSize: '16',
    position: 'center',
    marginTop: '5',
    marginBottom: '5',
  },
  Separator: {
    id: v4(),
    color: '#000000',
    type: 'Separator',
    backgroundColor: '#000000',
    blockPosition: 'center',
    width: '100',
    marginBottom: '10',
    marginTop: '10',
  },
  Profile: {
    color: '#000000',
    id: v4(),
    type: 'Profile',
    backgroundColor: '#000000',
    fontSize: '16',
    marginBottom: '5',
    marginTop: '5',
    text: 'User',
  },
  Donate: {
    color: '#000000',
    id: v4(),
    type: 'Donate',
    fontSize: '16',
    borderRadius: '8',
    backgroundColor: '#000000',
  },
};

export const unEditableBlocks: UnEditableBlock[] = ['Background', 'Templates'];
