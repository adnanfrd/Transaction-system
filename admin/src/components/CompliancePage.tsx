'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CompliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-start">
        <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
      
      <h1 className="text-xl font-semibold mt-4">Compliance <span className="text-gray-500">— August 21, 2023</span></h1>
      
      <div className="mt-6 bg-cream rounded-lg shadow-md p-6 w-full max-w-lg">
        <div className="flex justify-center">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm">Compliance</span>
        </div>
        <div className="mt-4 text-gray-800">
          <p><strong>Regulation:</strong> Fair Housing Act Compliance</p>
          <p><strong>Details:</strong> Ensure all rental agreements adhere to fair housing laws.</p>
          <p><strong>Status:</strong> <span className="text-green-600">Up to Date</span></p>
          <p><strong>Last Updated:</strong> August 10, 2023</p>
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
