'use client'
import axios from 'axios'

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function StatusButton({ id, status }) {
    const notify = () => toast("Wow so easy!");
    function statusHandler() {
        axios.patch(`http://localhost:5000/user/status/${id}`).then(
            (response) => {
                if (response.data.flag == 1) {
                    notify()
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <>
            <ToastContainer />
            <span
                onClick={statusHandler}
                className={`px-3 py-1 rounded-full text-sm font-medium ${status
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}
            >

                {status ? "Active" : "Inactive"}
            </span>
        </>


    )
}
