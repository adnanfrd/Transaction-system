import Link from "next/link";
import { FileText } from "lucide-react";

const payments = [
  {
    property: "City Apartments",
    aptNumber: "225",
    tenant: "Terry Cosie",
    amount: "$1,500.00",
    status: "Payment confirmed",
    date: "09/3/2023",
  },
  {
    property: "Jelly Apartments",
    aptNumber: "225",
    tenant: "Amanda John",
    amount: "$1,400.00",
    status: "Payment confirmed",
    date: "10/2/2023",
  },
  {
    property: "Trent Apartments",
    aptNumber: "225",
    tenant: "Tom Corie",
    amount: "$2,000.00",
    status: "Payment confirmed",
    date: "11/3/2023",
  },
  {
    property: "Lift Apartments",
    aptNumber: "225",
    tenant: "Arie Carol",
    amount: "$1,500.00",
    status: "Payment confirmed",
    date: "12/3/2023",
  },
];

const TenantPayment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-10">
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-8 py-2 text-lg hover:bg-gray-100"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-8">
        Tenant’s Payment <span className="text-gray-500 text-xl">— August 21, 2023</span>
      </h1>

      <div className="w-full max-w-3xl space-y-6">
        {payments.map((payment, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#FCF8E3] p-6 rounded-2xl shadow-md border border-gray-400"
          >
            <div className="flex items-center gap-6">
              <FileText className="w-14 h-14 text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{payment.property}</h2>
                <p className="text-lg text-gray-700">Apt# {payment.aptNumber}</p>
                <p className="text-lg text-gray-700">{payment.tenant}</p>
                <p className="text-blue-600 text-lg font-medium">{payment.status}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{payment.amount}</p>
              <p className="text-lg text-gray-600">{payment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantPayment;
