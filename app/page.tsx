"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Benefit from '@/sections/Benefits';
import Hero from '@/sections/Hero';
import Proposal from '@/sections/Proposal';
import Provide from '@/sections/Provide';
import Steps from '@/sections/Steps';

const Home: React.FC = () => {
  const sections = ['Hero', 'Benefit', 'Provide', 'Steps', 'Proposal'];

  return (
    <>
          <section id="Hero">
            {/* Hero 섹션 컨텐츠 */}
            <Link to="Benefit" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Hero/>
            </Link>
          </section>
          <section id="Benefit">
            {/* Benefit 섹션 컨텐츠 */}
            <Link to="Provide" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Benefit/>
            </Link>
          </section>

          <section id="Provide">
            {/* Provide 섹션 컨텐츠 */}
            <Link to="Steps" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Provide/>
            </Link>
          </section>

          <section id="Steps">
            {/* Steps 섹션 컨텐츠 */}
            <Link to="Proposal" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Steps/>
            </Link>
          </section>

          <section id="Proposal">
            <Link to="Hero" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Proposal/>
            </Link>
          </section>
    </>
  );
};

export default Home;
