import React from 'react'

interface CustomButtonProps {
    ButtonStyle: string,
    FontStyle: string,
    ButtonContent: string,
}

const CustomButton: React.FC<CustomButtonProps> = ({
    ButtonStyle,
    FontStyle,
    ButtonContent
}) => {
  return (
    <div className={`${ButtonStyle}`}>
        <button className={`${FontStyle}`}>{ButtonContent}</button>
    </div>
  )
}

export default CustomButton