import React from 'react'
import Image from 'next/image'

interface MiniStepCardProps {
  StepContent: string,
  ImageName: string,
  CardContent: string,
}

const MiniStepCard: React.FC<MiniStepCardProps> = ({
  StepContent,
  ImageName,
  CardContent
}) => {
  const dividedContent = CardContent.split('/');

  return (
    <div className="rounded-lg bg-coolgray-cg-00 custom-box-shadow flex items-center Mobile_Step_card_container ml-1 mt-8">
      <div className="ml-4 mr-4 stepImage">
        <Image
          src={`/${ImageName}`}
          width={0}
          height={0}
          alt={`/Wooriya ${ImageName}`}
          className='stepImage'
          priority
        />
      </div>
      <div className="text-coolgray-cg-800">
        <div className="text-center font-bold miniStepfont">{StepContent}</div>
        <div className="text-coolgray-cg-700 Mobile_Step_card_content_font">
          {dividedContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiniStepCard;