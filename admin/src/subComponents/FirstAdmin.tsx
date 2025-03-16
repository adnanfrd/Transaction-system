import Link from "next/link";

const FirstAdmin = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <Link
          href="/support"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-4">
        1st Admin <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-6">
        {[
          {
            name: "Jelly Apartments LLC",
            owner: "Jim Neal",
            properties: 2,
            subscription: "$100.00",
          },
          {
            name: "Lift Apartments LLC",
            owner: "Derrick Meels",
            properties: 1,
            subscription: "$800.00",
          },
          {
            name: "City Apartments LLC",
            owner: "Jerry Jones",
            properties: 1,
            subscription: "$100.00",
          },
        ].map((apt, index) => (
          <div
            key={index}
            className="bg-cream p-8 rounded-xl shadow-lg border border-gray-300 min-h-[200px] flex flex-col justify-between"
          >
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {apt.name}
            </span>
            <p className="text-lg mt-4">
              <strong>Owner:</strong> {apt.owner}
            </p>
            <p className="text-lg">
              <strong>Properties:</strong> {apt.properties}
            </p>
            <p className="text-lg">
              <strong>Contact Info:</strong> 
            </p>
            <p className="text-lg">
              <strong>Monthly Subscription:</strong>{" "}
              <span className="text-green-600 font-bold">{apt.subscription}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mt-8">
        <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-600">
          Compliance
        </button>
        <button className="w-full bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-600">
          <Link href='/support/escalated-disputes/permissions'>System Settings</Link>
        </button>
      </div>
    </div>
  );
};

export default FirstAdmin;
