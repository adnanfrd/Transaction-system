'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const RemovedTenants = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-3xl flex justify-between items-center mb-6">
      <Link href="/" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
          ← Back to home
        </Link>
        <h1 className="text-xl font-semibold text-center flex-1">
          Removed <span className="font-bold">Tenants</span> <span className="text-gray-500">— August 21, 2023</span>
        </h1>
      </div>

      <div className="bg-cream w-full max-w-lg rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-center">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Removed Tenants</span>
        </div>
        <div className="mt-4 text-gray-800 text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">Owner:</span>
            <span className="text-green-600">Derrie Meez</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Tenant:</span>
            <span className="text-green-600">David Jackson</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Apt:</span>
            <span className="text-green-600">Lift Apartment LLC</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Apt #:</span>
            <span className="text-green-600">125</span>
          </div>
          <div className="flex justify-between ">
            <span className="font-semibold">Address:</span>
            <span className="text-green-600">508 Queens Way Arkam City, NY 90456</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemovedTenants;
