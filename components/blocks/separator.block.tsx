import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

import { BlockActions } from './block.actions';

interface IProps {
  addedBlock: IAddedBlock;
}

export const SeparatorBlock = ({ addedBlock }: IProps) => {
  const {
    id,
    width,
    backgroundColor,
    blockPosition,
    type,
    marginBottom,
    marginTop,
  } = addedBlock;
  const { editingBlockId, handleClickBlockOnScreen } = usePhoneContext();

  return (
    <div className="relative ">
      <div
        onClick={handleClickBlockOnScreen.bind(null, type, id)}
        style={{
          paddingBottom: `${marginBottom}px`,
          alignItems: blockPosition,
          paddingTop: `${marginTop}px`,
        }}
        className="w-full flex flex-col"
      >
        <div
          style={{ width: `${width}%`, backgroundColor }}
          className="h-[1px] rounded-full"
        ></div>
      </div>
      {editingBlockId === id ? <BlockActions blockId={editingBlockId} /> : null}
    </div>
  );
};
