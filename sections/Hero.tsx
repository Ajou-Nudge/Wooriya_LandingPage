"use client"
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
    useEffect(() => {
        require('react-scroll').animateScroll.scrollToTop();
      }, []);
  return (
    <section className="section_container hero-container">
        <div className="flex items-center justify-center w-1920 h-120 py-3 px-0 gap-7 flex-shrink-0  gap-1">
            <Navbar />
        </div>
        
        <div className='mt-20 font-bold'>
            <div className='text-white flex justify-center text-5xl mt-1 bottom-2'>
                다양한 제휴와 해택으로
            </div>
            
            <div className='text-white flex justify-center text-5xl mt-2'>
                하나되는 우리 동아리,
            </div>
            
            <div className='text-white flex justify-center text-5xl mt-2'>
                우리야
            </div>
        </div>
        
       <div className='flex justify-center mt-10'>
            <CustomButton 
                ButtonStyle="flex justify-center gap-8 Hero_button_container border-2 border-coolgray-cg-00 rounded-full"
                FontStyle="text-white text-2xl"
                ButtonContent="사전신청 혜택받기"
                href='https://www.wooriya.com/'
            ></CustomButton>
       </div>
       
        
        <div className='mt-110 text-white flex justify-center'>우리모임 해택을 확인해보세요</div>
        
        <div className="flex justify-center mt-2">
            <Link
            to="benefit-section"
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
            >
            <Image src="/arrow.svg" width={100} height={100} alt="white arrow" />
            </Link>
      </div>
       
    </section>
  );
};

export default Hero;
