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
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 버블링 막기
    window.location.href = href;
  };

  return (
    <div className={ButtonStyle}>
      {/* 버튼 클릭 이벤트 추가 */}
      <button className={FontStyle} onClick={handleButtonClick}>
        {ButtonContent}
      </button>
    </div>
  );
};

export default CustomButton;
