'use client'

import axios from 'axios'
import React from 'react'

export default function DeleteButton({ id }) {

    function deleteHandler() {
        axios.delete(`http://localhost:5000/user/delete/${id}`).then(
            (response) => {
                if (response.data.flag == 1) {
                    window.location.reload()
                }
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <span
            onClick={deleteHandler}
            className="px-3 py-1 cursor-pointer rounded-full text-sm font-medium bg-red-100 text-red-700"
        >
            Delete
        </span>
    )
}
