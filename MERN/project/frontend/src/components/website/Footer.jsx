import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left section */}
        <div className="col-span-1">
          <h2 className="font-bold text-lg">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="mt-2 text-sm text-gray-500">HOTLINE 24/7</p>
          <p className="text-green-600 font-bold text-xl">(025) 3686 25 16</p>
          <p className="mt-2 text-sm text-gray-500">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </p>
          <p className="text-sm text-gray-500">contact@swootechmart.com</p>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-4">
            <FaTwitter className="w-8 h-8 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-green-600" />
            <FaFacebookF className="w-8 h-8 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-green-600" />
            <FaInstagram className="w-8 h-8 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-green-600" />
            <FaYoutube className="w-8 h-8 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-green-600" />
            <FaPinterestP className="w-8 h-8 p-2 bg-gray-100 rounded-full cursor-pointer hover:text-green-600" />
          </div>

          {/* Currency + Language */}
          <div className="flex items-center gap-4 mt-6">
            <button className="border px-4 py-2 rounded-md flex items-center gap-1 text-sm">
              USD <MdKeyboardArrowDown />
            </button>
            <button className="border px-4 py-2 rounded-md flex items-center gap-1 text-sm">
              <img src="https://flagcdn.com/us.svg" alt="us-flag" className="w-5 h-5 rounded-full" />
              Eng <MdKeyboardArrowDown />
            </button>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-3">TOP CATEGORIES</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networks</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>About Swoo</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Store Locations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">HELP CENTER</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Terms & Conditions</li>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">PARTNER</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
          </ul>
        </div>
      </div>

      {/* Subscribe */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <h3 className="font-bold">
          SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
        </h3>
        <div className="flex mt-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 border border-gray-300 px-4 py-2 rounded-l-md text-sm outline-none"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-r-md text-sm">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          By subscribing, you’re accepting the our <span className="underline">Policy</span>
        </p>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center border-t mt-10 text-sm text-gray-500">
        <p>© 2024 <span className="font-bold">Shawonetc3</span>. All Rights Reserved</p>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="paypal" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Stripe_Logo%2C_revised_2016.svg" alt="stripe" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Klarna_Logo_black.svg" alt="klarna" className="h-6" />
        </div>
        <a href="#" className="text-blue-500 mt-3 md:mt-0">
          Mobile Site
        </a>
      </div>
    </footer>
  );
}
