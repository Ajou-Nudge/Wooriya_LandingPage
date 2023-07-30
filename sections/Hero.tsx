"use client"
import React, { useState ,useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useMediaQuery } from "react-responsive"
import { motion } from 'framer-motion';

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
        <section className="section_container">
            <Image
                className='hero-container'
                src="/Herobackground.webp"
                alt="Herobackground"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                priority
            ></Image>
            {isPc && <div className='hero-content'>
                <div className="flex items-center justify-center w-1920 h-120 py-3 px-0 flex-shrink-0  gap-1 mt-5">
                    <Navbar />
                </div>
                    
                 <div className='mt-20 font-bold'>
                    <div className='text-white flex justify-center text-6xl mt-1 bottom-2'>
                        다양한 제휴와 혜택으로
                    </div>
                        
                    <div className='text-white flex justify-center text-6xl mt-2'>
                        하나되는 우리 동아리,
                    </div>
                        
                    <div className='text-white flex justify-center text-6xl mt-2'>
                        우리야
                    </div>
                </div>
                    
                <div className='flex justify-center mt-20'>
                    <CustomButton 
                        ButtonStyle="flex justify-center gap-8 Hero_button_container border-2 border-coolgray-cg-00 rounded-full"
                        FontStyle="text-white text-2xl"
                        ButtonContent="사전신청 혜택받기"
                        href='https://www.wooriya.com/'
                    ></CustomButton>
                </div>
                <div className='mt-80 text-white flex justify-center flex-small-screen text-2xl'>우리모임 혜택을 확인해보세요</div>
                    <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [12, 0, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity, damping: 100 }}
                    className="flex justify-center mt-2 flex-small-screen`">
                        <Link
                        to="benefit-section"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                        >
                        <Image src="/arrow.svg" width={100} height={100} alt="white arrow" />
                        </Link>
                    </motion.div>
            </div>
            }
           
           {isMobile && <div className='hero-content'>
                <div className='flex items-center justify-center gap-1 mt-20'>
                    <div>
                        <Image
                        src="/logo.svg"
                        width={0}
                        height={0}
                        alt="Wooriya logo"
                        style={{width:'4rem', height:'auto'}}
                        />
                    </div>
                    <div>
                        <Image
                        src="/wooriya.svg"
                        width={0}
                        height={0}
                        alt="wooriya letters"
                        style={{width:'20rem', height:'auto'}}
                        />
                    </div>
                </div>

                <div className='mt-100 font-bold'>
                    <div className='text-white flex justify-center text-7xl mt-2 bottom-2'>
                        다양한 제휴와 혜택으로
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


                <div className='mt-80 text-white flex justify-center flex-small-screen text-3xl '>우리모임 헤택을 확인해보세요</div>
                    <motion.div 
                    initial={{ y: 0 }}
                    animate={{ y: [12, 0, 12] }}
                    transition={{ duration: 1.5, repeat: Infinity, damping: 100 }}
                    className="flex justify-center mt-2 flex-small-screen`">
                        <Link
                        to="benefit-section"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                        >
                        <Image src="/arrow.svg" width={0} height={0} alt="white arrow " priority style={{width:'6rem', height:'auto'}} />
                        </Link>
                    </motion.div>
           </div>}
           
        </section>
    );
    };
  
export default Hero;

