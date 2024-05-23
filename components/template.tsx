'use client';

import { Draggable } from '@hello-pangea/dnd';

import { DonationBlock } from '@/components/left-sidebar/left-sidebar-blocks/donation.block';
import { LinkBlock } from '@/components/left-sidebar/left-sidebar-blocks/link.block';
import { ProfileBlock } from '@/components/left-sidebar/left-sidebar-blocks/profile.block';
import { SeparatorBlock } from '@/components/left-sidebar/left-sidebar-blocks/separator.block';
import { TextBlock } from '@/components/left-sidebar/left-sidebar-blocks/text.block';
import { usePhoneContext } from '@/context/phone.context';
import { useUserContext } from '@/context/user.context';
import { defaultOption } from '@/lib/utils';
import { IAddedBlock } from '@/utils/interfaces/block.interface';

interface IProps {
  isPreview: boolean;
}

export const Template = ({ isPreview }: IProps) => {
  const { template } = usePhoneContext();
  const { userTemplate } = useUserContext();

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

  if (isPreview) {
    return (
      <div
        style={{
          background: template.background,
        }}
        className="w-screen h-screen py-1"
      >
        <div className="max-w-2xl w-full mx-auto px-2">
          {userTemplate?.blocks.map((addedBlock) => getBlock(addedBlock))}
        </div>
      </div>
    );
  }

  return template.blocks.map((addedBlock, index) => (
    <Draggable draggableId={index.toString()} key={index} index={index}>
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
  ));
};
