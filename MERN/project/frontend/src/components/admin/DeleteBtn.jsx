'use client'
import Swal from 'sweetalert2'

import { axiosInstance, notify } from '@/library/helper'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DeleteBtn({ id, url }) {
    const router = useRouter()
    function deleteHandler() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axiosInstance.delete(`${url}/delete/${id}`).then(
                    (response) => {
                        notify(response.data.message, response.data.success)
                        if (response.data.success) {
                            router.refresh()
                        }
                    }
                ).catch((error) => {
                    console.log(error)
                })
            }
        });





    }
    return (
        <button onClick={deleteHandler} className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
            Delete
        </button>
    )
}
