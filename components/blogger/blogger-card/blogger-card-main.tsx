import { BloggerPreviewVideoCard } from './blogger-preview-video-card';

export const BloggerCardMain = () => {
  return (
    <div className='grid grid-cols-5 gap-2 p-2'>
      <BloggerPreviewVideoCard />
      <BloggerPreviewVideoCard />
      <BloggerPreviewVideoCard />
      <BloggerPreviewVideoCard />
      <BloggerPreviewVideoCard />
    </div>
  );
};
