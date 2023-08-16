import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className='bg-primary text-center mt-0 md:mt-5 py-5 px-10'>
        <span className='text-xl md:text-2xl text-white underline'>Our Services</span>
        <div className='grid justify-center gap-y-3 md:grid-cols-3 lg:grid-cols-5 mt-10'>
            <Card title="Corporate Event Planning" img="./images/events.jpg"/>
            <Card title="Event Decoration" img="./images/decoration.jpg"/>
            <Card title="Event Checklist" img="./images/Checklist.jpg"/>
            <Card title="Virtual IV" img="./images/virtual.jpg"/>
            <Card title="Gifts" img="./images/gift.jpg"/>
        </div>
    </div>
  )
}

export default Services