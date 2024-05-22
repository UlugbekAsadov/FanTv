import { LucideProps } from 'lucide-react';

import { Blog, BlogPositions, EditableBlog } from '../types/blog.type';
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
  type: EditableBlog;
  color: string;
  backgroundColor?: string;
  text?: string;
  link?: string;
  fontSize?: string;
  borderRadius?: string;
  width?: string;
  blogPosition?: BlogPositions;
  position?: Positions;
  marginTop?: string;
  marginBottom?: string;
  src?: string;
  backgroundImage?: string;
}

export interface IPos {
  x: number;
  y: number;
}
