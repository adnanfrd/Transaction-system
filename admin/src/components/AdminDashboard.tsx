'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';

const AdminDashboard: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  const items = [
    { name: 'Support', link: '/support' },
    { name: 'Membership Subscription', link: '/membership-subscription' },
    { name: 'New Registrations', link: '/new-registrations' },
    { name: 'Removed Tenants', link: '/removed-tenants' },
    { name: 'New Properties', link: '/new-properties' },
    { name: 'Create Or Remove Properties', link: '/create-remove-properties' },
    { name: 'Compliance', link: '/compliance' },
    { name: 'System Settings', link: '/system-settings' },
    { name: 'View/Add/Remove Admin', link: '/view-add-remove-admin' },
  ];

  return (
    <div className="p-6 min-h-screen bg-white flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-800">Super Admin</h1>
        <span className="text-gray-500">— {currentDate}</span>
        <div className="flex gap-2">
          <Link href="/payment-overview">
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
              Payment overview
            </button>
          </Link>
          <Link href="/chat">
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100">
              Chats
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-cream border border-gray-300 rounded-xl shadow-lg p-8 flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <Link href={item.link}>
              <button className="bg-blue-400 text-white px-5 py-3 rounded-full cursor-pointer text-base font-medium shadow-md hover:bg-blue-500 transition">
                {item.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
