'use client';

import { VideoCardGroup } from '../videos/video-card-group';
import { UserChannelProfile } from './user-channel-profile';

export const UserChannel = () => {
  return (
    <div>
      <UserChannelProfile />
      <div className="bg-background rounded-xl p-6 mt-3">
        <h2 className='text-3xl'>Videos</h2>
        <div className='mt-4'>
          <VideoCardGroup className='grid-cols-4'/>
        </div>
      </div>
    </div>
  );
};
