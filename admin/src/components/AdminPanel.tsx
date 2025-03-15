import Link from "next/link";

const getOrdinalSuffix = (n: number) => {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return `${n}th`;
};

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="max-w-4xl mb-4">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>
      </div>

      <h1 className="text-xl font-semibold text-center mb-2">
        Admin Panel <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-cream p-6 rounded-lg shadow-sm border border-gray-200 flex justify-center items-center"
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-blue-600">
              {getOrdinalSuffix(index + 1)} Admin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
