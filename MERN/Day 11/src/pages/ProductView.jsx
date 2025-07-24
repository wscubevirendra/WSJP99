import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductView() {
    const { id } = useParams()


    const [product, setProduct] = useState({})

    useEffect(
        () => {
            axios.get("https://dummyjson.com/products/" + id).then(
                (response) => {
                    setProduct(response.data)
                }
            ).catch(
                (error) => {
                    setProduct(error)
                }
            )
        },
        []
    )

    const discountedPrice = (
        product.price -
        (product.price * product.discountPercentage) / 100
    ).toFixed(2);

    return (
        <>
            <Header />
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="rounded-xl w-full h-auto object-cover shadow"
                        />
                        <div className="flex gap-5">
                            {
                                product?.images?.map((img, i) => {
                                    return <img width={100} height={100} src={img} alt="" />
                                })
                            }
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-gray-600">{product.description}</p>

                        {/* Price */}
                        <div className="text-xl font-semibold text-indigo-600">
                            ₹{discountedPrice}{" "}
                            <span className="text-sm line-through text-gray-500 ml-2">
                                ₹{product.price}
                            </span>{" "}
                            <span className="text-green-600 text-sm">
                                ({product.discountPercentage}% off)
                            </span>
                        </div>

                        {/* Rating & Stock */}
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                                <FiStar className="text-yellow-500" /> {product.rating}
                            </span>
                            <span>Stock: {product.stock}</span>
                            <span>Brand: {product.brand}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-2">
                            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
                            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
                            <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
                            <p><strong>Availability:</strong> {product.availabilityStatus}</p>
                        </div>

                        {/* Minimum Order */}
                        <p className="text-sm text-gray-500">
                            Minimum Order Quantity: {product.minimumOrderQuantity}
                        </p>

                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md mt-4 flex items-center gap-2">
                            <FiShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                    <div className="space-y-4">
                        {product?.reviews?.map((review, idx) => (
                            <div key={idx} className="border rounded-lg p-4">
                                <p className="text-sm text-gray-700 italic">"{review.comment}"</p>
                                <div className="text-sm text-gray-500 mt-1">
                                    - {review.reviewerName}, Rating: {review.rating}/5
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
}
