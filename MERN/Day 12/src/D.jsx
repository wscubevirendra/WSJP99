import React, { useContext } from 'react'
import { context } from './Store'

export default function D() {
    const { count } = useContext(context)
    return (
        <div>D:{count}</div>
    )
}
