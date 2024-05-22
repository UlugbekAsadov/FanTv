'use client';

import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

import { DonationBlock } from '@/components/blogs/donation.blog';
import { LinkBlog } from '@/components/blogs/link.blog';
import { ProfileBlog } from '@/components/blogs/profile.blog';
import { SeparatorBlog } from '@/components/blogs/seperator.blog';
import { TextBlog } from '@/components/blogs/text.blog';
import { usePhoneContext } from '@/context/phone.context';
import { defaultOption } from '@/lib/utils';
import { IAddedBlog } from '@/utils/interfaces/blog.interface';

export const Phone = () => {
  const { currentScreenSize, template, setTemplate } =
    usePhoneContext();

  const onDragEnd = (result: DropResult) => {
    const destinationIndex = result.destination?.index || 0;
    const sourceIndex = result.source.index;
    const newItems = [...template.blogs];

    const [removed] = newItems.splice(sourceIndex, 1);
    newItems.splice(destinationIndex, 0, removed);
    setTemplate((prevState) => ({ ...prevState, blogs: newItems }));
  };

  const getBlog = (addedBlog: IAddedBlog) => {
    switch (addedBlog.type) {
      case 'Button':
        return <LinkBlog key={addedBlog.id} addedBlog={addedBlog} />;

      case 'Text':
        return <TextBlog key={addedBlog.id} addedBlog={addedBlog} />;

      case 'Separator':
        return <SeparatorBlog key={addedBlog.id} addedBlog={addedBlog} />;

      case 'Profile':
        return <ProfileBlog key={addedBlog.id} addedBlog={addedBlog} />;

      case 'Donate':
        return <DonationBlock key={addedBlog.id} addedBlog={addedBlog} />;

      default:
        return defaultOption(addedBlog.type);
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
              {template.blogs.map((addedBlog, index) => (
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
                      {getBlog(addedBlog)}
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
