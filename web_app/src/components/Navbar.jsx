import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between sticky top-0 shadow-md h-16 p-4 md:py-6 md:px-10 bg-white'>
        <div className='font-logo font-bold text-lg md:text-xl text-primary'>
            <Link to="/">EVENTS.byLarah_O</Link>
        </div>
        <div className='flex gap-3 md:gap-6'>
            <Link to="/signin" className='bg-primary px-3 py-1 rounded-md text-xs text-white md:px-6 md:py-2 md:text-sm'>Sign In</Link>
            <Link to="/signup" className='bg-white px-3 py-1 rounded-md border border-primary text-xs text-primary md:px-6 md:py-2 md:text-sm'>Sign Up</Link>
        </div>
    </div>
  )
}

export default Navbar