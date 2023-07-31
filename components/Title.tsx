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
        <div className="text-coolgray-cg-500 SubTitle_font">{SubTitleContent}</div>
        <div>
              {dividedContent.map((part, index) => (
                    <p className="Title_font font-bold"key={index}>{part}</p>
              ))}
        </div>
    </div>
  )
}

export default Title