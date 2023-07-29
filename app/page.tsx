'use client'
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Benefit from '@/sections/Benefits';
import Hero from '@/sections/Hero';
import Proposal from '@/sections/Proposal';
import Provide from '@/sections/Provide';
import Steps from '@/sections/Steps';
import { Element } from 'react-scroll';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div style={{ display: loading ? 'block' : 'none' }}>
        <Loader />
      </div>
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="benefit">
          <Benefit />
        </Element>
        <Element name="provide">
          <Provide />
        </Element>
        <Element name="steps">
          <Steps />
        </Element>
        <Element name="proposal">
          <Proposal />
        </Element>
      </div>
    </>
  );
};

export default Home;
