"use client"
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';
import React,{ useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive"

const Benefit: React.FC = () => {
      const cards = [
      { ImageName: 'greenMoney.svg', CardContent: '큰 코민 없는',CardContentBold: '확실한 장비, 공간' },
      { ImageName: 'gold.svg', CardContent: '더 모일수록 커지는' ,CardContentBold: '파격할인 혜택' },
      { ImageName: 'fire.svg', CardContent: '안전하게 보장된' ,CardContentBold: '우선 예약' },
      { ImageName: 'redMark.svg', CardContent: '어디서 모이든' ,CardContentBold: '우리 모임 주변 위치' },
      { ImageName: 'squres.svg', CardContent: '무엇을 하든',CardContentBold: '다양한 분야 제휴' },
      { ImageName: 'bluePeople.svg', CardContent: '빠짐없이',CardContentBold: '모두가 누리는 혜택' },
      ];
      
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


      return (
      <section className='section_container bg-coolgray-cg-20' id="benefit-section">
            {isPc && <div>            
                  <div className='flex flex-col items-center justify-center'>
                        <div className='text-5xl mt-40 font-bold'>구성원 모두가 누리는</div>
                        <div className='text-5xl mt-2 font-bold'>우리모임에 꼭 필요한 혜택들</div>
                  </div>
                  <div className='flex flex-wrap justify-center mt-10 gap-8'>
                        {cards.map((card, index) => (
                        <Card
                              key={index}
                              ImageName={card.ImageName}
                              CardContent={card.CardContent}
                              CardContentBold={card.CardContentBold}
                              CardStyle={{ marginTop: index % 2 === 0 ? '1rem' : '5rem' }} // 지그재그 배치를 위한 marginTop 값 설정
                        />
                        ))}
                  </div>

                  <div className='flex justify-center mt-10'>
                  <CustomButton
                        ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                        FontStyle='text-primary text-center text-2xl font-bold'
                        ButtonContent='다양한 혜택들 받기'
                        href='https://www.wooriya.com/'
                  />
                  </div>

            </div>
            }

            {isMobile && (<div>
                  <div className='flex flex-col items-center justify-center mt-start'>
                        <div className='text-5xl mt-head font-bold'>구성원 모두가 누리는</div>
                        <div className='text-5xl mt-2 font-bold'>우리모임에 꼭 필요한 혜택들</div>
                  </div>
                  <div className='flex flex-wrap justify-center mt-10 gap-6 font-bold text-4xl'>
                  {cards.map((card, index) => (
                        <Card
                              key={index}
                              ImageName={card.ImageName}
                              CardContent={card.CardContent}
                              CardContentBold={card.CardContentBold}
                              CardStyle={{ marginTop: index < 3 ? '0rem' : '0rem' }}
                        />
                  ))}
                  </div>
                  <div className='flex justify-center mt-10'>
                  <CustomButton
                        ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                        FontStyle='text-primary text-center text-4xl font-bold'
                        ButtonContent='다양한 혜택들 받기'
                        href='https://www.wooriya.com/'
                  />
                  </div>
            </div>)}
           
          
      </section>
      )
}

export default Benefit;

