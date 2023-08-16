import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
    </div>
    
  )
}

export default Home