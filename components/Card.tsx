// Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  ImageName: string;
  CardContent: string;
  CardContentBold: string;
  CardStyle?: React.CSSProperties;
  index?: number; // index 속성에 물음표(?)를 붙여 기본값이 없어도 오류가 발생하지 않도록 설정
}

const classNameFromStyle = (index: number) => {
  return index % 2 === 0 ? 'mt-10' : 'mt-2';
};

const Card: React.FC<CardProps> = ({
  ImageName,
  CardContent,
  CardContentBold,
  CardStyle,
  index = 0, // index 기본값을 0으로 설정
}) => {
  return (
    <div
      className={`rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-col items-center justify-center card_container ${classNameFromStyle(index)}`}
      style={CardStyle}
    >
      <div className='cardImage'>
        <Image
          src={`/${ImageName}`}
          fill
          alt={`/Wooriya ${ImageName}`}
          priority
        />
      </div>
      <div className='flex flex-col cardFont'>
        <div className='text-coolgray-cg-700 text-center mt-2'>
          {CardContent}
        </div>
        <div className='text-coolgray-cg-800 text-center mt-2'>
          {CardContentBold}
        </div>
      </div>
    </div>
  );
};

export default Card;
