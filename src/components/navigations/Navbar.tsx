"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiShoppingCart, FiBell, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
        {/* Topbar */}
        <div className="bg-gray-100 text-sm text-gray-700 py-1 flex justify-between items-center container mx-auto">
          <span>
            📞 We are available 24/7, Need help?{" "}
            <span className="text-green-600 font-medium">+099949343</span>
          </span>
          <nav className="space-x-4 hidden sm:flex">
            <a href="#" className="hover:text-green-600">
              About Us
            </a>
            <a href="#" className="hover:text-green-600">
              Contact Us
            </a>
            <a href="#" className="hover:text-green-600">
              My Account
            </a>
            <a href="#" className="hover:text-green-600">
              Logout
            </a>
          </nav>
        </div>

        {/* Main navbar */}
        <div className="bg-neutral-500 text-white py-2 ">
          <div className="container mx-auto  ">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-bold text-lg leading-tight">
                KACHA <br /> BAZAR
              </span>
            </div>

            {/* Searchbar */}
            <div className="hidden md:flex flex-1 mx-6">
              <div className="relative w-full border border-orange-500 bg-orange-200 rounded-md ">
                <input
                  type="text"
                  placeholder="Search for products (e.g. shirt, pant)"
                  className="w-full px-4 py-2 rounded-lg text-black outline-none"
                />
                <FiSearch className="absolute right-3 top-2.5 text-black" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <div className="relative">
                <FiShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>

              {/* Notification */}
              <FiBell className="text-xl" />

              {/* Profile */}
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-9 h-9 rounded-full border border-white"
              />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden focus:outline-none"
              >
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-3">
            <div className="relative border border-orange-500 bg-orange-200 rounded-md mx-2 ">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg text-gray-800 outline-none"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>
          </div>
        </div>
        </div>

        {/* Bottom nav links */}
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-white border-t border-gray-200 md:border-none container mx-auto"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-6 py-3 text-sm">
            <li className="cursor-pointer hover:text-green-600">Categories ▾</li>
            <li className="cursor-pointer hover:text-green-600">About Us</li>
            <li className="cursor-pointer hover:text-green-600">Contact Us</li>
            <li className="cursor-pointer hover:text-green-600">Pages ▾</li>
            <li>
              <span className="bg-red-100 text-red-500 px-2 py-1 rounded text-xs">
                Offers ●
              </span>
            </li>
            <li className="ml-auto text-gray-600 flex gap-4 text-xs md:text-sm">
              <a href="#">🌐 English</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </motion.nav>
      </header>
  );
}
