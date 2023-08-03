"use client"
import Title from '@/components/Title'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React,{ useState, useEffect } from 'react'
import { useMediaQuery } from "react-responsive"
import MiniTitle from '@/components/MiniTitle'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Proposal = () => {
  const [rootFontSize, setRootFontSize] = useState(16); // Set a default value (usually 16px)

  useEffect(() => {
    // Get the root font size from the window object
    const rootFontSizeValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
    setRootFontSize(rootFontSizeValue);
  }, []);

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

      return (
        <section className='section_container'>
          {isPc && 
          <div className='flex h-screen'>
              <div className='flex flex-1 justify-end Proposalleft'>
                <div className='flex flex-col justify-center'>
                    <Title
                      SubTitleContent="우리야는 어떻게 신청해요?"
                      TitleContent="지금 바로/ 우리가 원하는/ 제휴처를 만나/ Win-Win해요"
                    ></Title>
                </div>
              </div>

            <motion.div 
              variants={staggerContainer(0.1,0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className='flex flex-1 items-center'>
              <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='borderRadius32 backgroundLinearGradient color-Box flex flex-col justify-center'> 
                  <div className='flex flex-row justify-center ProposalSetmarginTop'>
                    <div className='ProposalWooriya'>
                             <Image
                                src="/logowooriya.svg"
                                width={0}
                                height={0}
                                alt="wooriya letters"
                                priority
                                className='ProposalWooriya'
                              />
                    </div>
                  </div>
                  <div className='flex flex-col'>
                      <div className='flex flex-col justify-center'>
                      <div className='color-coolgray-cg-100 text-center ProposalMariginTop32 ProposalGrayFont'>모집 기간</div>
                      <div className='color-coolgray-cg-00 text-center ProposalWhiteFont'>07.28(월)~08.07(월)까지</div>
                      <div className='color-coolgray-cg-00 text-center ProposalWhiteFont'>사전혜택을 받을 수 있습니다.</div>

                      <div className='color-coolgray-cg-100 text-center ProposalMariginTop64 ProposalGrayFont'>모집 대상</div>
                      <div className='color-coolgray-cg-00 text-center ProposalWhiteFont'>10인이상 활동 단체</div>
                      <div className='color-coolgray-cg-00 text-center ProposalWhiteFont'>(동아리, 동호회, 협회 등)</div>

                      <div className='color-coolgray-cg-100 text-center ProposalMariginTop64 ProposalGrayFont'>제휴처 연락 시기</div>
                      <div className='color-coolgray-cg-00 text-center ProposalWhiteFont'>8월말 개별 연락</div>
                    </div>
                  </div>

                  <div className='items-center p-4 flex justify-center ProposalMariginTop64'>
                    <CustomButton
                      ButtonStyle='border-radius-64 background-coolgray-800 flex justify-center button_container'
                      FontStyle='color-coolgray-cg-00 text-center button_font'
                      ButtonContent='바로 신청하기'
                      href='https://www.wooriya.com/'
                    ></CustomButton>
                 </div>
              </motion.div>    
              </motion.div>
          </div>}
          
          {isMobile && <div className='flex flex-col'>
            <div className='flex justify-center mt-start'>
              <MiniTitle
                  SubTitleContent="우리야는 어떻게 신청해요?"
                  TitleContent="지금 바로 우리가 원하는/ 제휴처를 만나 Win-Win해요"
              ></MiniTitle>
            </div>
            <motion.div 
            variants={staggerContainer(0.1,0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className='flex justify-center'>
                <motion.div 
                variants={fadeIn('up', 'tween', 0.3, 1)}
                className='borderRadius32 backgroundLinearGradient color-Box Mobile_Step_Stepcard_32'>
                  <div className='flex flex-col Mobile_Proposal_margintop_32'>
                      <div className='flex gap-1 justify-center mt-15'>
                              <div className='Mobile_Proposal_logo mt-1'>
                                <Image
                                  src="/logowooriya.svg"
                                  width={0}
                                  height={0}
                                  alt="Wooriya logo"
                                  priority
                                  className='Mobile_Proposal_logo'
                                />
                              </div>
                            </div>
                            <div className='color-coolgray-cg-100 text-center mt-10 Mobile_gray_fontsize'>모집 기간</div>
                            <div className='color-coolgray-cg-00 text-center Mobile_white_fontsize Mobile_Proposal_margintop_8'>07.28(월)~08.07(월)까지</div>
                            <div className='color-coolgray-cg-00 text-center Mobile_white_fontsize'>사전혜택을 받을 수 있습니다.</div>

                            <div className='color-coolgray-cg-100 text-center mt-10 Mobile_gray_fontsize'>모집 대상</div>
                            <div className='color-coolgray-cg-00 text-center Mobile_white_fontsize Mobile_Proposal_margintop_8'>10인이상 활동 단체</div>
                            <div className='color-coolgray-cg-00 text-center Mobile_white_fontsize'>(동아리, 동호회, 협회 등)</div>

                            <div className='color-coolgray-cg-100 text-center mt-10 Mobile_gray_fontsize'>제휴처 연락 시기</div>
                            <div className='color-coolgray-cg-00 text-center Mobile_white_fontsize Mobile_Proposal_margintop_8'>8월말 개별 연락</div>
                      </div>

                    <div className='flex justify-center Mobile_Proposal_margintop_32'>
                      <CustomButton
                        ButtonStyle='border-radius-64 background-coolgray-800 flex justify-center black_button_container'
                        FontStyle='color-coolgray-cg-00 text-center text-3xl'
                        ButtonContent='바로 신청하기'
                        href='https://www.wooriya.com/'
                      ></CustomButton>
                    </div>
                  </motion.div>
            </motion.div>    
        </div>}
        </section>
      )
    }

export default Proposal;
