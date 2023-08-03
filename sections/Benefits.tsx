"use client"
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardData {
  ImageName: string;
  CardContent: string;
  CardContentBold: string;
}

const Benefit: React.FC = () => {
  const cards: CardData[] = [
    { ImageName: 'green.webp', CardContent: '큰 고민 없는', CardContentBold: '확실한 장비, 공간' },
    { ImageName: 'realmoney.webp', CardContent: '더 모일수록 커지는', CardContentBold: '파격할인 혜택' },
    { ImageName: 'realfire.webp', CardContent: '안전하게 보장된', CardContentBold: '우선 예약' },
    { ImageName: 'redMark.webp', CardContent: '어디서 모이든', CardContentBold: '우리 모임 주변 위치' },
    { ImageName: 'squres.webp', CardContent: '무엇을 하든', CardContentBold: '다양한 분야 제휴' },
    { ImageName: 'realbluepeople.webp', CardContent: '빠짐없이', CardContentBold: '모두가 누리는 혜택' },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);
  
  const mobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const pc = useMediaQuery({ query: "(min-width:1201px)" })

  const [inViewRef, inView] = useInView({
    triggerOnce: false, // 한 번만 감지하고 그 이후로는 무시
    threshold: 0.5, // 요소가 뷰포트의 25% 이상 노출되면 감지
  });

  useEffect(() => {
    if (mobile) {
      setIsMobile(mobile);
      setIsPc(false);
    }
    if (pc) {
      setIsPc(pc);
      setIsMobile(false);
    }
  }, [mobile, pc])

  return (
    <section className='section_container bg-coolgray-cg-20' id="benefit-section">
      {isPc && <div className='bg-coolgray-cg-20 flex flex-col justify-center h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <div className='BenefitsTextFont font-bold'>구성원 모두가 누리는</div>
          <div className='BenefitsTextFont font-bold'>우리모임에 꼭 필요한 혜택들</div>
        </div>
          <div className='flex justify-center Benefits64 gap-5'>
            {cards.map((card, index) => (
              <motion.div
                key={index}
                ref={inViewRef}
                initial={{ y: 0 }}
                animate={{ y: inView ? index % 2 === 0 ? '-3rem' : '3rem' : 0 }} // 뷰포트 안에 들어오면 y값을 0으로 되돌려 원래 위치로 이동
                transition={{ duration: 0.5, delay: index * 0.1 }} // 애니메이션 지속 시간과 요소들 사이의 지연 시간 설정
              >
                <Card
                  ImageName={card.ImageName}
                  CardContent={card.CardContent}
                  CardContentBold={card.CardContentBold}
                />
              </motion.div>
            ))}
          </div>
        

        <div className='flex justify-center Benefits128'>
          <CustomButton
            ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
            FontStyle='text-primary text-center button_font '
            ButtonContent='다양한 혜택들 받기'
            href='https://www.wooriya.com/'
          />
        </div>

      </div>
      }

      {isMobile && (<div className='flex flex-col items-center Mobile_start_maring h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <div className='Mobile_provier_font mt-head font-bold'>구성원 모두가 누리는</div>
          <div className='Mobile_provier_font mt-2 font-bold'>우리모임에 꼭 필요한 혜택들</div>
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
            FontStyle='text-primary text-center Mobile_button_font'
            ButtonContent='다양한 혜택들 받기'
            href='https://www.wooriya.com/'
          />
        </div>
      </div>)}


    </section>
  )
}

export default Benefit;
