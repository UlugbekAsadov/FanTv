'use client';

import Image from 'next/image';

import { Button } from '../ui/button';

export const UserChannelProfile = () => {
  return (
    <div>
      <Image
        src="/mock-banner.png"
        alt="banner"
        className="rounded-t-xl"
        width={1300}
        height={38}
      />
      <div className="bg-background rounded-b-xl p-6">
        <div className='flex items-center justify-between'>
          <div className="flex items-center  gap-3">
            <div className="  flex items-center justify-center">
              <Image
                src="/mock-blogger.png"
                alt="mock-user"
                className="rounded-full"
                width={128}
                height={128}
              />
            </div>
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
                Shokir Shokirov
              </h2>
              <h2 className="text-base ">@shokir</h2>
              <p className="">122 videos</p>
              <p className="">10 subscribers</p>
            </div>
          </div>
          <Button className='rounded-full' size="lg">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};
