
import { Separator } from '@/components/ui/separator';

import { BloggerCardHeader } from './blogger-card-header';
import { BloggerCardMain } from './blogger-card-main';

export const BloggerCard = () => {
  return (
    <div className="bg-card rounded-2xl">
      <BloggerCardHeader />
      <Separator />
      <BloggerCardMain />
    </div>
  );
};
