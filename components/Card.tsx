// Card.tsx
import React from 'react';
import Image from 'next/image';

interface CardProps {
  ImageName: string;
  CardContent: string;
  CardStyle?: React.CSSProperties;
  index?: number; // index 속성에 물음표(?)를 붙여 기본값이 없어도 오류가 발생하지 않도록 설정
}

const classNameFromStyle = (index: number) => {
  return index % 2 === 0 ? 'mt-10' : 'mt-2';
};

const Card: React.FC<CardProps> = ({
  ImageName,
  CardContent,
  CardStyle,
  index = 0, // index 기본값을 0으로 설정
}) => {
  const dividedContent = CardContent.split('/');

  return (
    <div
      className={`rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-col items-center justify-center card_container ${classNameFromStyle(index)}`}
      style={CardStyle}
    >
      <Image
        src={`/${ImageName}`}
        width={64}
        height={64}
        alt={`/Wooriya ${ImageName}`}
      />
      <div className='text-coolgray-cg-700 text-center mt-2'>
        {dividedContent.map((part, idx) => (
          <p key={idx}>{part}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
