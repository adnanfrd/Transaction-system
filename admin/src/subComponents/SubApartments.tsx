import Link from "next/link";
import { FileText } from "lucide-react"; // Importing Lucide React icons

const ButterApartments = () => {
  const tenants = [
    { name: "Terry Meez", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "2Yrs" },
    { name: "Drew Casey", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "3Yrs" },
    { name: "Tim Carey", amount: "$900", date: "4/07/24", contract: "#", status: "Inactive", years: "5Yrs" },
    { name: "Jerry Matt", amount: "$900", date: "4/07/24", contract: "#", status: "Active", years: "2Yrs" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-10">
      {/* Back Button */}
      <div className="w-full max-w-7xl mb-6 flex">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-6 py-3 text-lg hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-center mb-8">
        <span className="font-bold">Butter Apartments</span>{" "}
        <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl">
        {/* Tenants Table */}
        <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-lg border border-gray-300">
          <div className="grid grid-cols-4 gap-6 text-center font-semibold text-lg">
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full">Tenants</span>
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full">Amount</span>
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full">Date</span>
            <span className="bg-blue-500 text-white px-6 py-3 rounded-full">Contract</span>
          </div>
          {tenants.map((tenant, index) => (
            <div key={index} className="grid grid-cols-4 gap-6 text-center py-4 border-b border-gray-300 text-xl">
              <span>{tenant.name}</span>
              <span className="text-green-600 font-bold">{tenant.amount}</span>
              <span>{tenant.date}</span>
              <span>
                <Link href={tenant.contract}>
                  <FileText className="text-gray-600 cursor-pointer hover:text-blue-500 inline-block" size={24} />
                </Link>
              </span>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tenant Contracts */}
          <div className="bg-[#FCF8E3] p-8 rounded-2xl shadow-lg border border-gray-300">
            <h3 className="bg-blue-500 text-white px-6 py-3 rounded-full text-center font-medium text-xl">
              Tenant Contracts
            </h3>
            {tenants.map((tenant, index) => (
              <p key={index} className="text-xl mt-4">
                <strong>{tenant.name}:</strong> <span className="text-green-600">{tenant.years}</span>
                <Link href={tenant.contract}>
                  <FileText className="text-gray-600 ml-2 cursor-pointer hover:text-blue-500 inline-block" size={24} />
                </Link>
              </p>
            ))}
          </div>

          {/* Tenant Status */}
          <div className="bg-[#FCF8E3] p-8 rounded-2xl shadow-lg border border-gray-300">
            <h3 className="bg-blue-500 text-white px-6 py-3 rounded-full text-center font-medium text-xl">Tenants</h3>
            {tenants.map((tenant, index) => (
              <p key={index} className="text-xl mt-4">
                <strong>{tenant.name}:</strong>{" "}
                <span
                  className={`font-semibold text-xl ${
                    tenant.status === "Active" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {tenant.status}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButterApartments;
