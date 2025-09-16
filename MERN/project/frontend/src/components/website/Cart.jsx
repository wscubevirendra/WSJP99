'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = ({ products }) => {
    const router = useRouter()
    const cart = useSelector((state) => state.cart)
    const user = useSelector((state) => state.user.data)

    function checkoutHandler() {
        if (user) {
            router.push('checkout')
        } else {
            router.push('user-login')
        }


    }

    // useEffect(
    //     () => {
    //         if (user) {
    //             router.push('checkout')
    //         } else {
    //             router.push('user-login')
    //         }
    //     },
    //     []
    // )
    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
            {/* Left - Cart Items */}
            <div className="flex-1 space-y-4">
                {
                    cart?.items.map(
                        (item) => {
                            const product = products.find((prod) => prod._id === item.productId)
                            return (
                                < div
                                    key={product._id}
                                    className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm relative"
                                >
                                    < div className="flex items-center gap-4" >
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                                            alt={product.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div>
                                            <p className="font-semibold">{product.name}</p>
                                            <p className="text-red-500 font-bold">₹{product.finalPrice}</p>
                                        </div>
                                    </div>

                                    {/* Quantity UI */}
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 border rounded-lg hover:bg-gray-100">
                                            <FaMinus />
                                        </button>
                                        <span className="px-2">{item.qty}</span>
                                        <button className="p-2 border rounded-lg hover:bg-gray-100">
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>

                            )
                        })
                }
            </div >

            {/* Right - Order Summary */}
            < div className="w-full md:w-80 bg-white rounded-2xl shadow-md p-6 h-fit border border-green-500" >
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Order Total:</span>
                        <span>₹{cart.original_total}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Saving:</span>
                        <span>₹{(cart.original_total - cart.final_total)}</span>
                    </div>

                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                    <span>ORDER TOTAL:</span>
                    <span>₹{cart.final_total}</span>
                </div>
                <button onClick={checkoutHandler} className="w-full bg-green-600 text-white py-2 mt-6 rounded-xl hover:bg-green-700 transition">
                    CHECKOUT
                </button>
            </div >
        </div >
    );
};

export default Cart;
