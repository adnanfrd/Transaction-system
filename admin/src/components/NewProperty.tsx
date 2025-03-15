'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const NewProperty: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#FAFAFA] p-6">
      <div className="w-full max-w-4xl flex items-center justify-between mb-8">
        <Link href="/" className="flex items-center space-x-2 border px-3 py-1.5 rounded-full text-gray-700 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">
          <span className="font-bold">New Property</span> — August 21, 2023
        </h1>
      </div>
      
      <div className="bg-[#FEFEFC] border border-gray-200 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <span className="bg-[#709BFF] text-white px-4 py-1 rounded-full text-sm font-medium">New Property</span>
        </div>
        
        <div className="space-y-3 text-gray-700">
          <p className="flex justify-between">
            <span className="font-medium">Owner:</span>
            <span className="text-green-600">John Neal</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Apt:</span>
            <span className="text-green-600">Jelly Apartment LLC</span>
          </p>
          <p className="flex flex-col">
            <span className="font-medium">Address:</span>
            <span className="text-green-600 text-right">
              508 Queens Way Arkam <br /> City, NY 90456
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProperty;
