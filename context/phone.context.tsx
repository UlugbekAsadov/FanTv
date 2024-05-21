'use client';

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

import { IAddedBlog, IBlog } from '@/utils/interfaces/blog.interface';
import { IPhoneSize } from '@/utils/interfaces/phone-size.interface';
import { ITemplate } from '@/utils/interfaces/template.interface';
import { availableBlogs, defaultSettings } from '@/utils/mocks/blogs.mock';
import { phoneSizes } from '@/utils/mocks/phone-sizes.mock';
import { templateMock } from '@/utils/mocks/template.mock';
import { Blog, EditableBlog } from '@/utils/types/blog.type';

interface IPhoneContext {
  currentScreenSize: IPhoneSize;
  selectedBlog: IBlog;
  handleAddBlog: (blog: IBlog) => void;
  setCurrentScreenSize: Dispatch<SetStateAction<IPhoneSize>>;
  template: ITemplate;
  handleChangeBackgroundColor: (color: string) => void;
  handleClickBlogOnScreen: (blogType: Blog, blogId: string) => void;
  handleRemoveBlog: (blogId: string) => void;
  editingId: string | null;
  setTemplate: Dispatch<SetStateAction<ITemplate>>;
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
  const [selectedBlog, setSelectedBlog] = useState<IBlog>(availableBlogs[0]);
  const [template, setTemplate] = useState<ITemplate>(templateMock);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAddBlog = (blog: IBlog) => {
    const blogId = v4();
    setSelectedBlog(blog);

    if (blog.type === 'Background') return;
    const newBlog: IAddedBlog = defaultSettings[blog.type as EditableBlog];

    setTemplate((prevState) => ({
      ...prevState,
      blogs: [...prevState.blogs, { ...newBlog, id: blogId }],
    }));
    setEditingId(blogId);
  };

  const handleChangeBackgroundColor = (color: string) => {
    setTemplate((prevState) => ({ ...prevState, background: color }));
  };

  const handleClickBlogOnScreen = (blogType: Blog, blogId: string) => {
    const clickedBlog = availableBlogs.find((blog) => blog.type === blogType);
    setEditingId(blogId);
    if (!clickedBlog) {
      throw Error('Clicked blog is not found on available blogs list');
    }

    setSelectedBlog(clickedBlog);
  };

  const handleRemoveBlog = (id: string) => {
    const filteredBlog = template.blogs.filter((blog) => blog.id !== id);
    setEditingId(null);
    setSelectedBlog(availableBlogs[0]);
    setTemplate((prevState) => ({ ...prevState, blogs: filteredBlog }));
  };

  console.log({ template });

  const value: IPhoneContext = useMemo(
    () => ({
      currentScreenSize,
      selectedBlog,
      handleAddBlog,
      setCurrentScreenSize,
      template,
      handleChangeBackgroundColor,
      handleClickBlogOnScreen,
      handleRemoveBlog,
      editingId,
      setTemplate,
    }),
    [currentScreenSize, selectedBlog, template, editingId]
  );

  return (
    <PhoneContext.Provider value={value}>{children}</PhoneContext.Provider>
  );
};
