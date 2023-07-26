'use client'
import Loader from '@/components/Loader'
import Benefit from '@/sections/Benefits'
import Hero from '@/sections/Hero'
import Proposal from '@/sections/Proposal'
import Provide from '@/sections/Provide'
import Steps from '@/sections/Steps'
import React,{ useState, useEffect} from 'react'

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading time (you can use real loading events here)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration as needed
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Benefit />
          <Provide />
          <Steps />
          <Proposal />
        </>
      )}
    </>
  );
}

export default Home