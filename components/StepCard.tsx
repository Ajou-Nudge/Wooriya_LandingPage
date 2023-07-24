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
    <div className="rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-row items-center w-[34.5rem] h-[11.25rem] p-[1rem] pb-[0.5rem]">
      <div className="mr-4">
        <Image
          src={`/${ImageName}`}
          width={100}
          height={100}
          alt={`/Wooriya ${ImageName}`}
        />
      </div>
      <div className="text-coolgray-cg-800">
        <div className="text-center">{StepContent}</div>
        <div className="p-4 text-coolgray-cg-700 text-center">
          {dividedContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepCard;
