import { LucideProps } from 'lucide-react';

import { Blog } from '../types/blog.type';

export interface IBlog {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  type: Blog;
}

export interface IAddedBlog {
  id: string;
  type: Blog;
  color: string;
  backgroundColor?: string;
  text: string;
  link?: string;
}
