"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiShoppingCart, FiBell, FiMenu, FiX, FiUser, FiHeart, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "#", hasDropdown: true },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Offers", href: "/offers", isHighlighted: true },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-green-400">📞</span>
            <span>24/7 Support: </span>
            <span className="text-green-400 font-semibold">+099949343</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="hover:text-green-400 transition-colors duration-200">
                My Account
              </a>
            </div>
            <div className="h-4 w-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <span>🌐 English</span>
              <FiChevronDown className="text-xs" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => router.push("/")}
              className="cursor-pointer flex-shrink-0"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-600 p-2 rounded-full">
                  <FaLeaf className="text-white text-2xl" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">Gramer Hat</h1>
                  <p className="text-xs text-gray-500">The Organic Food</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products (e.g. iPhone, MacBook, Headphones)"
                  className="w-full px-6 py-3 rounded-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-200">
                  <FiSearch className="text-lg" />
                </button>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <button className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200 p-2">
                <FiHeart className="text-xl" />
                <span className="text-sm hidden lg:inline">Wishlist</span>
              </button>

              {/* Cart */}
              <button className="relative flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200 p-2">
                <FiShoppingCart className="text-xl" />
                <span className="text-sm hidden lg:inline">Cart</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* Notification */}
              <button className="relative hidden sm:flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors duration-200 p-2">
                <FiBell className="text-xl" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-2 h-2"></span>
              </button>

              {/* Profile */}
              <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200 p-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FiUser className="text-white text-sm" />
                </div>
                <span className="text-sm hidden lg:inline">Account</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 bg-gray-50"
              />
              <FiSearch className="absolute right-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between py-3">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`relative group py-2 text-sm font-medium transition-colors duration-200 ${link.isHighlighted
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 hover:text-green-600"
                    }`}
                >
                  {link.name}
                  {link.hasDropdown && <FiChevronDown className="inline ml-1 text-xs" />}

                  {/* Hover underline effect */}
                  {!link.isHighlighted && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                Terms & Conditions
              </a>
              <div className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full">
                <span className="text-green-500">●</span>
                <span>Live Support</span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-t border-gray-200"
              >
                <div className="py-4 space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${link.isHighlighted
                          ? "bg-red-50 text-red-600 font-semibold"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      {link.hasDropdown && <FiChevronDown className="inline ml-2 text-xs" />}
                    </a>
                  ))}

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      Privacy Policy
                    </a>
                    <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      Terms & Conditions
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

    </header>
  );
}