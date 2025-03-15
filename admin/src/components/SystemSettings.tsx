'use client';

import Link from 'next/link';

const SystemSettings = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
      <Link href="/" className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">⬅ Back to home</Link>

      </div>

      <h1 className="text-xl font-semibold mt-4">
        <span className="font-bold">System Settings</span> — August 21, 2023
      </h1>

      <div className="bg-cream rounded-xl shadow-md p-6 mt-6 w-full max-w-4xl">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
          System Settings
        </button>
        <div className="mt-4">
          <p className="text-gray-700">Update system settings and preferences here.</p>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
