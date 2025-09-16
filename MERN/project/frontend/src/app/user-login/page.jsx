'use client'

import React, { useState } from "react";

export default function AuthForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {/* Sign In Form */}
        {isSignIn && (
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>
        )}

        {/* Sign Up Form */}
        {!isSignIn && (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Toggle Link */}
        <p className="text-center mt-4 text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-blue-500 hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
