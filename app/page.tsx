import Benefit from '@/sections/Benefits'
import Hero from '@/sections/Hero'
import Proposal from '@/sections/Proposal'
import Provide from '@/sections/Provide'
import Steps from '@/sections/Steps'
import React from 'react'

const Home: React.FC = () => {
  
  return (
    <>
      <Hero/> 
      <Benefit/>
      <Provide/>
      <Steps/>
      <Proposal/>
    </>
  )
}

export default Home