'use client'

import React, { useRef, useState } from "react";
import { axiosInstance, notify, createSlug } from "@/library/helper";
import Select from 'react-select'
import TextEditor from "./TextEditor";



export default function ProductAdd({ category, brands, colors }) {
    const [selcolor, setSelcolor] = useState([])
    const [longDescription, setlongDescription] = useState(null)
    const nameRef = useRef();
    const slugRef = useRef();
    const originalRef = useRef();
    const discountRef = useRef();
    const finalRef = useRef();

    function generateSlug() {
        const slug = createSlug(nameRef.current.value);
        slugRef.current.value = slug
    }

    function priceCalculate() {
        const op = originalRef.current.value;
        const dp = discountRef.current.value;
        const fp = op - (op * dp) / 100;
        finalRef.current.value = parseInt(fp)

    }

    function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("shortDescription", e.target.shortDescription.value);
        formData.append("longDescription", longDescription);
        formData.append("originalPrice", originalRef.current.value);
        formData.append("discountPercentage", discountRef.current.value);
        formData.append("finalPrice", finalRef.current.value);
        formData.append("categoryId", e.target.categoryId.value);
        formData.append("brandId", e.target.brand.value);
        formData.append("colors", JSON.stringify(selcolor));
        formData.append("thumbnail", e.target.thumbnail.files[0]);
        for (let img of e.target.images.files) {
            formData.append("images", img)
        }

        axiosInstance.post("product/create", formData).then(
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
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="p-6 border-b">
                        <h2 className="text-2xl font-semibold">Create / Edit Product</h2>
                        <p className="text-sm text-gray-500 mt-1">Modern product form using Tailwind CSS grid layout.</p>
                    </div>

                    <form onSubmit={submitHandler} className="p-6 grid grid-cols-12 gap-6">
                        {/* Left column: basic details */}
                        <section className="col-span-12 grid gap-4">
                            <div className="grid grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                                    <input
                                        name="name"
                                        ref={nameRef}
                                        onChange={generateSlug}
                                        type="text"
                                        placeholder="e.g. Classic T-Shirt"
                                        className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Slug</label>
                                    <input
                                        name="slug"
                                        ref={slugRef}
                                        readOnly
                                        type="text"
                                        placeholder="product-slug"
                                        className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                                <textarea
                                    name="shortDescription"
                                    rows="2"
                                    placeholder="Brief description..."
                                    className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Long Description</label>
                                <TextEditor value={longDescription} changeHandler={(value) => {
                                    setlongDescription(value)
                                }} />
                                {/* <textarea name="longDec"  id=""></textarea> */}
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Original Price</label>
                                    <input
                                        name="originalPrice"
                                        ref={originalRef}
                                        onChange={priceCalculate}
                                        type="number"
                                        className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Discount %</label>
                                    <input
                                        name="discountPercentage"
                                        type="number"
                                        ref={discountRef}
                                        onChange={priceCalculate}
                                        className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Final Price</label>
                                    <input
                                        name="finalPrice"
                                        type="number"
                                        readOnly
                                        ref={finalRef}
                                        disabled
                                        className="mt-1 block w-full rounded-xl border-gray-200 bg-gray-100 shadow-sm p-3"
                                    />
                                </div>
                            </div>



                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Category</label>
                                    <Select name="categoryId" options={
                                        category.map((cat) => {
                                            return { value: cat._id, label: cat.name }
                                        })
                                    } />

                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Brand</label>
                                    <Select name="brand" options={
                                        brands.map((brand) => {
                                            return { value: brand._id, label: brand.name }
                                        })
                                    } />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        isMulti
                                        onChange={
                                            (data) => {
                                                const color = data.map(o => o.value)
                                                setSelcolor(color)
                                            }
                                        }
                                        options={
                                            colors.map((col) => {
                                                return { value: col._id, label: col.name }
                                            })
                                        }
                                    />
                                </div>
                            </div>


                        </section>

                        {/* Right column: media uploads */}
                        <section className="col-span-12 grid gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                                <input
                                    name="thumbnail"
                                    type="file"
                                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-600 hover:file:bg-indigo-100"
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Images</label>
                                <input
                                    name="images"
                                    type="file"
                                    multiple
                                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-600 hover:file:bg-indigo-100"
                                />
                                <div className="mt-3 grid grid-cols-3 gap-2">
                                    <div className="w-full h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Img</div>
                                    <div className="w-full h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Img</div>
                                    <div className="w-full h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Img</div>
                                </div>
                            </div>
                        </section>

                        {/* Submit button */}
                        <div className="col-span-12 flex justify-end">
                            <button type="submit" className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
                                Save Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
