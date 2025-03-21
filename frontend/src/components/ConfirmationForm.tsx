"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ConfirmationForm = () => {
  const [formData, setFormData] = useState({ fullName: "", activation: "" });

  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-lg font-semibold text-gray-900 text-center">
          Please enter the confirmation details the owner provided you
        </h2>

        <form className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Activation Number</label>
            <input
              type="text"
              placeholder="Activation Number"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.activation}
              onChange={(e) => setFormData({ ...formData, activation: e.target.value })}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center space-x-2"
          >
            <span>Validate</span>
            <span>→</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ConfirmationForm;
