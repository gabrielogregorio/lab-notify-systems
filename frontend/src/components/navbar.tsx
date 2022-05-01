import Link from 'next/link';
import { MdOutlineNotifications } from 'react-icons/md';

export const Navbar = () => (
  <nav className="w-full flex items-center justify-between border-b-2 px-2 border-gray-200">
    <div>
      <Link href="/">Novo usuário</Link>
    </div>
    <div className="relative mx-2 my-2 bg-gray-100 rounded-full p-1 hover:bg-gray-300 hover:scale-105 cursor-pointer group transition duration-200">
      <div className="w-2 aspect-square bg-red-500 rounded-full absolute right-1 top-0" />
      <MdOutlineNotifications className="text-3xl text-gray-400" />
    </div>
  </nav>
);
