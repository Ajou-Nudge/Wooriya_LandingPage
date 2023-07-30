"use client"
import Title from '@/components/Title'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React,{ useState, useEffect } from 'react'
import { useMediaQuery } from "react-responsive"
import MiniTitle from '@/components/MiniTitle'

const Proposal = () => {
  const [rootFontSize, setRootFontSize] = useState(16); // Set a default value (usually 16px)

  useEffect(() => {
    // Get the root font size from the window object
    const rootFontSizeValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
    setRootFontSize(rootFontSizeValue);
  }, []);

      const [isMobile, setIsMobile] = useState(false);
      const [isPc, setIsPc] = useState(false);

      const mobile = useMediaQuery({query: "(max-width: 1400px)"});
      const pc = useMediaQuery({query: "(min-width:1401px)"})
      
      const remToPixels = (rem:number) : number => rem * rootFontSize;

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
          <div className='flex'>
              <div className='flex flex-1 justify-center'>
                <div className='flex flex-col justify-center'>
                    <Title
                      SubTitleContent="우리야는 어떻게 신청해요?"
                      TitleContent="지금 바로/ 우리가 원하는/ 제휴처를 만나/ Win-Win해요"
                    ></Title>
                </div>
              </div>

              <div className='flex flex-1 mt-start'>
                <div className='borderRadius32 backgroundLinearGradient color-Box'>
                  <div className='p-4'>
                    <div>
                      <div className='flex justify-center gap-1 mt-15'>
                        <Image
                          src="/logo.svg"
                          width={60}
                          height={60}
                          alt="Wooriya logo"
                          priority
                        />
                        <Image
                          src="/wooriya.svg"
                          width={300}
                          height={300}
                          alt="wooriya letters"
                          priority
                        />
                      </div>
            
                      <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>모집 기간</div>
                      <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>07.28(월)~08.07(월)까지</div>
                      <div className='color-coolgray-cg-00 text-center text-4xl  mt-2'>사전혜택을 받을 수 있습니다.</div>

                      <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>모집 대상</div>
                      <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>10인이상 활동 단체</div>
                      <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>(동아리, 동호회, 협회 등)</div>

                      <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>제휴처 연락 시기</div>
                      <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>8월말 개별 연락</div>
                    </div>
                  </div>

                {/* Right Column */}
                  <div className='items-center p-4 flex justify-center mt-10'>
                    <CustomButton
                      ButtonStyle='border-radius-64 background-coolgray-800 flex justify-center button_container'
                      FontStyle='color-coolgray-cg-00 text-center text-2xl'
                      ButtonContent='바로 신청하기'
                      href='https://www.wooriya.com/'
                    ></CustomButton>
                 </div>
                </div>    
              </div>
          </div>}
          
          {isMobile && <div className='flex flex-col'>
            <div className='flex justify-center mt-start'>
              <MiniTitle
                  SubTitleContent="우리야는 어떻게 신청해요?"
                  TitleContent="지금 바로 우리가 원하는/ 제휴처를 만나 Win-Win해요"
              ></MiniTitle>
            </div>
            <div className='flex justify-center'>
                <div className='borderRadius32 backgroundLinearGradient color-Box mt-20'>
                  <div className='flex flex-col'>
                      <div className='flex gap-1 justify-center mt-15'>
                              <Image
                                src="/logo.svg"
                                width={remToPixels(3)}
                                height={remToPixels(3)}
                                alt="Wooriya logo"
                                priority
                              />
                              <Image
                                src="/wooriya.svg"
                                width={remToPixels(15)}
                                height={remToPixels(15)}
                                alt="wooriya letters"
                                priority
                              />
                            </div>
                            <div className='color-coolgray-cg-100 text-center mt-10 text-2xl'>모집 기간</div>
                            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>07.28(월)~08.07(월)까지</div>
                            <div className='color-coolgray-cg-00 text-center text-4xl  mt-2'>사전혜택을 받을 수 있습니다.</div>

                            <div className='color-coolgray-cg-100 text-center mt-10 text-2xl'>모집 대상</div>
                            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>10인이상 활동 단체</div>
                            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>(동아리, 동호회, 협회 등)</div>

                            <div className='color-coolgray-cg-100 text-center mt-10 text-2xl'>제휴처 연락 시기</div>
                            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>8월말 개별 연락</div>
                      </div>

                    <div className='flex justify-center mt-20'>
                      <CustomButton
                        ButtonStyle='border-radius-64 background-coolgray-800 flex justify-center black_button_container'
                        FontStyle='color-coolgray-cg-00 text-center text-3xl'
                        ButtonContent='바로 신청하기'
                        href='https://www.wooriya.com/'
                      ></CustomButton>
                    </div>

                  </div>
            </div>    
        </div>}
        </section>
      )
    }

export default Proposal;
