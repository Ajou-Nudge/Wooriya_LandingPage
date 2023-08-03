import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface CardProps {
  ImageName: string;
  CardContent: string;
  CardContentBold: string;
  CardStyle?: React.CSSProperties;
  index?: number;
}

const classNameFromStyle = (index: number) => {
  return index % 2 === 0 ? 'mt-10' : 'mt-2';
};

const Card: React.FC<CardProps> = ({
  ImageName,
  CardContent,
  CardContentBold,
  CardStyle,
  index = 0,
}) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });

  const renderCardImage = () => {
    if (isDesktop) {
      return (
        <motion.div
          whileHover={{ y: "-4rem", scale: 1.2 }}
          transition={{ duration: 0.3 }}
          className='cardImage'
        >
          <Image
            src={`/${ImageName}`}
            fill
            alt={`/Wooriya ${ImageName}`}
            priority
          />
        </motion.div>
      );
    } else {
      return (
        <div className='cardImage'>
          <Image
            src={`/${ImageName}`}
            fill
            alt={`/Wooriya ${ImageName}`}
            priority
          />
        </div>
      );
    }
  };

  return (
    <div
      className={`rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-col items-center justify-center card_container ${classNameFromStyle(index)}`}
      style={CardStyle}
    >
      {renderCardImage()}
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
