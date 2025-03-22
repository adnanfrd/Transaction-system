import { FaArrowLeft, FaEdit } from "react-icons/fa";
import Link from "next/link";

export default function PersonalSettings() {
  return (
    <div className="min-h-screen bg-[#FCFBF7] px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Back Button */}
        <Link href="/settings" className="flex items-center space-x-2 text-gray-600 hover:text-black">
          <FaArrowLeft />
          <span>Back to settings</span>
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-semibold mt-4 text-center">
          Personal <span className="text-gray-500">— August 21, 2023</span>
        </h1>

        {/* Tabs Section */}
        <div className="flex justify-center mt-6 space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md">
            Personal Info
          </button>
          <button className="px-6 py-2 bg-blue-300 text-white font-medium rounded-full shadow-md">
            Contact Info
          </button>
        </div>

        {/* Personal Info & Contact Info Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="font-semibold text-lg text-blue-600">Personal Info</h2>
            <p className="text-gray-600 text-sm mt-1">
              Only you can see these details. We'll use this info to help verify your identity.
            </p>

            {/* Input Fields */}
            <div className="mt-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Legal Name"
                  className="w-full p-3 border rounded-lg text-gray-700"
                />
                <FaEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border rounded-lg text-gray-700"
                />
                <FaEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="font-semibold text-lg text-blue-600">Contact Info</h2>
            <p className="text-gray-600 text-sm mt-1">
              This is the info used to sign in and notify you about important account activity.
            </p>

            {/* Input Fields */}
            <div className="mt-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 border rounded-lg text-gray-700"
                />
                <FaEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg text-gray-700"
                />
                <FaEdit className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
