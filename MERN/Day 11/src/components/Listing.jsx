import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Listing() {
    const { category_slug } = useParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const limit = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                if (category_slug) {
                    const fullResponse = await axios.get(`https://dummyjson.com/products/category/${category_slug}`);
                    const allCategoryProducts = fullResponse.data.products;

                    const total = allCategoryProducts.length;
                    const start = currentPage * limit;
                    const end = start + limit;
                    const sliced = allCategoryProducts.slice(start, end);

                    setProducts(sliced);
                    setPages(Math.ceil(total / limit));
                } else {
                    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${currentPage * limit}`);
                    setProducts(response.data.products);
                    setPages(Math.ceil(response.data.total / limit));
                }
            } catch (error) {
                setProducts([]);
                setPages(0);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category_slug, currentPage]);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
            .then((response) => {
                // Convert string array to object format
                const formatted = response.data.map(cat => ({
                    slug: cat,
                    name: cat.charAt(0).toUpperCase() + cat.slice(1),
                }));
                setCategories(formatted);
            })
            .catch(() => setCategories([]));
    }, []);

    const pagination = [];
    for (let i = 0; i < pages; i++) {
        pagination.push(
            <li
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`px-3 py-2 cursor-pointer border border-gray-300 text-sm font-medium hover:bg-gray-100 ${i === currentPage ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
            >
                {i + 1}
            </li>
        );
    }

    return (
        <div className="max-w-7xl flex space-x-10 mx-auto px-4 py-10">
            {/* Sidebar */}
            <div className="w-[200px]">
                <ul>
                    <li className={`w-full ${!category_slug ? 'bg-amber-400' : 'bg-indigo-500'} cursor-pointer hover:bg-teal-900 py-2 px-4 font-bold text-white mb-4 rounded-lg`}>
                        <Link to="/">All</Link>
                    </li>
                    {
                        categories.map((cat, index) => (
                            <li
                                key={index}
                                className={`w-full ${cat.slug === category_slug ? 'bg-amber-400' : 'bg-indigo-500'} cursor-pointer hover:bg-teal-900 py-2 px-4 font-bold text-white mb-4 rounded-lg`}
                            >
                                <Link to={`/${cat.slug}`}>{cat.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Product Section */}
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>

                {/* Show pagination only if more than 1 page */}
                {pages > 1 && (
                    <div className="flex justify-center my-10">
                        <ul className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
                            {pagination}
                        </ul>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading
                        ? [...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                                <div className="h-56 bg-gray-200" />
                                <div className="p-4 flex flex-col justify-between h-[150px]">
                                    <div className="h-5 bg-gray-300 rounded w-3/4 mb-2" />
                                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-4" />
                                    <div className="h-10 bg-gray-300 rounded" />
                                </div>
                            </div>
                        ))
                        : products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
                            >
                                <Link to={`/product-view/${product.id}`}>
                                    <div className="h-56 overflow-hidden">
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </Link>
                                <div className="p-4 flex flex-col justify-between h-[150px]">
                                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                                        {product.title}
                                    </h3>
                                    <p className="text-indigo-600 font-bold text-xl">${product.price}</p>
                                    <button
                                        className="mt-3 bg-indigo-600 text-white flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-indigo-700 transition"
                                    >
                                        <FiShoppingCart />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
} 