import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='container mx-auto my-5'>
      <p className='text-xl font-semibold'>Not found 404</p>
      <Link to={`/`}><button className='button shadow-xl w-32 h-10 rounded mt-4 bg-black text-white'>go home page</button></Link>
    </div>
  )
}
