import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const settingsOptions = [
  { title: "Personal Settings", imgSrc: "/personel.jpeg", link: "/personelsettings" },
  { title: "Payment Methods", imgSrc: "/payment.png", link: "/paymentmethod" },
  { title: "Security & Privacy", imgSrc: "/security.png", link: "/securityprivacy" },
  { title: "Payment History", imgSrc: "/historyp.jpeg", link: "/paymenthistory" },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back to home</span>
        </Link>
        <h1 className="text-2xl font-semibold mt-4 text-center">
          Settings <span className="text-gray-500">— August 21, 2023</span>
        </h1>
        <div className="mt-6 space-y-4">
          {settingsOptions.map((option, index) => (
            <Link key={index} href={option.link} className="block">
              <div className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition cursor-pointer">
                <div className="w-16 h-16 relative">
                  <Image src={option.imgSrc} alt={option.title} layout="fill" objectFit="contain" />
                </div>
                <span className="ml-4 text-lg font-medium text-gray-800">{option.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
