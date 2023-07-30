'use client'
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Benefit from '@/sections/Benefits';
import Hero from '@/sections/Hero';
import Proposal from '@/sections/Proposal';
import Provide from '@/sections/Provide';
import Steps from '@/sections/Steps';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
          <Hero />
          <Benefit />
          <Provide />
          <Steps />
          <Proposal />
    </>
  );
};

export default Home;
