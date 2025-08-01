'use client'
import React, { useEffect } from 'react'

export default function Slider({ data }) {
    const [current, setCurrent] = React.useState(0);
    useEffect(
        () => {
            const interval = setInterval(() => {
                console.log("Hello")
                setCurrent((prev) => prev === data.length - 1 ? 0 : prev + 1);
            }, 2000); // Change slide every 2 seconds

            return () => clearInterval(interval); // Cleanup on unmount

        },
        []
    )


    return (
        <div className='w-full h-[300px] rounded-4xl  overflow-hidden relative top-0'>
            {
                data.map((item, index) => (
                    <div key={index} className={`absolute top-0 w-full h-full transition-all duration-500 ease-in-out` + (current === index ? 'opacity-100 scale-100' : ' opacity-0 scale-0')}>
                        <img

                            src={item.image}
                            alt={item.name}
                            className='w-full rounded-4xl  h-full object-cover'
                        />

                    </div>
                ))
            }
        </div>
    )
}
