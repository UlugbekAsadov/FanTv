import Link from 'next/link';

import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

import { BlockActions } from './block.actions';

interface IProps {
  addedBlock: IAddedBlock;
}

export const LinkBlock = ({ addedBlock }: IProps) => {
  const {
    color,
    text,
    backgroundColor,
    type,
    id,
    link = '#',
    borderRadius,
    fontSize,
    width,
    position,
    blockPosition,
    marginBottom,
    marginTop,
    backgroundImage,
  } = addedBlock;
  const { handleClickBlockOnScreen, editingBlockId, isPreview } =
    usePhoneContext();

  return (
    <div className="relative">
      <Link
        className="  min-h-[56px] h-full overflow-hidden w-full flex flex-col"
        href={isPreview ? link : '#'}
        style={{
          alignItems: blockPosition,
        }}
      >
        <div
          onClick={handleClickBlockOnScreen.bind(null, type, id)}
          style={{
            backgroundColor: backgroundColor,
            backgroundImage: `url("${backgroundImage}")`,
            backgroundPosition: 'center center',
            color,
            width: `${width}%`,
            textAlign: position,
            fontSize: `${fontSize}px`,
            borderRadius: `${borderRadius}px`,
            marginBottom: `${marginBottom}px`,
            marginTop: `${marginTop}px`,
          }}
          className="w-full px-4 py-4 break-before-all h-full"
        >
          {text}
        </div>
      </Link>
      {editingBlockId === id ? <BlockActions blockId={editingBlockId} /> : null}
    </div>
  );
};
