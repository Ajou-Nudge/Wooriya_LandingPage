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
      <div className="stepAllMarginleft stepAllMarginRight">
        <Image
          src={`/${ImageName}`}
          width={100}
          height={100}
          alt={`/Wooriya ${ImageName}`}
          priority
        />
      </div>
      <div className="">
        <div className="stepfontfize text-coolgray-cg-800 font-bold ml-4">{StepContent}</div>
        <div className="p-4 text-coolgray-cg-700 stepContentfontsize">
          {dividedContent.map((part, index) => (
            <p key={index}>{part}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepCard;