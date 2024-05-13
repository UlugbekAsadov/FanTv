import { IAddedBlog } from '../interfaces/blog.interface';

export type Blog = 'Background' | 'Text' | 'Button';

export type EditableBlog = Exclude<Blog, 'Background'>;

export type IDefaultSetting = {
  [key in EditableBlog]: IAddedBlog;
};
