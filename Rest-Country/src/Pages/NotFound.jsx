import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div>
      <p>Not found 404</p>
      <Link to={`/`}><button className='button bg-black text-white'>go home page</button></Link>
    </div>
  )
}
