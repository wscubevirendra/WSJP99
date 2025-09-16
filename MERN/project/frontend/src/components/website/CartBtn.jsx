'use client'

import { addtoCart } from '@/redux/features/cartSlice';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';

export default function CartBtn({ originalPrice, finalPrice, productId }) {
    //Payload
    const dispatcher = useDispatch()
    return (
        <button onClick={() => {
            dispatcher(
                addtoCart({
                    productId,
                    originalPrice,
                    finalPrice
                })
            )
        }} className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">
            <FaShoppingCart /> Add to Cart
        </button>
    )
}
