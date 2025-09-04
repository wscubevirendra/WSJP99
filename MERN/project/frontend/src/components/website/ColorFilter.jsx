'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ColorFilter({ colors }) {
    const router = useRouter()
    const [selcolor, setSelcolor] = useState(null);

    useEffect(
        () => {
            const color = new URLSearchParams({ color: selcolor });
            if (selcolor) {
                router.push(`/store?${color.toString()}`);
            }

        },
        [selcolor]
    )

    return (
        <aside className="w-70 mt-5 bg-gray-50 p-5 rounded-2xl shadow-sm">
            {/* Title */}
            <h2 className="font-bold text-lg mb-4">COLOR FILTER</h2>

            {/* All Categories Button */}
            <button className="w-full bg-white border rounded-md py-2 font-medium text-sm mb-5 hover:bg-green-500 hover:text-white transition">
                All Colors
            </button>

            {/* Section */}
            <h3 className="font-semibold mb-3">Cell Phones & Tablets</h3>
            <ul className="space-y-2 flex gap-2 text-gray-700 text-sm">
                {
                    colors && colors.map(color => (
                        <li onClick={() => setSelcolor(color.slug)} key={color._id} style={{ background: color.hexcode }} className="cursor-pointer rounded-full hover:text-green-600 w-6 h-6"></li>
                    ))
                }
            </ul>
        </aside>
    );
}
