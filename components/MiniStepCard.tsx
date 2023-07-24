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
    <div className="rounded-lg bg-coolgray-cg-00 custom-box-shadow flex items-center w-[50.5rem] h-[13.25rem] p-[1rem] pb-[0.5rem] ml-0 mt-8">
      <div className="ml-4 mr-4">
        <Image
          src={`/${ImageName}`}
          width={70}
          height={70}
          alt={`/Wooriya ${ImageName}`}
        />
      </div>
      <div className="text-coolgray-cg-800">
        <div className="text-center font-bold text-5xl ml-4">{StepContent}</div>
        <div className="p-4 text-coolgray-cg-700 text-4xl">
          {dividedContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MiniStepCard;