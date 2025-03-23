"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";

const properties = [
  { name: "Jelly Apartments", tenants: 30, paid: 17, unpaid: 13, amount: 2000, link: "/propertydetails" },
  { name: "Lift Apartments", tenants: 10, paid: 7, unpaid: 3, amount: 800, link: "/propertydetails" },
  { name: "City Apartments", tenants: 5, paid: 2, unpaid: 3, amount: 1000, link: "/propertydetails" },
  { name: "Trent Apartments", tenants: 50, paid: 25, unpaid: 25, amount: 2000, link: "/propertydetails" },
];

const Dashboard = () => {
  const buttonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        { scale: 1.05, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          Properties — <span className="text-gray-600">August 21, 2023</span>
        </h2>
        <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-0">
          <Link href="/paymentoverview"><button className="cursor-pointer px-4 sm:px-5 py-2 sm:py-3 border rounded-full hover:bg-gray-200 transition">Payment Overview</button></Link>
          <Link href="/chat"><button className="cursor-pointer px-4 sm:px-5 py-2 sm:py-3 border rounded-full hover:bg-gray-200 transition">Chats</button></Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {properties.map((property, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
            onClick={() => router.push(property.link)}
          >
            <h3 className="text-lg sm:text-xl font-semibold bg-blue-500 text-white rounded-full px-4 sm:px-6 py-1 sm:py-2 w-fit">
              {property.name}
            </h3>
            
            <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
              <div className="flex justify-between text-sm sm:text-lg">
                <span>Tenants:</span>
                <span className="font-semibold">{property.tenants}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-lg">
                <span>Tenants Paid:</span>
                <span className="font-semibold text-green-600">{property.paid}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-lg">
                <span>Tenants Unpaid:</span>
                <span className="font-semibold text-red-600">{property.unpaid}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-lg font-semibold text-green-600">
                <span>Monthly Amount:</span>
                <span>${property.amount.toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link href="/addapartment">
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 sm:mt-8 cursor-pointer bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl shadow-md hover:bg-blue-600 transition w-full sm:w-auto block mx-auto"
      >
        + Add New Apartment
      </motion.button>
      </Link>
    </div>
  );
};

export default Dashboard;