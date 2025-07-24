import React from 'react'


export default function App() {
  return (
    <>
      <header className='w-full mb-10 shadow-2xl p-4'>
        <div className=' max-w-7xl flex justify-between mx-auto'>
          <h1 className='font-extrabold text-blue-700 uppercase animate-bounce'>WsCube tech</h1>
          <ul className=' hidden sm:flex  gap-10'>
            <li className='text-gray-800 font-bold'>Home</li>
            <li className='text-gray-800 font-bold'>About</li>
            <li className='text-gray-800 font-bold'>Contact</li>
            <li className='text-gray-800 font-bold'>Services</li>
          </ul>
        </div>



      </header>

      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2'>
        <div className='bg-amber-900 col-span-2 sm:col-span-3 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20 '>1</div>
        <div className='bg-teal-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>2</div>
        <div className='bg-red-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>3</div>
        <div className='bg-green-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20  '>4</div>
        <div className='bg-sky-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>5</div>
        <div className=' bg-yellow-800 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>6</div>
        <div className='bg-pink-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>7</div>
        <div className='bg-sky-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>8</div>
        <div className='bg-sky-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>9</div>
        <div className='bg-sky-900 text-center text-white text-4xl pt-4 rounded-lg shadow-2xl min-h-20'>10</div>
      </div>
    </>


  )
}
