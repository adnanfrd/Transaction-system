"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

const Header = () => {
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
          duration: 1.2,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-6 py-3 border-b"
    >
      <Link href="/">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center cursor-pointer space-x-2"
      >
        <Image src="/logo.png" alt="Logo" width={30} height={30} />
        <span className="font-semibold text-lg">TentLoom</span>
      </motion.div>
      </Link>

      <Link href="/login">
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="border px-4 py-1 rounded-full cursor-pointer text-sm hover:bg-gray-100 transition"
      >
        Log In
      </motion.button>
      </Link>
    </motion.header>
  );
};

export default Header;
