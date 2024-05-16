import { LucideProps } from 'lucide-react';

import { Blog, BlogPositions } from '../types/blog.type';
import { Positions } from '../types/properties.type';

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
  fontSize?: string;
  borderRadius?: string;
  width?: string;
  blogPosition?: BlogPositions;
  position?: Positions;
}
