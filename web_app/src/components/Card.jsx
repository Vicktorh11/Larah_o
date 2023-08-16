import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const card = (props) => {
  return (
    <div>
        <div className='w-56 h-80 rounded-md text-white shadow-lg border border-yellow-500'>
            <img src={props.img} alt="" className='w-full h-40 rounded-t-md'/>
            <div className='p-3'>
                <span className='text-xs font-bold'>{props.title}</span>
                <br/>
                <span className='text-xs font-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</span>
                <br/>
                <Link to='/' className='flex text-xs font-medium gap-1 justify-center m-1'>Learn more<HiOutlineArrowNarrowRight className='mt-1'/></Link>
                <span ></span>
            </div>
        </div>
    </div>
  )
}

export default card