'use client'

import { useState } from 'react'

export default function Counter() {
    const [state, setState] = useState(0);
    return (
        <div className='flex justify-center items-center gap-4' >
            <button onClick={() => setState(state + 1)} className='bg-blue-500 text-white rounded px-4 py-2'>+</button>
            <h1>{state}</h1>
            <button onClick={() => setState(state - 1)} className='bg-blue-500 text-white rounded px-4 py-2'>-</button>
        </div >
    )
}
