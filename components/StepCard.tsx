import React from 'react'
import Image from 'next/image'

interface StepCardProps {
  StepContent: string,
  ImageName: string,
  CardContent: string,
}

const StepCard: React.FC<StepCardProps> = ({
  StepContent,
  ImageName,
  CardContent
}) => {
  const dividedContent = CardContent.split('/');

  return (
    <div className="rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-row items-center Step_Card_container">
      <div className="ml-4 mr-4">
        <Image
          src={`/${ImageName}`}
          width={100}
          height={100}
          alt={`/Wooriya ${ImageName}`}
          loading="lazy"
        />
      </div>
      <div className="text-coolgray-cg-800">
        <div className="text-center font-bold text-3xl ml-4">{StepContent}</div>
        <div className="p-4 text-coolgray-cg-700 text-2xl">
          {dividedContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepCard;