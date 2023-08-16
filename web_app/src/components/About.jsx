import React from 'react'

const About = () => {
  return (
    <div className='text-center mt-0 md:mt-5 py-5 px-10'>
        <span className=' text-xl md:text-2xl text-primary underline'>About</span>
        <div className='text-start py-5 text-sm'>
            <span>Event by Larah_O is a company that help you create an atmosphere that breeds innovation. We help your brand reach a larger audience by planning an event that matches your brand identity and help your audience taste the juice of your value. 
                With our checklist, you can plan your corporate event on your own without leaving anything out.</span>
            <div className='mt-3'>
                <span className='text:lg md:text-xl text-primary underline'>Vision</span>
                <br />
                <span>To create the right atmosphere where your customers feel the value of your brand</span>
                <br />
            </div>
            <div className='mt-3'>
                <span className='text-lg md:text-xl text-primary underline'>Mission</span>
                <br />
                <span>To see that your event gives precise details of your brand to your customers by selling the values of your brand through a well cordinated and organized event.</span>
            </div>  
        </div>
        
    </div>
  )
}

export default About