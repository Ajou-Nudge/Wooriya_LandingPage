import Title from '@/components/Title'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React from 'react'

const Proposal = () => {
  return (
    <section className='section_container flex'>
      <div className='flex-1 mt-80 ml-80'>
        <Title
          SubTitleContent="우리야는 어떻게 신청해요?"
          TitleContent="지금 바로/ 우리가 원하는/ 제휴처를 만나/ Win-Win해요"
        ></Title>
      </div>
  
      <div className='borderRadius32 backgroundLinearGradient color-Box mt-30 mr-80'>
        {/* Left Column */}
        <div className='p-4 lg:justify-end lg:items-start'>
          <div>
            <div className='flex justify-center gap-1 mt-15'>
              <Image
                src="/logo.svg"
                width={60}
                height={60}
                alt="Wooriya logo"
              />
              <Image
                src="/wooriya.svg"
                width={300}
                height={300}
                alt="wooriya letters"
              />
            </div>
   
            <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>모집 기간</div>
            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>07.28(월)~08.07(월)까지</div>
            <div className='color-coolgray-cg-00 text-center text-4xl  mt-2'>사전혜택을 받을 수 있습니다.</div>

            <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>모집 대상</div>
            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>10인이상 활동 단체</div>
            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>(동아리, 동호회, 협회 등)</div>

            <div className='color-coolgray-cg-100 text-center mt-10 text-1xl'>제휴처 연락 시기</div>
            <div className='color-coolgray-cg-00 text-center text-4xl mt-2'>8월말 개별 연락</div>
          </div>
        </div>

        {/* Right Column */}
        <div className='items-center p-4 flex justify-center mt-10'>
          <CustomButton
            ButtonStyle='border-radius-64 background-coolgray-800 flex justify-center button_container'
            FontStyle='color-coolgray-cg-00 text-center text-2xl'
            ButtonContent='바로 신청하기'
            href='https://www.wooriya.com/'
          ></CustomButton>
        </div>
      </div>
    </section>
  )
}

export default Proposal;
