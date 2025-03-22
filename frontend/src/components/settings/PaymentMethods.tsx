"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const paymentMethods = [
  { title: "Banking Method", imgSrc: "/bankingmethod.png", link: "/addpaymentbank" },
  { title: "CashApp", imgSrc: "/cashapp.png" },
  { title: "PayPal", imgSrc: "/paypal.png" },
  { title: "Venmo", imgSrc: "/venmo.png" },
  { title: "Zelle", imgSrc: "/zelle.jpeg" },
  { title: "ApplePay", imgSrc: "/applepay.png" },
];

export default function PaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FCFBF7] px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/settings" className="flex items-center space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back to settings</span>
        </Link>

        <h1 className="text-2xl font-semibold mt-4 text-center">
          Payment Method <span className="text-gray-500">— August 21, 2023</span>
        </h1>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              onClick={() => setSelectedMethod(method.title)}
              className={`flex items-center p-5 bg-white shadow-md rounded-xl cursor-pointer transition-all ${
                selectedMethod === method.title ? "ring-2 ring-blue-500" : "hover:shadow-lg"
              }`}
            >
              <div className="w-16 h-16 relative">
                <Image src={method.imgSrc} alt={method.title} layout="fill"  />
              </div>
              <span className="ml-6 text-lg font-medium text-gray-800">{method.title}</span>

              {method.link && (
                <Link href={method.link} className="ml-auto text-blue-600 hover:underline">
                  Proceed
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
