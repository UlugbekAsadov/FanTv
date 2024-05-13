'use client';

import { usePhoneContext } from '@/context/phone.context';

import { LinkBlog } from './template/blogs/link.blog';
import { TextBlog } from './template/blogs/text.blog';

export const Phone = () => {
  const { currentScreenSize, template } = usePhoneContext();

  const renderBlogs = template.blogs.map((addedBlog) => {
    switch (addedBlog.type) {
      case 'Button':
        return <LinkBlog key={addedBlog.id} addedBlog={addedBlog} />;

      case 'Text':
        return <TextBlog key={addedBlog.id} addedBlog={addedBlog} />;
    }
  });

  return (
    <div
      style={{
        width: `${currentScreenSize.width}px`,
        height: `${currentScreenSize.height}px`,
        background: template.background,
      }}
      className="[&>*]:cursor-pointer scrollbar scrollbar-hide overflow-y-scroll rounded-5xl border-[15px] border-gray-900 p-3 flex flex-col space-y-2"
    >
      {renderBlogs}
    </div>
  );
};
