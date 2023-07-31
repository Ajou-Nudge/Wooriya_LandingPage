import React from 'react'

interface MiniTitleProps{
    TitleContent: string,
    SubTitleContent: string
}

const MiniTitle: React.FC<MiniTitleProps> = ({
    SubTitleContent,
    TitleContent,
}) => {
  const dividedContent = TitleContent.split('/');

  return (
    <div>
        <div className="text-coolgray-cg-500 Mobile_MiniTitle_sub mb-2 flex justify-center">{SubTitleContent}</div>
        <div>
              {dividedContent.map((part, index) => (
                    <p className="Mobile_provier_font text-coolgray-cg-800 flex justify-center"key={index}>{part}</p>
              ))}
        </div>
    </div>
  )
}

export default MiniTitle