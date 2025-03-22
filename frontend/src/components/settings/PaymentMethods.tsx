import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const paymentMethods = [
  { title: "Banking Method", imgSrc: "/bank-transfer.png" },
  { title: "CashApp", imgSrc: "/cashapp.png" },
  { title: "PayPal", imgSrc: "/paypal.png" },
  { title: "Venmo", imgSrc: "/venmo.png" },
  { title: "Zelle", imgSrc: "/zelle.png" },
  { title: "ApplePay", imgSrc: "/applepay.png" },
];

export default function PaymentMethod() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        {/* Back Button */}
        <Link href="/settings" className="flex items-center space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back to settings</span>
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-semibold mt-4 text-center">
          Payment Method <span className="text-gray-500">— August 21, 2023</span>
        </h1>

        {/* Payment Methods Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition cursor-pointer"
            >
              <div className="w-12 h-12 relative">
                <Image src={method.imgSrc} alt={method.title} layout="fill" objectFit="contain" />
              </div>
              <span className="ml-4 text-lg font-medium text-gray-800">{method.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
