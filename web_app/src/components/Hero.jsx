import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 p-10 gap-3'>
      <div className='flex flex-col items-center md:items-start justify-center'>
        <span className='text-xl lg:text-4xl font-semibold mb-6 md:mb-10'>Plan your <span className='text-primary'>events</span> with us!</span>
        <br/>
        <span className='text-center md:text-start text-sm leading-loose lg:tracking-wide lg:whitespace-break-spaces font-light lg:text-xl'>Step into the realm of corporate events perfection with
        <span className='text-primary'> Events by Larah_O</span>, where meticulous checklists meet
        an atmosphere of excellence, elevating your gatherings to the A-level!</span>
        <Link to="/" className='bg-yellow-600 hover:bg-yellow-500 px-3 md:px-4 py-1 rounded-md text-white text-xs md:text-sm shadow-md shadow-gray-400 mt-4 md:mt-3'>Start Planning</Link>
      </div>
      <div className='grid  justify-center md:justify-end lg:mt-0 mt-6'>
        <div className='bg-secondary  h-60 w-64 lg:h-96 lg:w-96 rounded-xl'></div>
        <div className='-mt-56 -ml-4 lg:-mt-[22rem] lg:-ml-8'>
          <img src='./images/heroimg.jpg' alt='' className='h-60 w-64 lg:h-96 lg:w-96 rounded-xl'/>
        </div>
      </div>
    </div>
  )
}

export default Hero