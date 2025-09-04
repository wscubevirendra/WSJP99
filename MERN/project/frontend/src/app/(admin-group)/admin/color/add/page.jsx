'use client'
import React, { useRef } from "react";
import { createSlug, notify, axiosInstance, getCookies } from "@/library/helper";

export default function ColorAdd() {
    const token = getCookies('admin_token');
    const nameRef = useRef();
    const slugRef = useRef();

    function generateSlug() {
        const slug = createSlug(nameRef.current.value);
        console.log(slug)
        slugRef.current.value = slug
    }

    function submitHandler(e) {

        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            slug: slugRef.current.value,
            hexcode: e.target.hexcode.value
        }

        axiosInstance.post("color/create", data, {
            headers: {
                Authorization: token
            }
        }).then(
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
                            onChange={generateSlug}
                            placeholder="Ex: Wireless Headphones"
                            className="peer w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-3 placeholder:text-gray-400 text-gray-900 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />

                    </div>
                </div>

                {/* Slug */}
                <div className="mb-5">
                    <div className="flex items-center justify-between">
                        <label htmlFor="slug" className="block text-sm font-medium mb-2 text-gray-700">
                            Slug
                        </label>

                    </div>
                    <div className="relative">
                        <input
                            id="slug"
                            type="text"
                            ref={slugRef}
                            placeholder="wireless-headphones"
                            className="peer w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-3 placeholder:text-gray-400 text-gray-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition"
                        />

                    </div>
                </div>
                <div className="mb-5">
                    <div className="flex items-center justify-between">
                        <label htmlFor="slug" className="block text-sm font-medium mb-2 text-gray-700">
                            Color Code
                        </label>

                    </div>
                    <div className="relative">
                        <input
                            id="slug"
                            type="color"
                            name="hexcode"
                            placeholder="wireless-headphones"
                            className="peer w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-3 placeholder:text-gray-400 text-gray-900 outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition"
                        />

                    </div>
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
