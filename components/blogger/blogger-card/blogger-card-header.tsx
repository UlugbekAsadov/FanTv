import { VerifiedIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const BloggerCardHeader = () => {
  return (
    <div className="px-3 py-2 flex items-center gap-2">
      <Image
        alt="Avatar"
        className="rounded-full"
        height="42"
        src="/placeholder.svg"
        style={{
          aspectRatio: '42/42',
          objectFit: 'cover',
        }}
        width="42"
      />
      <div className="flex-grow">
        <div className="flex items-center gap-1">
          <Link href={`/channel/ulugbekasdaov`} className="">
            Ulugbek Asadov
          </Link>
          <VerifiedIcon className="text-blue-400" width={18} height={18} />
        </div>
        <p className="">10$</p>
      </div>

      <div>
        <Button className="rounded-full">Subscribe</Button>
        <p className='text-xs text-center'>233 fans</p>
      </div>
    </div>
  );
};
