import React, { useContext } from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { context } from "../pages/Store";

export default function Header() {
  const { cart } = useContext(context)
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">EcoShop</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <a href="/products" className="hover:text-indigo-600 transition">Products</a>
          <a href="/about" className="hover:text-indigo-600 transition">About</a>
          <a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FiShoppingCart className="w-5 h-5 text-gray-700 hover:text-indigo-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>
          </Link>
          <a href="/account">
            <FiUser className="w-5 h-5 text-gray-700 hover:text-indigo-600" />
          </a>
          <button className="md:hidden">
            <FiMenu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
