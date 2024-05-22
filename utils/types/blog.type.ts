import { IAddedBlog } from '../interfaces/blog.interface';

export type Blog =
  | 'Background'
  | 'Text'
  | 'Button'
  | 'Separator'
  | 'Profile'
  | 'Donate'
  | 'Templates';

export type EditableBlog = Exclude<Blog, 'Background' | 'Templates'>;
export type UnEditableBlog = Extract<Blog, 'Background' | 'Templates'>;

export type IDefaultSetting = {
  [key in EditableBlog]: IAddedBlog;
};

export type BlogPositions = 'start' | 'center' | 'end';
