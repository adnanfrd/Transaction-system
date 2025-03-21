"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IoMdArrowBack } from "react-icons/io";
import { FaPrint, FaUpload } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbSignature } from "react-icons/tb";
import { RiKey2Fill } from "react-icons/ri";
import Link from "next/link";

const TenantForm = () => {
  const buttonRef = useRef(null);
  const [signature, setSignature] = useState("");
  const [rentAmount, setRentAmount] = useState("1500");

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      
      <button className="flex items-center px-5 py-2 cursor-pointer border rounded-full hover:bg-gray-200 text-gray-600 mb-4 self-start">
      <Link href="/" className="flex items-center"><IoMdArrowBack className="mr-2" /> Back </Link>
      </button>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-200"
      >
        {/* Form Fields */}
        <div className="space-y-4">
          {["Enter full name", "Driver license", "Apt #", "Employment Info"].map((label, index) => (
            <div key={index} className="relative">
              <label className="block text-sm text-gray-700 mb-1">{label}</label>
              <input 
                type="text" 
                placeholder={label} 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <MdOutlineDriveFileRenameOutline className="absolute right-3 top-9 text-gray-500" />
            </div>
          ))}

          {/* Signature Input */}
          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Signature</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <TbSignature className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Sign here..."
                value={signature}
                onChange={(e) => setSignature(e.target.value)}
                className="flex-1 outline-none"
              />
              <button onClick={() => setSignature("")} className="text-blue-500 px-3 py-1 border rounded-md text-sm">
                Reset
              </button>
            </div>
          </div>

          {/* Rent Amount */}
          <div className="relative">
            <label className="block text-sm text-gray-700 mb-1">Rent Amount</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2">
              <span className="text-gray-500 pr-2">$</span>
              <input
                type="number"
                value={rentAmount}
                onChange={(e) => setRentAmount(e.target.value)}
                className="flex-1 outline-none text-right"
              />
            </div>
          </div>

          {/* Buttons */}
          <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-3">
            <FaPrint className="mr-2" /> Print
          </button>
          <button className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-3">
            <FaUpload className="mr-2" /> Upload documents
          </button>
          <button 
            ref={buttonRef}
            className="w-full flex items-center justify-center border border-blue-500 text-blue-500 rounded-lg py-3"
          >
            <RiKey2Fill className="mr-2" /> Generate activation number
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TenantForm;
