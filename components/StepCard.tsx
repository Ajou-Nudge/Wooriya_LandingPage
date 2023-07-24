import React from 'react'
import Image from 'next/image'

interface StepCardProps{
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
    <div className="rounded-lg bg-coolgray-cg-00 custom-box-shadow flex flex-col items-center justify-center w-[34.5rem] h-[11.25rem] p-[1rem] pb-[0.5rem]">
       <div className='text-coolgray-cg-800 text-center font-bold'>{StepContent}</div>
       <Image
            src={`/${ImageName}`}
            width={100}
            height={100}
            alt={`/Wooriya ${ImageName}`}
       ></Image>
        <div className='p-4 text-coolgray-cg-700 text-center'>
              {dividedContent.map((part, index) => (
                    <p key={index}>{part}</p>
              ))}
        </div>
    </div>
  )
}

export default StepCard