'use client'
import React, { useEffect, useRef, useState } from "react";
import { createSlug, notify, axiosInstance } from "@/library/helper";
import { getCategories } from "@/library/api-call";

export default function categoryEdit({ params }) {
    const [category, setCategory] = useState({});
    const nameRef = useRef();
    const slugRef = useRef();

    async function getcategory() {
        const categoryJSON = await getCategories(params?.category_id);
        console.log(categoryJSON.data,"data")
        setCategory(categoryJSON.data)
    }

    useEffect(
        () => {
            getcategory()
        },
        [params.category_id]
    )

    function generateSlug() {
        const slug = createSlug(nameRef.current.value);
        slugRef.current.value = slug
    }



    function submitHandler(e) {

        e.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("image", e.target.category_image.files[0]);

        axiosInstance.put(`category/update/${category._id}`, formData).then(
            (response) => {
                notify(response.data.message, response.data.success)
                if (response.data.success) {
                    nameRef.current.value = ""
                    slugRef.current.value = ""
                }
            }
        ).catch((error) => {
            console.log(error)
        })
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <form onSubmit={submitHandler} className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white shadow-xl p-6 md:p-8">

                {/* Name */}
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                        Name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            type="text"
                            ref={nameRef}
                            defaultValue={category.name}
                            onChange={generateSlug}
                            placeholder="Ex: Wireless Headphones"
                            className="peer w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-3 placeholder:text-gray-400 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Slug */}
                <div className="mb-5">
                    <div className="flex items-center justify-between">
                        <label htmlFor="slug" className="block text-sm font-medium mb-2 text-gray-700">
                            Slug
                        </label>
                        <span className="text-xs text-gray-400">auto from name · editable</span>
                    </div>
                    <div className="relative">
                        <input
                            id="slug"
                            type="text"
                            defaultValue={category.slug}
                            ref={slugRef}
                            placeholder="wireless-headphones"
                            className="peer w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-3 placeholder:text-gray-400 text-gray-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition"
                        />
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.5 17.5 3 10l7.5-7.5" />
                                <path d="M21 10H3" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Image uploader */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Image</label>
                    <label className="flex flex-col items-center justify-center w-full h-36 rounded-2xl border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                        <input type="file" name="category_image" accept="image/*" className="hidden" />
                        <div className="flex items-center gap-3">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <path d="M21 15V8a2 2 0 0 0-2-2h-3" />
                                <path d="M3 9v6a2 2 0 0 0 2 2h3" />
                                <rect x="8" y="8" width="8" height="8" rx="2" />
                            </svg>
                            <div className="text-center">
                                <p className="text-sm font-medium text-gray-700">Click to upload</p>
                                <p className="text-xs text-gray-400">or drag & drop (PNG, JPG)</p>
                            </div>
                        </div>
                        <img
                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/category/${category.image}`}
                            alt={category.name}
                            className="h-10 w-10 rounded object-cover shadow"
                        />
                    </label>
                </div>


                <div className="flex items-center justify-between gap-3">

                    <button
                        type="submit"
                        className="flex-1 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl active:scale-[0.99] transition"
                    >
                        Save
                    </button>
                </div>

            </form>
        </div>
    );
}
