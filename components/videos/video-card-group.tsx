import { cn } from '@/lib/utils';

import { VideoCard } from './video-card';

interface IProps {
  className: string;
}

export const VideoCardGroup = ({ className }: IProps) => {
  return (
    <div className={cn(`grid grid-cols-1 gap-2 p-2`, className)}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};
