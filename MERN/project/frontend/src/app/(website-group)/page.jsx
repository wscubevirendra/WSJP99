import ProductCard from '@/components/website/ProductCard'
import { getProducts } from '@/library/api-call'
import React from 'react'
import Slider from '@/components/website/Slider'

export default async function page() {
    const productJSON = await getProducts(null)
    const products = productJSON.data
    return (
        <div >
            <Slider products={products} />
            <div className='grid grid-cols-4 my-4 gap-4'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>


    )
}
