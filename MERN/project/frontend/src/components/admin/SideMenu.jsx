import {
    FaHome, FaShoppingCart, FaPhoneAlt, FaClipboardList, FaPlane, FaDollarSign,
    FaComments, FaEnvelope, FaBookmark, FaTasks, FaProjectDiagram, FaShareAlt
} from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";



import Link from "next/link";

export default function SideMenu() {
    return (
        <div className="w-64 h-screen bg-white  shadow-md flex flex-col">
            <div className="p-4 text-lg font-bold">Admin Dashboard</div>

            <nav className="flex-1 px-4 space-y-2 text-gray-700 text-sm">
                {/* Home */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <FaHome size={16} />
                    <span>Home</span>
                </div>

                <p className="text-xs font-semibold text-gray-400 uppercase mt-4 mb-2">Apps</p>

                {/* E-commerce */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer text-blue-600 font-medium">
                    <FaShoppingCart size={16} />
                    <span>E commerce</span>
                </div>

                {/* CRM */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <BiCategoryAlt size={16} />
                    <Link href="/admin/category">
                        <span>Categories</span>
                    </Link>

                </div>

                {/* Project Management */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <Link href="/admin/color">
                        <IoIosColorPalette size={16} />
                    </Link>

                    <span>Colors</span>
                </div>

                {/* Travel Agency */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <TbBrandBooking size={16} />
                    <span>Brands</span>
                </div>

                {/* Stock */}
                <div className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <FaDollarSign size={16} />
                        <span>Stock</span>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">NEW</span>
                </div>

                {/* Chat */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <FaComments size={16} />
                    <span>Chat</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <FaEnvelope size={16} />
                    <span>Email</span>
                </div>

                {/* Events */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <FaBookmark size={16} />
                    <span>Events</span>
                </div>

                {/* Kanban */}
                <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <FaTasks size={16} />
                    <span>Kanban</span>
                </div>

                {/* Gantt Chart */}
                <div className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center gap-3">
                        <FaProjectDiagram size={16} />
                        <span>Gantt chart</span>
                    </div>
                    <span className="bg-yellow-100 text-yellow-700 text-[10px] font-semibold px-2 py-0.5 rounded">NEW</span>
                </div>


            </nav>



        </div>
    );
}
