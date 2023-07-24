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
        <div className="text-coolgray-cg-500 text-SubTitle mb-6 flex justify-center">{SubTitleContent}</div>
        <div>
              {dividedContent.map((part, index) => (
                    <p className="text-6xl font-bold mt-2 flex justify-center"key={index}>{part}</p>
              ))}
        </div>
    </div>
  )
}

export default MiniTitle