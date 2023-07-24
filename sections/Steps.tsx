import StepCard from '@/components/StepCard'
import Title from '@/components/Title'
import CustomButton from '@/components/CustomButton'
import React from 'react'

const Steps = () => {
  return (
    <section className='flex flex-wrap section_container mr-0 ml-80'>
      {/* Step Cards */}
      <div className='w-full lg:w-1/2 ml-1'>
        <div className='mt-60 mr-0'>
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
  
      {/* Title and Button */}
      <div className='w-1/3 lg:w-1/3 ml-0 mt-80 mr-60 flex-1'>
        <Title
          SubTitleContent="우리야에서 제휴를 맺으려면?"
          TitleContent="단체 등록으로/ 제공되는 우리가 찾던/ 서비스와 혜택"
        />
        <div className="mt-6">
          <CustomButton
            ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
            FontStyle='text-primary text-center text-2xl'
            ButtonContent='다양한 혜택들 받기'
            href='https://www.wooriya.com/'
          />
        </div>
      </div>
    </section>  
  )
}

export default Steps;
