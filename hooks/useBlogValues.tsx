'use client';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

export function useBlogValues<T = string>(
  field: keyof IAddedBlog
): [T, (value: T) => void] {
  const { template, setTemplate, editingId } = usePhoneContext();
  const editingBlog = template.blogs.find((blog) => blog.id === editingId);

  if (!editingBlog) {
    throw Error('Blog not found');
  }

  const value = editingBlog[field] as T;
  const onChange = (value: T | string) => {
    const blogs = template.blogs.map((blog) => {
      if (blog.id === editingId) {
        return {
          ...blog,
          [field]: value,
        };
      }
      return {
        ...blog,
      };
    });

    return setTemplate((prevState) => ({
      ...prevState,
      blogs,
    }));
  };

  return [value, onChange];
}
