import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import { getCategories, getColors } from "@/library/api-call";
import DeleteBtn from "@/components/website/DeleteBtn";
import StatusBtn from "@/components/website/StatusBtn";

export default async function ColorView() {
    const colorJSON = await getColors();
    const colors = colorJSON.data
    return (
        <div className="space-y-6">
            {/* top bar */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Colors</h3>
                <Link href="/admin/color/add">
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        + Add Color
                    </button>
                </Link>

            </div>

            {/* table */}
            <div className="overflow-x-auto rounded-lg  bg-white shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    {/* head */}
                    <thead className="bg-gray-50">
                        <tr className="text-left">
                            <th className="px-6 py-3 font-medium text-gray-500">Image</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Slug</th>
                            <th className="px-20 py-3 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody className="divide-y divide-gray-200">
                        {
                            colors &&
                            colors.map((cat) => (
                                <tr key={cat._id} className="odd:bg-white even:bg-gray-50">
                                    <td style={{ background: cat.hexcode }} className="whitespace-nowrap px-6 py-3">

                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                                        {cat.name}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3 text-gray-600">
                                        {cat.slug}
                                    </td>

                                    <td className="whitespace-nowrap pl-10 py-3 space-x-2">

                                        <StatusBtn url="color"  status={cat.status} id={cat._id} />
                                        <DeleteBtn url="color"  id={cat._id} />
                                        <Link href={`/admin/color/edit/${cat._id}`}>
                                            <button className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                                                Edit
                                            </button>
                                        </Link>


                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
