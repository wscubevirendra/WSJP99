'use client'

import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function BrandFilter({ brands }) {
    const router = useRouter()
    const [selbrand, setSelbrand] = useState(null);

    useEffect(
        () => {
            const brand = new URLSearchParams({ brand: selbrand });
            if (selbrand) {
                router.push(`?${brand.toString()}`);
            }

        },
        [selbrand]
    )

    return (
        <aside className="w-70 mt-5 bg-gray-50 p-5 rounded-2xl shadow-sm">
            {/* Title */}
            <h2 className="font-bold text-lg mb-4">BRAND FILTER</h2>

            {/* All Brands Button */}
            <button className="w-full bg-white border rounded-md py-2 font-medium text-sm mb-5 hover:bg-green-500 hover:text-white transition">
                All Brands
            </button>

            {/* Section */}
            <h3 className="font-semibold mb-3">Cell Phones & Tablets</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
                {
                    brands && brands.map(brand => (
                        <li onClick={() => setSelbrand(brand.slug)} key={brand._id} className="cursor-pointer flex justify-between hover:text-green-600">{brand.name} <span>({brand.productCount})</span></li>
                    ))
                }
            </ul>
        </aside>
    );
}
