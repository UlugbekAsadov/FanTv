'use client';

import { useParams } from 'next/navigation';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { v4 } from 'uuid';

import { useToast } from '@/components/ui/use-toast';
import { isValidURL } from '@/utils/funcs/is-valid-url';
import { IAddedBlock, IBlock } from '@/utils/interfaces/block.interface';
import { IPhoneSize } from '@/utils/interfaces/phone-size.interface';
import { ITemplate } from '@/utils/interfaces/template.interface';
import {
  availableBlocks,
  defaultSettings,
  unEditableBlocks,
} from '@/utils/mocks/blocks.mock';
import { phoneSizes } from '@/utils/mocks/phone-sizes.mock';
import { templateMock } from '@/utils/mocks/template.mock';
import { toastConfig } from '@/utils/mocks/toast.mock';
import { Block, EditableBlock } from '@/utils/types/block.type';

import { useLocaleContext } from './locale.context';

interface IPhoneContext {
  currentScreenSize: IPhoneSize;
  selectedBlock: IBlock;
  handleAddBlock: (block: IBlock) => void;
  setCurrentScreenSize: Dispatch<SetStateAction<IPhoneSize>>;
  template: ITemplate;
  handleChangeBackgroundColor: (color: string) => void;
  handleClickBlockOnScreen: (blockType: Block, blockId: string) => void;
  handleRemoveBlock: (blockId: string) => void;
  editingBlockId: string | null;
  setTemplate: Dispatch<SetStateAction<ITemplate>>;
  isPreview: boolean;
}

const PhoneContext = createContext<IPhoneContext | null>(null);

export const usePhoneContext = () => {
  const context = useContext(PhoneContext);

  if (!context) throw Error('PhoneContext must be used within a Provider');

  return context;
};

interface IProps {
  children: ReactNode;
}

export const PhoneContextProvider = ({ children }: IProps) => {
  const [currentScreenSize, setCurrentScreenSize] = useState<IPhoneSize>(
    phoneSizes[0]
  );
  const [selectedBlock, setSelectedBlock] = useState<IBlock>(
    availableBlocks[0]
  );
  const [template, setTemplate] = useState<ITemplate>(templateMock);
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);
  const { username } = useParams();
  const { toast } = useToast();
  const { t } = useLocaleContext();

  const validatePreviousBlock = () => {
    if (!editingBlockId) {
      return null;
    }

    const previousBlock = template.blocks.find(
      (block) => block.id === editingBlockId
    );

    if (!previousBlock) {
      throw Error('Previous block was not found');
    }

    for (const key in previousBlock) {
      const value = previousBlock[key as keyof IAddedBlock];

      if (key === 'link' && !isValidURL(value as string)) {
        toast({
          ...toastConfig,
          description: t('link_not_valid'),
          variant: 'destructive',
        });
        return true;
      }

      if (!value) {
        toast({
          ...toastConfig,
          description: t('error_field'),
          variant: 'destructive',
        });
        return true;
      }
    }

    return false;
  };

  const handleAddBlock = (block: IBlock) => {
    const isDirty = validatePreviousBlock();

    if (isDirty) return false;

    setSelectedBlock(block);
    const isUnEditableBlock = unEditableBlocks.some(
      (unEditableBlock) => unEditableBlock === block.type
    );

    if (isUnEditableBlock) return;

    const blockId = v4();
    const newBlock: IAddedBlock = defaultSettings[block.type as EditableBlock];

    setTemplate((prevState) => ({
      ...prevState,
      blocks: [...prevState.blocks, { ...newBlock, id: blockId }],
    }));
    setEditingBlockId(blockId);
  };

  const handleChangeBackgroundColor = (color: string) => {
    setTemplate((prevState) => ({ ...prevState, background: color }));
  };

  const handleClickBlockOnScreen = (blockType: Block, blockId: string) => {
    const isDirty = validatePreviousBlock();

    if (isDirty) return false;

    const clickedBlock = availableBlocks.find(
      (block) => block.type === blockType
    );

    setEditingBlockId(blockId);
    if (!clickedBlock) {
      throw Error(
        'Clicked block is not found on available left-sidebar-blocks list'
      );
    }

    setSelectedBlock(clickedBlock);
  };

  const handleRemoveBlock = (id: string) => {
    const filteredBlock = template.blocks.filter((block) => block.id !== id);
    setEditingBlockId(null);
    setSelectedBlock(availableBlocks[0]);
    setTemplate((prevState) => ({ ...prevState, blocks: filteredBlock }));
  };

  const value: IPhoneContext = useMemo(
    () => ({
      currentScreenSize,
      selectedBlock,
      handleAddBlock,
      setCurrentScreenSize,
      template,
      handleChangeBackgroundColor,
      handleClickBlockOnScreen,
      handleRemoveBlock,
      editingBlockId,
      setTemplate,
      isPreview: !!username,
    }),
    [currentScreenSize, selectedBlock, template, editingBlockId]
  );

  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
};
