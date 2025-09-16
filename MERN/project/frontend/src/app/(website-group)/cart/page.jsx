import Cart from '@/components/website/Cart'
import { getProducts } from '@/library/api-call'
import React from 'react'

export default async function page() {
    const productJSON = await getProducts();
    const products = productJSON.data ?? [];

    return (
        <Cart products={products} />
    )
}
