import { LockIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

export const VideoCard = () => {
  return (
    <div className="">
      <div className="relative  group w-full rounded-2xl overflow-hidden">
        <div className='relative'>
          <Image
            src="/mock-thumbnail.png"
            alt="Video name"
            width={600}
            height={200}
            className=""
          />
        </div>
        <div className="absolute w-full h-full bg-black/70 transition opacity-0  group-hover:opacity-100 top-0 left-0 flex items-center justify-center">
          <LockIcon className="text-white" />
        </div>
      </div>
      <Link
        href={`/watch?v=${1}`}
        className="text-sm line-clamp-2 mt-2 leading-4"
      >
        Korish shart bolgan top 5 ta kinolar ingliz tilida
      </Link>
      <div className="flex items-center gap-2 text-xs mt-2 w-full text-gray-400">
        <p>80K views</p>
        <Separator orientation="vertical" className="h-4" />
        <p>3 days ago</p>
      </div>
    </div>
  );
};
