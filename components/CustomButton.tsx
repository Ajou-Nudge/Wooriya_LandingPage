'use client'
import React from 'react';

interface CustomButtonProps {
  ButtonStyle: string;
  FontStyle: string;
  ButtonContent: string;
  href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  ButtonStyle,
  FontStyle,
  ButtonContent,
  href
}) => {
  const handleButtonClick = () => {
    window.location.href = href;
  };

  return (
    <div className={`${ButtonStyle}`}>
      {/* 버튼 클릭 이벤트 추가 */}
      <button className={`${FontStyle}`} onClick={handleButtonClick}>
        {ButtonContent}
      </button>
    </div>
  );
};

export default CustomButton;
