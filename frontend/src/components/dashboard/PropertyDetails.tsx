"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MdOutlinePayment } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const tenants = [
  { name: "Terry Meez", status: "Active", color: "text-green-600" },
  { name: "Drew Casey", status: "Active", color: "text-green-600" },
  { name: "Tim Carey", status: "Inactive", color: "text-red-500" },
  { name: "Jerry Matt", status: "Active", color: "text-green-600" },
];

const contracts = [
  { name: "Terry Meez", years: "2yrs" },
  { name: "Drew Casey", years: "34yrs" },
  { name: "Tim Carey", years: "5yrs" },
  { name: "Jerry Matt", years: "2yrs" },
];

const PropertyDetails = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.05,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <Link href="/">
          <button className="flex items-center cursor-pointer px-5 py-3 border rounded-full hover:bg-gray-200 transition">
            <IoMdArrowBack className="mr-2" /> Back to home
          </button>
        </Link>
        <h2 className="text-2xl font-bold">
          City Apartments{" "}
          <span className="text-gray-600">— August 21, 2023</span>
        </h2>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-xl shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-semibold bg-blue-500 text-white rounded-full px-5 py-2 w-fit">
            City Apartments
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-lg">
              <span>Tenants:</span> <span className="font-semibold">10</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Tenants Paid:</span>{" "}
              <span className="font-semibold text-green-600">6</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Tenants Unpaid:</span>{" "}
              <span className="font-semibold text-red-600">4</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-green-600">
              <span>Monthly Amount:</span> <span>$900.00</span>
            </div>
          </div>
          <button
            ref={buttonRef}
            className="mt-5 bg-blue-500 text-white px-5 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition w-full"
          >
            + Add new tenant
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-xl shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-semibold bg-blue-500 text-white rounded-full px-5 py-2 w-fit">
            Tenants
          </h3>
          <div className="mt-4 space-y-2">
            {tenants.map((tenant, index) => (
              <div key={index} className="flex justify-between text-lg">
                <span>{tenant.name}</span>
                <span className={`font-semibold ${tenant.color}`}>
                  {tenant.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl bg-white p-10 rounded-xl shadow-lg border border-gray-200 mt-8"
      >
        <h3 className="text-lg font-semibold bg-blue-500 text-white rounded-full px-5 py-2 w-fit">
          Tenant Contracts
        </h3>
        <div className="mt-4 space-y-4">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="flex justify-between text-lg items-center"
            >
              <div className="flex items-center space-x-4">
                <span>{contract.name}</span>
                <MdOutlinePayment className="text-gray-600" />
              </div>
              <span className="flex items-center space-x-4 ">
                {contract.years} <FaFileAlt className="text-gray-600" />
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyDetails;
