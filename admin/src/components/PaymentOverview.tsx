import Link from "next/link";

const PaymentOverview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-6">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>

        <div className="flex gap-3">
          <button className="border border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
            Payment overview
          </button>
          <button className="border border-gray-400 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
            Chats
          </button>
        </div>
      </div>

      <h1 className="text-xl font-semibold text-center mb-6">
        Super Admin <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="flex gap-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm shadow-md hover:bg-blue-600">
          Property's Payments
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm shadow-md hover:bg-blue-600">
          Tenant's Payments
        </button>
      </div>
    </div>
  );
};

export default PaymentOverview;
