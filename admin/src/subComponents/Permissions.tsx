"use client";
import Link from "next/link";
import { useState } from "react";

const permissionsList = [
  "Give Permission To See Chats",
  "Give Permission To See New Registrations",
  "Give Permission To See Removed Registrations",
  "Give Permission To See Property Payment History",
  "Give Permission To See Tenant’s Payment History",
  "Give Permission To Manage Payment Methods",
  "Create Or Remove Properties",
];

const Permissions = () => {
  const [permissions, setPermissions] = useState<boolean[]>(
    Array(permissionsList.length).fill(false)
  );

  const togglePermission = (index: number) => {
    setPermissions((prev) =>
      prev.map((perm, i) => (i === index ? !perm : perm))
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
        <Link
          href="/support/escalated-disputes"
          className="flex items-center text-gray-600 border rounded-full px-4 py-2 text-sm hover:bg-gray-100"
        >
          ⬅ Back to home
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-6">
        Permissions <span className="text-gray-500">— August 21, 2023</span>
      </h1>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {permissionsList.map((permission, index) => (
          <div
            key={index}
            className="bg-blue-400 p-4 rounded-xl shadow-md flex items-center justify-between"
          >
            <span className="text-center text-lg text-white w-full">
              {permission}
            </span>
            <label className="relative inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={permissions[index]}
                onChange={() => togglePermission(index)}
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:left-1 after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Permissions;
