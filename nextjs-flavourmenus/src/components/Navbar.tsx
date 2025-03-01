'use client'

import { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cartItems} = useCart()
  return (
    <nav className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href={"/"}
              className="text-2xl font-bold text-orange-500"
            >
              FlavourfulMenu
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-gray-700 hover:text-orange-500"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-500"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-500"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="relative text-gray-600 hover:text-orange-500"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500  z-10 relative"
              aria-label="Toggle menu"
            >
              {isOpen ?
                <X className="h-6 w-6 text-gray-700" />
              : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`
          fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden overflow-hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`
          absolute top-0 right-0 w-[80%] max-w-sm h-screen bg-white shadow-lg md:hidden
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-black/30">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
          </div>
          <div className="py-4 flex-1 overflow-y-auto">
            <div className="px-4 space-y-1">
              {["home", "menu", "about", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item === "home" ? "" : item}`}
                  className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors duration-200 capitalize"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-8 px-8 space-y-4 border-t border-b border-black/30 py-4 bg-gray-50">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>123 Restaurant St</span>
              </div>
            </div>
            <div className="px-8 py-4">
              <Link
                href={"/cart"}
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>View Cart</span>
              </Link>
            </div>
          </div>
          <div className="border-t border-black/30 p-4">
            <div className="flex justify-center space-x-6">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
