'use client'
import { axiosInstance, notify } from "@/library/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";

export default function AdminLogin() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);


  function loginHandler(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    axiosInstance.post('admin/login', data, { withCredentials: true }).then(
      (response) => {
        console.log(response.data)

        notify(response.data.message, response.data.success)
        if (response.data.success) {
          router.push('/admin')
        }
      }
    ).catch(
      (error) => {
        notify("Something else", 0)
      }
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-indigo-100 border border-indigo-200">
              <FaShieldAlt className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-gray-900 text-2xl font-semibold leading-tight">Admin </h1>
              <p className="text-gray-500 text-sm">Sign in to manage your dashboard</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={loginHandler} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm mb-1">
                Email
              </label>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2.5 bg-gray-50 border-gray-300 focus-within:ring-2 focus-within:ring-indigo-400 transition">
                <FaEnvelope className="w-4 h-4 text-gray-400" />
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2.5 bg-gray-50 border-gray-300 focus-within:ring-2 focus-within:ring-indigo-400 transition">
                <FaLock className="w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="p-1 rounded-lg hover:bg-gray-200 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between pt-1">
              <label className="inline-flex items-center gap-2 text-gray-600 text-sm select-none">
                <input
                  type="checkbox"
                  className="accent-indigo-500 w-4 h-4 rounded"
                  defaultChecked
                />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md"
            >
              <FaLock className="w-4 h-4" />
              <span>Sign In</span>
            </button>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-500 mt-3">
              By signing in you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
