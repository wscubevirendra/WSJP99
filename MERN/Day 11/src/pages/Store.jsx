import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const context = createContext();

export default function Store({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(
        () => {
            axios.get("https://dummyjson.com/products?limit=195").then((response) => {
                setProducts(response.data.products)
            }).catch((error) => {
                setProducts([])
            })
        },
        []
    );

    function addtoCart(id) {
        const product = products.find((item) => item.id === id)
        const existingProduct = cart.find((item) => item.id === id)
        if (existingProduct) {
            const updateCart = cart.map((item) => item.id == id ? { ...item, qty: item.qty + 1 } : item);

            setCart(updateCart)
        } else {
            //new add
            setCart([...cart, { ...product, qty: 1 }])
        }

    }

    function qtyHandler(id, flag) {
        const cart = cart.find((item) => item.id === id);
      
        let updateCart = null;
        if (flag == 1) {
            updateCart = cart.map((item) => item.id == id ? { ...item, qty: item.qty + 1 } : item);
        } else {
            

            updateCart = cart.map((item) => item.id == id ? { ...item, qty: item.qty - 1 } : item);
        }
        setCart(updateCart)
    }

    function removeHandler(id) {
        const product = cart.filter((item) => item.id != id);
        setCart(product)
    }



    return (
        <context.Provider value={{ addtoCart, cart, qtyHandler, removeHandler }}>
            {children}
        </context.Provider>

    )
}


export { context }

