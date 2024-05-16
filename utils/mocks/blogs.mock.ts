import { Link, Minus, Paintbrush, TextIcon } from 'lucide-react';
import { v4 } from 'uuid';

import { IBlog } from '../interfaces/blog.interface';
import { IDefaultSetting } from '../types/blog.type';

export const availableBlogs: IBlog[] = [
  { icon: Paintbrush, title: 'sidebar.background', type: 'Background' },
  { icon: TextIcon, title: 'sidebar.text', type: 'Text' },
  { icon: Link, title: 'sidebar.link', type: 'Button' },
  { icon: Minus, title: 'sidebar.seperator', type: 'Seperator' },
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
    blogPosition: 'center',
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
  Seperator: {
    id: v4(),
    color: '#000000',
    type: 'Seperator',
    backgroundColor: '#000000',
    blogPosition: 'center',
    width: '100',
    marginBottom: '10',
    marginTop: '10',
  },
};
