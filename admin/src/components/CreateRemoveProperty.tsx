'use client';

import Link from 'next/link';

const CreateRemoveProperty = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-4 flex flex-col items-center">
      <div className="w-full flex justify-between items-center max-w-4xl">
        <Link
          href="/"
          className="flex items-center space-x-2 text-gray-600 hover:text-black border border-gray-300 px-4 py-2 rounded-full"
        >
          ⬅ Back to home
        </Link>
        <h1 className="text-xl font-semibold text-center">
          Create Or Remove Properties <span className="text-gray-500">— August 21, 2023</span>
        </h1>
      </div>

      <div className="mt-8 w-full max-w-4xl bg-cream p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow">
            Create Or Remove Properties
          </button>
        </div>
        <div className="mt-6 text-gray-700">
          <p><strong>Owner:</strong> John Neal</p>
          <p><strong>Property Name:</strong> Jelly Apartment LLC</p>
          <p><strong>Address:</strong> 508 Queens Way Arkam City, NY 90456</p>
        </div>
      </div>
    </div>
  );
};

export default CreateRemoveProperty;
