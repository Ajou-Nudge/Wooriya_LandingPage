'use client'
import Loader from '@/components/Loader'
import Benefit from '@/sections/Benefits'
import Hero from '@/sections/Hero'
import Proposal from '@/sections/Proposal'
import Provide from '@/sections/Provide'
import Steps from '@/sections/Steps'
import React,{ useState, useEffect} from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
        <div  style={{ display: loading ? 'block' : 'none' }} >
          <Loader />
        </div>
        <div  style={{ display: loading ? 'none' : 'block' }} >
          <Hero />
          <Benefit />
          <Provide />
          <Steps />
          <Proposal />
        </div>  
    </>
  );
}

export default Home