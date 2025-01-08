"use client";
import { motion } from "framer-motion";
// import Link from "next/link";

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            SP
          </motion.div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 