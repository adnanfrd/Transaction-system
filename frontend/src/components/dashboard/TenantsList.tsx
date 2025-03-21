"use client";

import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";

const tenants = [
  { name: "Terry Meez", status: "Active" },
  { name: "Dreu Casey", status: "Active" },
  { name: "Tim Carey", status: "Inactive" },
  { name: "Tom Cass", status: "Inactive" },
  { name: "Larry Tale", status: "Inactive" },
  { name: "Rob Milt", status: "Active" },
  { name: "Cam Ward", status: "Active" },
  { name: "Trent Jilt", status: "Active" },
  { name: "Ron Gad", status: "Active" },
  { name: "Jerry Matt", status: "Active" },
];

const TenantsList = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/">
          <button className="flex items-center cursor-pointer text-gray-600 border py-1 px-4 rounded-2xl mb-4">
            <IoMdArrowBack className="mr-2" /> Back
          </button>
        </Link>

        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Lift Apartments <span className="text-gray-500">— August 21, 2023</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden bg-white">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="py-2 px-4">Tenants</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant, index) => (
                <tr key={index} className="border-t border-gray-200 text-gray-700">
                  <td className="py-2 px-4">{tenant.name}</td>
                  <td className={`py-2 px-4 ${tenant.status === "Inactive" ? "text-red-500" : "text-green-600"}`}>
                    {tenant.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TenantsList;
