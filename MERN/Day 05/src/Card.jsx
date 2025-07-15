import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";

import { IoMdHeartDislike } from "react-icons/io";


export default function Card() {
    const [toggle, setToggle] = useState(true)
    const data = [
        {
            id: 1,
            title: "Essence Mascara Lash Princess",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        },
        {
            id: 2,
            title: "Eyeshadow Palette with Mirror",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
        },
        {
            id: 3,
            title: "Powder Canister",
            Status: "In Stock",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
        },
        {
            id: 4,
            title: "Powder Canister",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
        },
        {
            id: 4,
            title: "Powder Canister",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
        },

    ]

    function toggleHandler() {
        setToggle(!toggle)
    }
    return (

        <div className='container-xl'>
            <div className='row gy-4'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='col-4'>
                                <div className='card'>
                                    <img src={item.thumbnail} height={200} alt="" />
                                    <h6>{item.title}</h6>
                                    {
                                        toggle ?
                                            <FcLike onClick={toggleHandler} />
                                            :
                                            <IoMdHeartDislike onClick={toggleHandler} />

                                    }




                                </div>



                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}
