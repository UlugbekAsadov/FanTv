'use client';

import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';

import { usePhoneContext } from '@/context/phone.context';
import { cn } from '@/lib/utils';

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
        className={cn(`[&>*]:cursor-pointer h-full scrollbar scrollbar-hide rounded-5xl  border-[15px] border-gray-900 p-3 flex flex-col relative after:content-['']  after:absolute after:w-[100px] after:bg-black after:left-[35%] after:h-7 after:rounded-full  before:content-[''] before:absolute before:w-[140px] before:bg-white before:left-[28%] before:bottom-2 before:h-1 before:rounded-full`)}
      >
        <Droppable droppableId="s">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className="mt-10"
              {...provided.droppableProps}
            >
              <Template isPreview={false} />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};
