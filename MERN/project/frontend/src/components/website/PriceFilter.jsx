'use client'
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function PriceFilter({ colors }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [price, setPrice] = useState([]);


    useEffect(
        () => {
            const min = searchParams.get('min')
            const max = searchParams.get('max')
            setPrice([Number(min), Number(max)])

        },
        [searchParams]
    )

    function changeHandler(data) {
        setPrice(data)
        const price = new URLSearchParams();
        price.set("min", data[0])
        price.set("max", data[1])
        router.push(`?${price.toString()}`);

    }
    return (
        <aside className="w-70 mt-5 bg-gray-50 p-5 rounded-2xl shadow-sm">
            <h2 className="font-bold text-lg mb-4">PRICE FILTER</h2>
            <div className="my-6">
                <label >{price[0]}</label>
                <span>-</span>
                <label >{price[1]}</label>
            </div>
            <RangeSlider min="200" max="100000" value={price} onInput={changeHandler} />
        </aside>
    );
}
