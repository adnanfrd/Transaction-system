'use client';

import Link from 'next/link';

const NewRegistrations = () => {
  const registrations = [
    {
      owner: 'Jim Neal',
      tenant: 'Terry Casie',
      apt: 'Jelly Apartment LLC',
      aptNumber: '225',
      address: '508 Queens Way Akran City, NY 90456',
    },
    {
      owner: 'Jim Neal',
      tenant: 'Terry Casie',
      apt: 'Jelly Apartment LLC',
      aptNumber: '225',
      address: '508 Queens Way Akran City, NY 90456',
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-6 px-4 md:px-12">
        <Link href="/" className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">⬅ Back to home</Link>
        <h2 className="text-lg md:text-xl font-semibold text-center">New Registrations <span className="text-gray-500">— August 21, 2023</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {registrations.map((item, index) => (
          <div key={index} className="bg-[#fdfcf8] shadow-md p-6 rounded-xl border w-full">
            <button className="px-4 py-2 bg-[#6c92f4] text-white rounded-lg mb-4 w-full text-sm">New Registration</button>
            <div className="text-sm space-y-2">
              <p><strong>Owner:</strong> <span className="text-[#6c9254]">{item.owner}</span></p>
              <p><strong>Tenant:</strong> <span className="text-[#6c9254]">{item.tenant}</span></p>
              <p><strong>Apt:</strong> <span className="text-[#6c9254]">{item.apt}</span></p>
              <p><strong>Apt #:</strong> <span className="text-[#6c9254]">{item.aptNumber}</span></p>
              <p><strong>Address:</strong> <span className="text-[#6c9254]">{item.address}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRegistrations;
