import Link from "next/link";

const PaymentOverview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-10">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-6 py-3 text-lg hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>

        <div className="flex gap-4">
          <button className="border border-gray-400 rounded-full px-6 py-3 text-lg hover:bg-gray-100">
            Payment overview
          </button>
          <button className="border border-gray-400 rounded-full px-6 py-3 text-lg hover:bg-gray-100">
            Chats
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-8">
        Super Admin <span className="text-gray-500 text-lg">— August 21, 2023</span>
      </h1>

      <div className="flex gap-8">
      <Link href="/payment-overview/property-payments"> 
        <button className="bg-blue-500 text-white cursor-pointer px-10 py-6 rounded-lg text-lg shadow-md hover:bg-blue-600">
         Property's Payments
        </button>
        </Link>
       <Link href="/payment-overview/tenants-payments">
       <button className="bg-blue-500 cursor-pointer text-white px-10 py-6 rounded-lg text-lg shadow-md hover:bg-blue-600">
          Tenant's Payments
        </button>
       </Link>
      </div>
    </div>
  );
};

export default PaymentOverview;
