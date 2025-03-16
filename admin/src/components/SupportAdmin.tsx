'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

const SupportAdmin: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  const supportItems = [
    { name: '1st Resolve Escalated Disputes', link: '/support/escalated-disputes' },
    { name: 'View Flagged Communications System-Wide', link: '/support/flagged-communications' },
    { name: '3rd Manage System-Wide Announcements', link: '/support/system-announcements' },
  ];

  return (
    <div className="p-6 min-h-screen bg-white flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
          ← Back to home
        </Link>
        <h1 className="text-lg font-semibold text-gray-800">Support</h1>
        <span className="text-gray-500">— {currentDate}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {supportItems.map((item, index) => (
          <div key={index} className="bg-cream border rounded-lg shadow-sm p-6 flex justify-center  items-center">
            <Link href={item.link}>
              <button className="bg-blue-500 cursor-pointer text-white hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                {item.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportAdmin;
