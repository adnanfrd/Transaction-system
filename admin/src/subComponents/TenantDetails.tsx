import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const TenantDetails = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-6 py-10">
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-6 py-2 text-lg hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to home
        </Link>
        <span className="text-xl text-gray-500">August 21, 2023</span>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-6">
        Butter Apartments
      </h1>

      <div className="bg-[#FCF8E3] p-12 rounded-2xl shadow-lg border border-gray-300 w-full max-w-2xl">
        <div className="flex justify-center mb-4">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow">
            Contact Details
          </span>
        </div>

        <div className="space-y-4 text-lg">
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Name:</span>
            <span className="text-green-700">Drew Casey</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Account Number:</span>
            <span className="text-green-700">fvb5214</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Apt #:</span>
            <span className="text-green-700">20</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Status:</span>
            <span className="text-green-700 font-semibold">Active Tenant</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600 font-medium">Contact:</span>
            <span className="text-green-700 underline">323-705-6551</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TenantDetails;
