'use client'

import React, { useState } from 'react'

export default function page() {
  const [toggle, setToggle] = useState("account")

  const Button = ({ lable, tab }) => {
    return (
      <button onClick={() => setToggle(tab)} type="button" class="focus:outline-none outline-0 cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{lable}</button>
    )
  }

  return (
    <div className='max-w-7xl mx-auto p-4 flex space-x-10 '>
      <div className='w-[300px] flex flex-col'>
        <Button lable={"Account info"} tab={"account"} />
        <Button lable={"My order"} tab={"order"} />
        <Button lable={"My address"} tab={"address"} />
        <Button lable={"Change password"} tab={"password"} />

      </div>
      <div className='flex-1 my-4'>
        {/* Accound */}

        {
          toggle === "account" &&
          <div>
            <h2>Account info</h2>
            <div className="bg-gray-50 p-6">
              <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-md overflow-hidden">


                  <form className="p-6 grid grid-cols-12 gap-6">
                    {/* Left column: basic details */}
                    <section className="col-span-12 grid gap-6">
                      <div className="grid grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700"> Name</label>
                          <input
                            name="name"

                            type="text"
                            placeholder="e.g. Classic T-Shirt"
                            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input
                            name="slug"

                            readOnly
                            type="text"
                            placeholder="product-slug"
                            className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm p-3"
                          />
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

          </div>
        }


        {/* Order */}
        {
          toggle === "order" &&
          <div>
            <h2> My Order </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi ipsa eius qui laboriosam! Deserunt officia necessitatibus aspernatur sapiente vitae. A incidunt corrupti impedit, dolor quam nostrum molestias dolores dolore.
            </p>

          </div>

        }


        {
          toggle === "address" &&

          <div>
            <h2>address</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi ipsa eius qui laboriosam! Deserunt officia necessitatibus aspernatur sapiente vitae. A incidunt corrupti impedit, dolor quam nostrum molestias dolores dolore.
            </p>

          </div>
        }

        {
          toggle === "password" &&
          <div>
            <h2>change password </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi ipsa eius qui laboriosam! Deserunt officia necessitatibus aspernatur sapiente vitae. A incidunt corrupti impedit, dolor quam nostrum molestias dolores dolore.
            </p>

          </div>

        }








      </div>

    </div>
  )
}
