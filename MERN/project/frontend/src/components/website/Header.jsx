import { FaPhoneAlt, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="flex justify-between items-center text-sm px-6 py-2 border-b">
        <div className="flex items-center gap-4">
          <span className="bg-gray-100 px-2 py-1 rounded-md">Hotline 24/7</span>
          <span className="flex items-center gap-2 font-semibold">
            <FaPhoneAlt className="text-green-500" /> (025) 3886 25 16
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-green-600">Sell on Swoo</button>
          <button className="hover:text-green-600">Order Tracki</button>
          <div className="flex items-center gap-1 cursor-pointer">
            USD <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src="https://flagcdn.com/us.svg"
              alt="us-flag"
              className="w-5 h-5 rounded-full"
            />
            Eng <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="Swoo Logo" className="w-30 h-10" />
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-8 font-semibold">
          <div className="flex items-center gap-1 cursor-pointer">
            HOMES 
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            PAGES 
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/store">STORE </Link>
          </div>
          <button>CONTACT</button>
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <FaRegHeart className="text-gray-500 text-xl cursor-pointer" />
          <div>
            <p className="text-xs text-gray-400">WELCOME</p>
            <button className="font-semibold">LOG IN / REGISTER</button>
          </div>
          <div className="relative flex items-center gap-2">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <span className="absolute -top-2 left-3 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
              5
            </span>
            <span className="font-semibold">$1,689.00</span>
          </div>
        </div>
      </div>
    </header>
  );
}
