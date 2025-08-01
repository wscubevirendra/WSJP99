import React, { createContext, useState } from 'react'
const context = createContext();

function Store({ children }) {
    const [count, setCount] = useState(100)

    return (
        <context.Provider value={{ count, setCount }}>
            {children}
        </context.Provider>
    )
}

export default Store;
export { context }
