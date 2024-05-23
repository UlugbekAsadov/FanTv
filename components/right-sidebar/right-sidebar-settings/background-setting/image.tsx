import { MediaUploader } from '@/components/tools/media-uploader';

export const BackgroundImage = () => {
  const value = '';
  const onChange = () => {
    return null;
  };

  return <MediaUploader value={value} onChange={onChange} />;
};
