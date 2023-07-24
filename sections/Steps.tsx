'use client'
import StepCard from '@/components/StepCard'
import Title from '@/components/Title'
import CustomButton from '@/components/CustomButton'
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "react-responsive"
import MiniStepCard from '@/components/MiniStepCard'
import MiniTitle from '@/components/MiniTitle'

const Steps = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);

  const mobile = useMediaQuery({query: "(max-width: 400px)"});
  const pc = useMediaQuery({query: "(min-width:1080px)"})
  
  useEffect(()=>{
      if(mobile) setIsMobile(mobile);
      if(pc) setIsPc(pc)

      console.log("mobile ", mobile)
      console.log("pc ",pc)
  },[mobile,pc])

  return (
    <section className='flex section_container bg-coolgray-cg-20'>
     {isPc && <div className='flex flex-row section_container mr-0 ml-80'>
          <div className='w-full lg:w-1/2 ml-1'>
            <div className='mt-center mr-0'>
              <StepCard
                StepContent="STEP1. 우리 단체 등록하기"
                ImageName="check-list.svg"
                CardContent="지역, 활동, 인원 등/ 우리 모임을 손쉽게 등록하세요!"
              />
            </div>
            <div className='mt-4 mr-0'>
              <StepCard
                StepContent="STEP2. 원하는 제휴처 선택"
                ImageName="mood-board.svg"
                CardContent="원하는 제휴처의 혜택을 비교해/ 제안된 리스트에서 선택하세요!"
              />
            </div>
            <div className='mt-4 mr-0'>
              <StepCard
                StepContent="STEP3. 빠르고 안전한 체결"
                ImageName="contract.svg"
                CardContent="우리야 전자서명과 관리로/ 필요한 제휴 속 혜택을 잡으세요!"
              />
            </div>
          </div>

          <div className='w-1/2 lg:w-1/2 ml-10 mt-cus mr-80'>
            <Title
              SubTitleContent="우리야에서 제휴를 맺으려면?"
              TitleContent="단체 등록으로/ 제공되는 우리가 찾던/ 서비스와 혜택"
            />
            <div className="mt-8">
              <CustomButton
                ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                FontStyle='text-primary text-center text-2xl font-bold'
                ButtonContent='다양한 혜택들 받기'
                href='https://www.wooriya.com/'
              />
            </div>
        </div>
      </div>}

      {isMobile && <div>
            <div className='mt-20'>
              <MiniTitle
                SubTitleContent="우리야에서 제휴를 맺으려면?"
                TitleContent="단체 등록으로 제공되는/ 우리가 찾던 서비스와 혜택"
              />
            </div>
        
            <div className='flex justify-center mt-20 ml-6'>
              <MiniStepCard
                StepContent="STEP1. 우리 단체 등록하기"
                ImageName="check-list.svg"
                CardContent="지역, 활동, 인원 등/ 우리 모임을 손쉽게 등록하세요!"
              />
            </div>

            <div className='flex justify-center'>
              <MiniStepCard
                StepContent="STEP2. 원하는 제휴처 선택"
                ImageName="mood-board.svg"
                CardContent="원하는 제휴처의 혜택을 비교해/ 제안된 리스트에서 선택하세요!"
              />
            </div>

            <div className='flex justify-center'>
              <MiniStepCard
                StepContent="STEP3. 빠르고 안전한 체결"
                ImageName="contract.svg"
                CardContent="우리야 전자서명과 관리로/ 필요한 제휴 속 혜택을 잡으세요!"
              />
            </div>

            <div className="mt-20 flex justify-center">
              <CustomButton
                ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                FontStyle='text-primary text-center text-4xl font-bold'
                ButtonContent='지금 신청하기'
                href='https://www.wooriya.com/'
              />
            </div>
      </div>}
    </section>  
  )
}

export default Steps;
