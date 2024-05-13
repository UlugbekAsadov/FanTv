import { IAddedBlog } from './blog.interface';

export interface ITemplate {
  background: string;
  blogs: IAddedBlog[];
}
