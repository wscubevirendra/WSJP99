import Link from "next/link"

export default function Category({ categories }) {
    return (
        <aside className="w-70 bg-gray-50 mb-5 p-5 rounded-2xl shadow-sm">
            {/* Title */}
            <h2 className="font-bold text-lg mb-4">CATEGORIES</h2>

            {/* All Categories Button */}
            <Link href="/store">
                <button className="w-full bg-white border rounded-md py-2 font-medium text-sm mb-5 hover:bg-green-500 hover:text-white transition">
                    All Categories
                </button>
            </Link>

            {/* Section */}
            <h3 className="font-semibold mb-3">Cell Phones & Tablets</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
                {
                    categories && categories.map(category => (
                        <Link href={`/store/${category.slug}`} key={category._id}> <li className="cursor-pointer flex justify-between hover:text-green-600">{category.name} <span>({category.productCount})</span></li></Link>
                    ))
                }

            </ul>
        </aside>
    );
}
