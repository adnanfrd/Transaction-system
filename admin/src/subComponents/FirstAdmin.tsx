import Link from "next/link";

const FirstAdmin = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-6xl mb-6 flex justify-between items-center">
        <Link
          href="/support"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-lg hover:bg-gray-100"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-6">
        1st Admin <span className="text-gray-500 text-xl">— August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            name: "Jelly Apartments LLC",
            owner: "Jim Neal",
            properties: 2,
            subscription: "$100.00",
            link: "/apartments/jelly",
          },
          {
            name: "Lift Apartments LLC",
            owner: "Derrick Meels",
            properties: 1,
            subscription: "$800.00",
            link: "/apartments/lift",
          },
          {
            name: "City Apartments LLC",
            owner: "Jerry Jones",
            properties: 1,
            subscription: "$100.00",
            link: "/apartments/city",
          },
        ].map((apt, index) => (
          <div
            key={index}
            className="bg-[#FCF8E3] p-8 rounded-2xl shadow-lg border border-gray-300 min-h-[220px] flex flex-col justify-between"
          >
            <Link href={apt.link} className="bg-blue-400 text-center rounded-2xl text-white px-4 py-2 text-xl font-bold ">
              {apt.name}
            </Link>

            <p className="text-lg mt-4">
              <strong>Owner:</strong> {apt.owner}
            </p>
            <p className="text-lg">
              <strong>Properties:</strong> {apt.properties}
            </p>
            <p className="text-lg">
              <strong>Contact Info:</strong> (Not provided)
            </p>
            <p className="text-lg">
              <strong>Monthly Subscription:</strong>{" "}
              <span className="text-green-600 font-bold">{apt.subscription}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mt-10">
        <button className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-blue-600 transition">
          Compliance
        </button>
        <Link href="/support/escalated-disputes/permissions">
          <button className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl text-xl shadow-md hover:bg-blue-600 transition">
            System Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FirstAdmin;
