import Link from "next/link";

const Apartments = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-5 py-3 text-base hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-6">
        <span className="font-bold">Jelly Apartments LLC</span>{" "}
        <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl mt-6">
        <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[250px] flex flex-col">
          <Link
            href="/apartments/subapartments"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium self-start hover:bg-blue-600 transition"
          >
            Butter Apartments
          </Link>
          <p className="text-xl mt-5">
            <strong>Tenants:</strong> 10
          </p>
          <p className="text-xl">
            <strong>Tenants Paid:</strong> 7
          </p>
          <p className="text-xl">
            <strong>Tenants Unpaid:</strong> 3
          </p>
          <p className="text-xl">
            <strong>Monthly Amount:</strong>{" "}
            <span className="text-green-600 font-bold">$800.00</span>
          </p>
        </div>

        <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[250px] flex flex-col">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium self-start hover:bg-blue-600 transition"
          >
            Cheese Apartments
          </Link>
          <p className="text-xl mt-5">
            <strong>Tenants:</strong> 14
          </p>
          <p className="text-xl">
            <strong>Tenants Paid:</strong> 7
          </p>
          <p className="text-xl">
            <strong>Tenants Unpaid:</strong> 0
          </p>
          <p className="text-xl">
            <strong>Monthly Amount:</strong>{" "}
            <span className="text-green-600 font-bold">$500.00</span>
          </p>
        </div>

        <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[150px] flex items-center justify-center">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-blue-600 transition"
          >
            Disputes
          </Link>
        </div>

        <div className="bg-[#FCF8E3] p-10 rounded-2xl shadow-lg border border-gray-300 min-h-[150px] flex items-center justify-center">
          <Link
            href="#"
            className="bg-blue-500 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-blue-600 transition"
          >
            Platform Analytics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
