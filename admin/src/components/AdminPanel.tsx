import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 
const admins = [
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" },
  { link: "/support/escalated-disputes" }, 
  { link: "/support/escalated-disputes" },
];

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-10">
      <div className="w-full max-w-4xl mb-6">
        <Link
          href="/"
          className="flex items-center text-gray-600 border rounded-full px-6 py-3 text-lg hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to home
        </Link>
      </div>

      <h1 className="text-3xl font-semibold text-center mb-6">
        Admin Panel <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {admins.map((admin, index) => (
          <Link href={admin.link} key={index}>
            <div className="bg-[#FCF8E3] p-8 rounded-xl shadow-md border border-gray-300 flex justify-center items-center cursor-pointer hover:shadow-lg transition">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-600">
                Admin {index + 1}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
