import React, { useContext, useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { context } from './Store';

export default function CartPage() {

    const { cart, qtyHandler, removeHandler } = useContext(context);
  

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Cart Page</h2>
            {cart.length === 0 ? (
                <div className="text-center text-gray-500">Your cart is empty.</div>
            ) : (
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center bg-white shadow p-4 rounded-lg">
                            <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover rounded" />
                            <div className="flex-1 ml-4">
                                <div className="font-semibold">{item.title}</div>
                                <div className="text-gray-500">Price: ${item.price}</div>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => qtyHandler(item.id, 0)} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                        <FaMinus />
                                    </button>
                                    <span className="mx-3">{item.qty || "kuch nhi hai"}</span>
                                    <button onClick={() => qtyHandler(item.id, 1)} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                                        <FaPlus />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end ml-4">
                                <div className="font-bold text-lg"></div>
                                <button onClick={() => removeHandler(item.id)} className="mt-2 p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
