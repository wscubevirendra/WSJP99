import React, { useContext } from 'react'
import { context } from './Store'

export default function Z() {
    const {count,setCount}=useContext(context)
  return (
    <div>Z <button onClick={()=>setCount(count+1)}>+</button> </div>
  )
}
