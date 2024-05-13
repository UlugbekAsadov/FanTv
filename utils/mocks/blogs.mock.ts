import { Link, Paintbrush, TextIcon } from 'lucide-react';
import { v4 } from 'uuid';

import { IBlog } from '../interfaces/blog.interface';
import { IDefaultSetting } from '../types/blog.type';

export const availableBlogs: IBlog[] = [
  { icon: Paintbrush, title: 'sidebar.background', type: 'Background' },
  { icon: TextIcon, title: 'sidebar.text', type: 'Text' },
  { icon: Link, title: 'sidebar.link', type: 'Button' },
];

export const defaultSettings: IDefaultSetting = {
  Button: {
    id: v4(),
    color: '#ffffff',
    backgroundColor: '#000000',
    text: 'New Button',
    type: 'Button',
    link: undefined,
  },
  Text: {
    id: v4(),
    color: '#000000',
    text: 'New Text',
    type: 'Text',
    backgroundColor: undefined,
    link: undefined,
  },
};
