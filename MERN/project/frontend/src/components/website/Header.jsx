import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Shop<span className="text-blue-600">Ease</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Navigation + Icons */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Shop</a>
            <a href="#" className="hover:text-blue-600">Deals</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>

          <div className="flex items-center space-x-4 text-gray-700 text-xl">
            <FaUser className="cursor-pointer hover:text-blue-600" />
            <div className="relative cursor-pointer">
              <FaShoppingCart className="hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="px-6 py-2 md:hidden">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
    </header>
  );
}
