'use client'

import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
    const router = useRouter()
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value
        }

        axios.post("http://localhost:5000/user/create", data).then(
            (response) => {
                if (response.data.flag == 1) {
                    router.push("/")
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
                <p className="text-sm text-gray-500 mb-6">Fill out the form and we'll get back to you soon.</p>

                <form className="space-y-4" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                        <input
                            id="contact"
                            name="contact"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 active:scale-98 transform transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <p className="text-xs text-gray-400 mt-4">We respect your privacy. Your information will not be shared.</p>
            </div>
        </div>
    );
}
