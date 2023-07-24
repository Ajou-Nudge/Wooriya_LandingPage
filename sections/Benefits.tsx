// Benefit 컴포넌트 코드
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';
import React from 'react';

const Benefit: React.FC = () => {
  const cards = [
    { ImageName: 'greenMoney.svg', CardContent: '큰 코민 없는/ 확실한 장비, 공간' },
    { ImageName: 'gold.svg', CardContent: '더 모일수록 커지는/ 파격할인 혜택' },
    { ImageName: 'fire.svg', CardContent: '안전하게 보장된/ 우선 예약' },
    { ImageName: 'redMark.svg', CardContent: '어디서 모이든/ 우리 모임 주변 위치' },
    { ImageName: 'squres.svg', CardContent: '무엇을 하든/ 다양한 분야 제휴' },
    { ImageName: 'bluePeople.svg', CardContent: '빠짐없이/ 모두가 누리는 혜택' },
  ];

  return (
    <section className='section_container bg-coolgray-cg-20' aria-braillelabelid='benefit' id="benefit-section">
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
            CardStyle={{ marginTop: index % 2 === 0 ? '1rem' : '5rem' }} // 지그재그 배치를 위한 marginTop 값 설정
          />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <CustomButton
          ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
          FontStyle='text-primary text-center text-2xl'
          ButtonContent='다양한 혜택들 받기'
          href='https://www.wooriya.com/'
        />
      </div>
    </section>
  )
}

export default Benefit;
