import Link from "next/link";
import { FileText } from "lucide-react";

const ButterApartments = () => {
  const tenants = [
    { name: "Terry Meez", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "2Yrs", detailsPage: "/tenantdetails" },
    { name: "Drew Casey", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "3Yrs", detailsPage: "/tenantdetails" },
    { name: "Tim Carey", amount: "$900", date: "4/07/24", contract: "#", status: "Inactive", years: "5Yrs", detailsPage: "/tenantdetails" },
    { name: "Jerry Matt", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "2Yrs", detailsPage: "/tenantdetails" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 md:p-10">
      <div className="w-full max-w-7xl mb-4 md:mb-6 flex">
        <Link href="/" className="flex items-center text-gray-600 border rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg hover:bg-gray-100">
          ⬅ Back to home
        </Link>
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-6">
        <span className="font-bold">Butter Apartments</span>
        <span className="text-gray-500"> — August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        <div className="col-span-2 bg-[#FCF8E3] p-6 md:p-10 rounded-2xl shadow-lg border border-gray-300">
          <div className="grid grid-cols-4 gap-4 md:gap-6 text-center font-semibold text-sm md:text-lg">
            <span className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Tenants</span>
            <span className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Amount</span>
            <span className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Date</span>
            <span className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full">Contract</span>
          </div>

          {tenants.map((tenant, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 md:gap-6 text-center py-2 md:py-4 border-b border-gray-300 text-sm md:text-xl">
              <Link href={tenant.detailsPage} className="text-black font-bold cursor-pointer">
                {tenant.name}
              </Link>
              <span className="text-green-600 font-bold">{tenant.amount}</span>
              <span>{tenant.date}</span>
              <span>
                <Link href={tenant.contract}>
                <FileText className="text-gray-600 cursor-pointer hover:text-blue-500 inline-block md:w-8 md:h-8" size={24} />
                </Link>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-[#FCF8E3] p-6 md:p-8 rounded-2xl shadow-lg border border-gray-300">
            <h3 className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-center font-medium text-sm md:text-xl">
              Tenant Contracts
            </h3>
            {tenants.map((tenant, index) => (
              <p key={index} className="text-sm md:text-xl mt-2 md:mt-4 flex justify-between">
                <div>
                <strong>{tenant.name}:</strong>
                    </div> 
                    <div>
                <span className="text-green-600">{tenant.years}</span>
                <Link href={tenant.contract}>
                <FileText className="text-gray-600 cursor-pointer hover:text-blue-500 inline-block md:w-8 md:h-8" size={24} />
                </Link>
                </div>
              </p>
            ))}
          </div>

          <div className="bg-[#FCF8E3] p-6 md:p-8 rounded-2xl shadow-lg border border-gray-300">
            <h3 className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-center font-medium text-sm md:text-xl">Tenants</h3>
            {tenants.map((tenant, index) => (
              <p key={index} className="text-sm md:text-xl mt-2 md:mt-4 flex justify-between">
                <div>
                <strong>{tenant.name}:</strong>
                </div>
                <div>
                <span className={`font-semibold text-sm md:text-xl ${tenant.status === "Active" ? "text-green-600" : "text-red-500"}`}>
                  {tenant.status}
                </span>
                </div>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButterApartments;