'use client';

import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';

import { usePhoneContext } from '@/context/phone.context';

import { Template } from './template';

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
        <Droppable droppableId="s">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Template isPreview={false} />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
