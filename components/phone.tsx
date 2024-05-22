'use client';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { DonationBlock } from '@/components/blocks/donation.block';
import { LinkBlock } from '@/components/blocks/link.block';
import { ProfileBlock } from '@/components/blocks/profile.block';
import { SeparatorBlock } from '@/components/blocks/separator.block';
import { TextBlock } from '@/components/blocks/text.block';
import { usePhoneContext } from '@/context/phone.context';
import { defaultOption } from '@/lib/utils';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

export const Phone = () => {
  const { currentScreenSize, template, setTemplate } = usePhoneContext();

  const onDragEnd = (result: DropResult) => {
    const destinationIndex = result.destination?.index || 0;
    const sourceIndex = result.source.index;
    const newItems = [...template.blocks];

    const [removed] = newItems.splice(sourceIndex, 1);
    newItems.splice(destinationIndex, 0, removed);
    setTemplate((prevState) => ({ ...prevState, blocks: newItems }));
  };

  const getBlock = (addedBlock: IAddedBlock) => {
    switch (addedBlock.type) {
      case 'Button':
        return <LinkBlock key={addedBlock.id} addedBlock={addedBlock} />;

      case 'Text':
        return <TextBlock key={addedBlock.id} addedBlock={addedBlock} />;

      case 'Separator':
        return <SeparatorBlock key={addedBlock.id} addedBlock={addedBlock} />;

      case 'Profile':
        return <ProfileBlock key={addedBlock.id} addedBlock={addedBlock} />;

      case 'Donate':
        return <DonationBlock key={addedBlock.id} addedBlock={addedBlock} />;

      default:
        return defaultOption(addedBlock.type);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          width: `${currentScreenSize.width}px`,
          minHeight: `${currentScreenSize.height}px`,
          background: template.background,
        }}
        className="[&>*]:cursor-pointer h-full scrollbar scrollbar-hide  rounded-5xl border-[15px] border-gray-900 p-3 flex flex-col "
      >
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {template.blocks.map((addedBlock, index) => (
                <Draggable
                  draggableId={index.toString()}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {getBlock(addedBlock)}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
