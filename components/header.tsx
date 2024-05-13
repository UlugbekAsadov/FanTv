import { Avatar } from './ui/avatar';

export const Header = () => {
  return (
    <header className="w-full flex justify-between px-4 py-2 border-b bg-gray-50">
      <Avatar />
      <p>Logo</p>
    </header>
  );
};
