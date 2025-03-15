'use client';

import { FC } from 'react';
import { Settings, Bell } from 'lucide-react';
import Image from 'next/image';

const Navbar: FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold text-gray-800">TentLoom</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-blue-300 hover:bg-blue-400">
          <Bell className="w-5 h-5 " />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
