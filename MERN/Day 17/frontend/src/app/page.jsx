import { getUsers } from "@/library/api-call";
import React from "react";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import StatusButton from "@/components/StatusButton";

export default async function UserTable() {
  const userData = await getUsers();
  const data = userData.users
  console.log(data)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6">

        {/* Header + Create Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">User List</h2>
          <Link href="/add">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              + Create
            </button>
          </Link>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-50 text-left text-gray-600">
                <th className="p-4">S No</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Delete</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((user, index) => {
                  return <tr key={user._id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 text-sm text-gray-700">{index + 1}</td>
                    <td className="p-4 font-medium">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.contact}</td>
                    <td className="p-4">
                      <DeleteButton id={user._id} />
                    </td>
                    <td className="p-4">
                      <StatusButton id={user._id} status={user.status} />
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}
