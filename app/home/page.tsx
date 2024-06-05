import { BloggerCard } from '@/components/blogger/blogger-card/blogger-card';

export const HomePage = () => {
  return (
    <div className='grid grid-cols-1 gap-2'>
      <BloggerCard />
      <BloggerCard />
      <BloggerCard />
      <BloggerCard />
      <BloggerCard />
    </div>
  );
};

export default HomePage;
