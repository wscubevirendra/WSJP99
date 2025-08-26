

export default function DashboardPage() {
    return (

        <main className="flex-1 p-6 overflow-y-auto">
            {/* Top Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Total Sales</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">₹1,25,000</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Orders</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">856</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Customers</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">432</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-sm text-gray-500">Pending</h3>
                    <p className="text-2xl font-bold text-gray-800 mt-2">27</p>
                </div>
            </div>

            {/* Charts / Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Chart */}
                <div className="bg-white shadow-md rounded-lg p-6 h-72 flex items-center justify-center text-gray-500">
                    📊 Sales Chart Placeholder
                </div>

                {/* Orders Table */}
                <div className="bg-white shadow-md rounded-lg p-6 h-72 overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="border-b text-gray-600">
                                <th className="py-2">Order ID</th>
                                <th className="py-2">Customer</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2">#1001</td>
                                <td className="py-2">Virendra</td>
                                <td className="py-2">₹2,499</td>
                                <td className="py-2 text-green-600">Completed</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">#1002</td>
                                <td className="py-2">Rahul</td>
                                <td className="py-2">₹1,999</td>
                                <td className="py-2 text-yellow-600">Pending</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2">#1003</td>
                                <td className="py-2">Aditi</td>
                                <td className="py-2">₹3,299</td>
                                <td className="py-2 text-red-600">Cancelled</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
