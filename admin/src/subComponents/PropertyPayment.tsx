import Link from "next/link";
import { FileText } from "lucide-react";

const payments = [
  {
    name: "Terry Neal",
    property: "Jelly Apartments",
    amount: "$2,000.00",
    status: "Payment confirmed",
    date: "1/3/2023",
  },
  {
    name: "Tom Corie",
    property: "Lift Apartments",
    amount: "$2,000.00",
    status: "Payment confirmed",
    date: "1/3/2023",
  },
  {
    name: "Tom Corie",
    property: "Lift Apartments",
    amount: "$2,000.00",
    status: "Payment confirmed",
    date: "1/3/2023",
  },
  {
    name: "Arie Carol",
    property: "Trent Apartments",
    amount: "$1,500.00",
    status: "Payment confirmed",
    date: "1/3/2023",
  },
];

const PropertyPayment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-10">
      <div className="w-full max-w-5xl flex justify-between items-center mb-8">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-6 py-2 text-lg hover:bg-gray-100"
        > 
          ⬅ Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-8">
        Property’s Payment <span className="text-gray-500 text-xl">— August 21, 2023</span>
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
                <h2 className="text-2xl font-semibold text-gray-900">{payment.name}</h2>
                <p className="text-lg text-gray-700">{payment.property}</p>
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

export default PropertyPayment;
