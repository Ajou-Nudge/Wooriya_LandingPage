import React from 'react'

interface TitleProps{
    TitleContent: string,
    SubTitleContent: string
}

const Title: React.FC<TitleProps> = ({
    SubTitleContent,
    TitleContent,
}) => {
  const dividedContent = TitleContent.split('/');

  return (
    <div className=''>
        <div className="text-coolgray-cg-500 text-4xl mb-6">{SubTitleContent}</div>
        <div>
              {dividedContent.map((part, index) => (
                    <p className="text-6xl font-bold mt-4"key={index}>{part}</p>
              ))}
        </div>
    </div>
  )
}

export default Title