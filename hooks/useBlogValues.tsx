'use client';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

export const useBlogValues = (
  field: keyof IAddedBlog
): [string, (value: string) => void] => {
  const { template, setTemplate, editingId } = usePhoneContext();
  const editingBlog = template.blogs.find((blog) => blog.id === editingId);

  if (!editingBlog) {
    throw Error('Blog not found');
  }

  const value = editingBlog[field] as keyof IAddedBlog;
  const onChange = (value: string) => {
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
};
