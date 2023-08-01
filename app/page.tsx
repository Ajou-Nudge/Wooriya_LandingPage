"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Benefit from '@/sections/Benefits';
import Hero from '@/sections/Hero';
import Proposal from '@/sections/Proposal';
import Provide from '@/sections/Provide';
import Steps from '@/sections/Steps';

const Home: React.FC = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true); // Add this state variable
  
  const sections = ['Hero', 'Benefit', 'Provide', 'Steps', 'Proposal'];
  const prevScrollYRef = useRef<number>(0);
  const scrollInterval = 25; // 20ms

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollYRef.current) {
        // 스크롤 방향이 아래로 내려가는 경우
        scrollToNextSection();
      } else if (currentScrollY < prevScrollYRef.current) {
        // 스크롤 방향이 위로 올라가는 경우
        scrollToPrevSection();
      }

      prevScrollYRef.current = currentScrollY;
    };

    let scrollTimer: NodeJS.Timeout;

    const handleScrollWithInterval = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(handleScroll, scrollInterval);
    };
    
    window.addEventListener('scroll', handleScrollWithInterval);

    return () => {
      window.removeEventListener('scroll', handleScrollWithInterval);
      clearTimeout(scrollTimer);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNextSection = () => {
    console.log("scrollToNextSection: " + scrollEnabled)
    if (!scrollEnabled) return; // Do not scroll if scrollEnabled is false
  
    for (let i = 0; i < sections.length - 1; i++) {
      const currentSection = document.getElementById(sections[i]);
      const nextSection = document.getElementById(sections[i + 1]);
      if (currentSection && nextSection) {
        const currentSectionRect = currentSection.getBoundingClientRect();
        const nextSectionRect = nextSection.getBoundingClientRect();
        if (nextSectionRect.top > 0 && currentSectionRect.bottom < window.innerHeight) {
          // 현재 섹션이 화면에서 보이고 다음 섹션은 아직 보이지 않는 경우에만 스크롤
          setScrollEnabled(false); // Disable scrolling
          scrollToSection(sections[i + 1]);
          setTimeout(() => {
            setScrollEnabled(true); // Enable scrolling after the delay
          }, 1000); // Add a delay of 1 second (1000ms) before enabling scrolling
          break;
        }
      }
    }
  };
  
  const scrollToPrevSection = () => {
    console.log("scrollToPrevSection: " + scrollEnabled)
    if (!scrollEnabled) return; // Do not scroll if scrollEnabled is false
  
    for (let i = sections.length - 1; i > 0; i--) {
      const currentSection = document.getElementById(sections[i]);
      const prevSection = document.getElementById(sections[i - 1]);
      if (currentSection && prevSection) {
        const currentSectionRect = currentSection.getBoundingClientRect();
        const prevSectionRect = prevSection.getBoundingClientRect();
        if (prevSectionRect.bottom < window.innerHeight && currentSectionRect.top > 0) {
          // 현재 섹션이 화면에서 보이고 이전 섹션은 아직 보이지 않는 경우에만 스크롤
          setScrollEnabled(false); // Disable scrolling
          scrollToSection(sections[i - 1]);
          setTimeout(() => {
            setScrollEnabled(true); // Enable scrolling after the delay
          }, 1000); // Add a delay of 1 second (1000ms) before enabling scrolling
          break;
        }
      }
    }
  };

  return (
    <>
          <section id="Hero" style={{ height: '100vh' }}>
            {/* Hero 섹션 컨텐츠 */}
            <Link to="Benefit" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Hero/>
            </Link>
          </section>

          <section id="Benefit" style={{ height: '100vh' }}>
            {/* Benefit 섹션 컨텐츠 */}
            <Link to="Provide" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Benefit/>
            </Link>
          </section>

          <section id="Provide" style={{ height: '100vh' }}>
            {/* Provide 섹션 컨텐츠 */}
            <Link to="Steps" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Provide/>
            </Link>
          </section>

          <section id="Steps" style={{ height: '100vh' }}>
            {/* Steps 섹션 컨텐츠 */}
            <Link to="Proposal" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Steps/>
            </Link>
          </section>

          <section id="Proposal" style={{ height: '100vh' }}>
            <Link to="Hero" smooth={true} offset={0} duration={500} className="cursor-pointer">
              <Proposal/>
            </Link>
          </section>
    </>
  );
};

export default Home;
