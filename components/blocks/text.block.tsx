import { usePhoneContext } from '@/context/phone.context';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

import { BlockActions } from './block.actions';

interface IProps {
  addedBlock: IAddedBlock;
}
export const TextBlock = ({ addedBlock }: IProps) => {
  const { color, text, type, id, fontSize, position, marginBottom, marginTop } =
    addedBlock;
  const { handleClickBlockOnScreen, editingBlockId } = usePhoneContext();
  return (
    <div className="relative">
      <p
        onClick={handleClickBlockOnScreen.bind(null, type, id)}
        style={{
          color: color,
          fontSize: `${fontSize}px`,
          textAlign: position,
          marginBottom: `${marginBottom}px`,
          marginTop: `${marginTop}px`,
        }}
        className="text-center break-before-all break-words min-h-[24px] h-full"
      >
        {text}
      </p>
      {editingBlockId === id ? <BlockActions blockId={editingBlockId} /> : null}
    </div>
  );
};
