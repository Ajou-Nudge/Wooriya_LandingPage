"use client"
import React, { useState ,useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useMediaQuery } from "react-responsive"

const Hero: React.FC = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isPc, setIsPc] = useState(false);

    const mobile = useMediaQuery({query: "(max-width: 1400px)"});
    const pc = useMediaQuery({query: "(min-width:1401px)"})
    
    useEffect(()=>{
        if(mobile) {
                setIsMobile(mobile);
                setIsPc(false);
        }
        if(pc) {
                setIsPc(pc);
                setIsMobile(false);
        }
    },[mobile,pc])


    useEffect(() => {
        require('react-scroll').animateScroll.scrollToTop();
      }, []);

    return (
        <section className="section_container hero-container">
            {isPc && <div>
                <div className="flex items-center justify-center w-1920 h-120 py-3 px-0 flex-shrink-0  gap-1">
                    <Navbar />
                </div>
                    
                 <div className='mt-20 font-bold'>
                    <div className='text-white flex justify-center text-5xl mt-1 bottom-2'>
                        다양한 제휴와 헤택으로
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
                <div className='mt-110 text-white flex justify-center flex-small-screen text-2xl'>우리모임 해택을 확인해보세요</div>
    
                    <div className="flex justify-center mt-2 flex-small-screen`">
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
            </div>}
           
           {isMobile && <div>
                <div className='flex items-center justify-center gap-1 mt-20'>
                    <div>
                        <Image
                        src="/logo.svg"
                        width={25}
                        height={25}
                        alt="Wooriya logo"
                        />
                    </div>
                    <div>
                        <Image
                        src="/wooriya.svg"
                        width={125}
                        height={125}
                        alt="wooriya letters"
                        />
                    </div>
                </div>

                <div className='mt-100 font-bold'>
                    <div className='text-white flex justify-center text-7xl mt-2 bottom-2'>
                        다양한 제휴와 헤택으로
                    </div>
                        
                    <div className='text-white flex justify-center text-7xl mt-4'>
                        하나되는 우리 동아리,
                    </div>
                        
                    <div className='text-white flex justify-center text-7xl mt-4'>
                        우리야
                    </div>
                </div>

                <div className='flex justify-center mt-20'>
                    <CustomButton 
                        ButtonStyle="flex justify-center gap-8 Hero_button_container border-2 border-coolgray-cg-00 rounded-full"
                        FontStyle="text-white text-4xl"
                        ButtonContent="사전신청 혜택받기"
                        href='https://www.wooriya.com/'
                    ></CustomButton>
                </div>

                <div className='mt-80 text-white flex justify-center flex-small-screen text-3xl'>우리모임 해택을 확인해보세요</div>
    
                    <div className="flex justify-center mt-2 flex-small-screen`">
                        <Link
                        to="benefit-section"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                        >
                        <Image src="/arrow.svg" width={60} height={60} alt="white arrow" />
                        </Link>
                </div>
                
           </div>}
        
        </section>
    );
    };

export default Hero;
