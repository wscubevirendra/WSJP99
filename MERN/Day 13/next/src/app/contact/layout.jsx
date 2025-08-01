import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <h1 className='text-3xl text-center py-10 font-bold underline'>Contact Layout</h1>
      {children}
    </div>
  )
}
