import React, { useContext } from 'react'
import Z from './Z'
import { context } from './Store'

export default function Y() {
    const { count } = useContext(context)
    return (
        <div>Y:{count} <Z /></div>
    )
}
