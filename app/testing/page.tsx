"use client"
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';

const ScrollDirectionExample: React.FC = () => {
  const sections = ['prev-section', 'next-section', 'extra-section'];
  const prevScrollYRef = useRef<number>(0);
  const scrollInterval = 20; // 20ms

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(prevScrollYRef.current);
      console.log(currentScrollY);

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
    for (let i = 0; i < sections.length - 1; i++) {
      const currentSection = document.getElementById(sections[i]);
      const nextSection = document.getElementById(sections[i + 1]);
      if (currentSection && nextSection) {
        const currentSectionRect = currentSection.getBoundingClientRect();
        const nextSectionRect = nextSection.getBoundingClientRect();
        if (nextSectionRect.top > 0 && currentSectionRect.bottom < window.innerHeight) {
          // 현재 섹션이 화면에서 보이고 다음 섹션은 아직 보이지 않는 경우에만 스크롤
          scrollToSection(sections[i + 1]);
          break;
        }
      }
    }
  };

  const scrollToPrevSection = () => {
    for (let i = sections.length - 1; i > 0; i--) {
      const currentSection = document.getElementById(sections[i]);
      const prevSection = document.getElementById(sections[i - 1]);
      if (currentSection && prevSection) {
        const currentSectionRect = currentSection.getBoundingClientRect();
        const prevSectionRect = prevSection.getBoundingClientRect();
        if (prevSectionRect.bottom < window.innerHeight && currentSectionRect.top > 0) {
          // 현재 섹션이 화면에서 보이고 이전 섹션은 아직 보이지 않는 경우에만 스크롤
          scrollToSection(sections[i - 1]);
          break;
        }
      }
    }
  };

  return (
    <div>
     <section id="prev-section" style={{ height: '100vh' }}>
        {/* 이전 섹션 컨텐츠 */}
        <Link to="next-section" smooth={true} offset={0} duration={500} className="cursor-pointer">
          이전 섹션으로 이동
        </Link>
      </section>

      <section id="next-section" style={{ height: '100vh' }}>
        {/* 다음 섹션 컨텐츠 */}
        <Link to="extra-section" smooth={true} offset={0} duration={500} className="cursor-pointer">
          다음 섹션으로 이동
        </Link>
      </section>

      <section id="extra-section" style={{ height: '100vh' }}>
        {/* 추가된 섹션 컨텐츠 */}
        <Link to="prev-section" smooth={true} offset={0} duration={500} className="cursor-pointer">
          이전 섹션으로 이동
        </Link>
        <Link to="next-section" smooth={true} offset={0} duration={500} className="cursor-pointer">
          다음 섹션으로 이동
        </Link>
      </section>
    </div>
  );
};

export default ScrollDirectionExample;
