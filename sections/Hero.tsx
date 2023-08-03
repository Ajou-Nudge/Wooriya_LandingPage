"use client"
import React, { useState ,useEffect } from 'react';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useMediaQuery } from "react-responsive"
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isPc, setIsPc] = useState(false);

    const mobile = useMediaQuery({query: "(max-width: 1199px)"});
    const pc = useMediaQuery({query: "(min-width:1200px)"})
    
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
                src="/Herobackground.webp"
                alt="Herobackground"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                priority
            ></Image>
            {isPc && <div className='hero-content'>
               <div className='flex flex-row justify-center gap-2 HeroStartMarginTop'>
                    <div className='HeroLogo'>
                        <Image
                            src="/logowooriya.svg"
                            alt="Wooriya logo"
                            width={0}
                            height={0}
                            priority
                            className='HeroLogo'
                        />
                    </div>
               </div>
                 <div className='HeroBetween1 font-bold HeroWord1'>
                    <div className='text-white flex justify-center'>
                        다양한 제휴와 혜택으로
                    </div>
                    <div className='text-white flex justify-center'>
                        하나되는 우리 동아리,
                    </div>
                    <div className='text-white flex justify-center'>
                        우리야
                    </div>
                </div>
                    
                <div className='flex justify-center HeroBetween2'>
                    <CustomButton 
                        ButtonStyle="flex justify-center gap-8 Hero_button_container border-2 border-coolgray-cg-00 rounded-full"
                        FontStyle="text-white HeroWord2"
                        ButtonContent="사전신청 혜택받기"
                        href='https://www.wooriya.com/'
                    ></CustomButton>
                </div>
                <div className='HeroEndMarginTop text-white flex justify-center HeroWord2'>우리모임 혜택을 확인해보세요</div>
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
                        <div className='HeroArrow'>
                            <Image 
                            src="/arrow.svg" 
                            width={0} 
                            height={0} 
                            alt="white arrow" 
                            className='HeroArrow'
                            />
                        </div>
                        </Link>
                    </motion.div>
            </div>
            }
           
           {isMobile && <div className='hero-content'>
                <div className='flex items-center justify-center gap-1 Mobile_start_maring'>
                    <div>
                        <Image
                        src="/logo.svg"
                        width={0}
                        height={0}
                        alt="Wooriya logo"
                        className='Moblie_hero_logo'
                        />
                    </div>
                    <div>
                        <Image
                        src="/wooriya.svg"
                        width={0}
                        height={0}
                        alt="wooriya letters"
                        className='Mobile_hero_wooriya'
                        />
                    </div>
                </div>

                <div className='Hero_Mobile_Margintop font-bold Mobile_hero_between'>
                    <div className='text-white flex justify-center Mobile_hero_font mt-2 bottom-2'>
                        다양한 제휴와 혜택으로
                    </div>
                        
                    <div className='text-white flex justify-center Mobile_hero_font mt-4'>
                        하나되는 우리 동아리,
                    </div>
                        
                    <div className='text-white flex justify-center Mobile_hero_font mt-4'>
                        우리야
                    </div>
                </div>

                <div className='flex justify-center mt-20'>
                    <CustomButton 
                        ButtonStyle="flex justify-center gap-8 Mobile_Hero_button_container border-2 border-coolgray-cg-00 rounded-full"
                        FontStyle="text-white Mobile_Hero_button_font"
                        ButtonContent="사전신청 혜택받기"
                        href='https://www.wooriya.com/'
                    ></CustomButton>
                </div>


                <div className='mt-60 text-white flex justify-center flex-small-screen text-3xl '>우리모임 헤택을 확인해보세요</div>
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

