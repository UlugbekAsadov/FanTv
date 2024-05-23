import { CircleUserIcon } from 'lucide-react';
import Image from 'next/image';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

import { BlockActions } from './block.actions';

interface IProps {
  addedBlock: IAddedBlock;
}

export const ProfileBlock = ({ addedBlock }: IProps) => {
  const { id, src, text, color, fontSize, type, marginBottom, marginTop } =
    addedBlock;
  const { editingBlockId, handleClickBlockOnScreen } = usePhoneContext();

  return (
    <div className="relative">
      <div
        onClick={handleClickBlockOnScreen.bind(null, type, id)}
        className="flex flex-col items-center "
        style={{
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
        }}
      >
        <div className="rounded-full border">
          {src ? (
            <Image
              src={src}
              alt={text as string}
              width={64}
              height={64}
              className="rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <CircleUserIcon className='text-white' />
            </div>
          )}
        </div>
        <p style={{ color, fontSize: `${fontSize}px` }} className="mt-2">
          {text}
        </p>
      </div>
      {editingBlockId === id ? <BlockActions blockId={editingBlockId} /> : null}
    </div>
  );
};
