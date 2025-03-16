'use client';

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { Printer, Upload, FileText } from 'lucide-react';

const MembershipForm: FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-white flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-8">
        <Link
          href="/"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          ← Back to home
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Super Admin</h1>
        <span className="text-gray-500">— {currentDate}</span>
        <Link
          href="/payment-overview"
          className="border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition"
        >
          Payment overview
        </Link>
      </div>

      <div className="w-full max-w-lg bg-cream border border-gray-300 rounded-xl shadow-lg p-8">
        {['Owner name', 'Property name', 'Tenants amount', 'Transaction fee', 'Total amount'].map((label, index) => (
          <div key={index} className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
              type="text"
              placeholder={label}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        ))}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Their payment method</label>
          <select
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Choose payment method</option>
            <option value="banking">💰 Banking Method</option>
            <option value="cashapp">💵 Cashapp</option>
            <option value="paypal">💳 Paypal</option>
            <option value="zelle">📩 Zelle</option>
            <option value="applepay">🍏 Apple Pay</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Signature</label>
          <input
            type="text"
            placeholder="Signature"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>

      <div className="mt-8 w-full max-w-lg space-y-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-500 hover:shadow-md transition">
          <Printer className="w-5 h-5" /> Print
        </button>

        <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-500 hover:shadow-md transition">
          <Upload className="w-5 h-5" /> Upload documents
        </button>

        <Link href="/membership-subscription/generate-lease" className="w-full">
          <button className=" mb-4 w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-500 hover:shadow-md transition">
            <FileText className="w-5 h-5" /> Generate lease
          </button>
        </Link>

        <button className="w-full flex items-center justify-center gap-2 bg-blue-400 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-500 hover:shadow-md transition">
          <FileText className="w-5 h-5" /> Generate activation number
        </button>
      </div>
    </div>
  );
};

export default MembershipForm;
