import Title from '@/components/Title';
import CustomButton from '@/components/CustomButton';
import React from 'react';
import Foursquare from '@/components/Foursquare';

const Provide = () => {
  return (
    <div className='section_container' style={{ overflow: 'hidden' }}>
      <div className='flex ml-80 mr-0'>
        {/* Left column */}
        <div className='flex-1 mt-80'>
          <Title
            SubTitleContent='우리야가 제공하는 서비스는?'
            TitleContent='우리야는 우리 모임의/ 활동과 특성에 알맞는/ 다양한 업체'
          />
          <div className="mt-4">
            <CustomButton
              ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
              FontStyle='text-primary text-center text-2xl'
              ButtonContent='다양한 혜택들 받기'
              href='https://www.wooriya.com/'
            />
          </div>
        </div>

        {/* Right column */}
        <div className='flex-1 flex flex-wrap mr-60 ml-20'>
          {/* First row */}
          <div className='w-1/2 mt-5'>
            <Foursquare
              FoursquareName='의료'
              FoursquareImage='./Doctor.svg'
            />
          </div>
          <div className='w-1/2 -mt-25'>
            <Foursquare
              FoursquareName='장비 대여'
              FoursquareImage='./Rental.svg'
            />
          </div>

          {/* Second row */}
          <div className='w-1/2'>
            <Foursquare
              FoursquareName='행사'
              FoursquareImage='./Festival.svg'
            />
          </div>
          <div className='w-1/2 -mt-30'>
            <Foursquare
              FoursquareName='공간 대여'
              FoursquareImage='./SpaceRental.svg'
            />
          </div>

          {/* Third row */}
          <div className='w-1/2 '>
            <Foursquare
              FoursquareName='코칭'
              FoursquareImage='./Coaching.svg'
            />
          </div>
          <div className='w-1/2 -mt-30'>
            <Foursquare
              FoursquareName='강연'
              FoursquareImage='./Lecture.svg'
            />
          </div>

          {/* Fourth row */}
          <div className='w-1/2'>
            <Foursquare
              FoursquareName='의료'
              FoursquareImage='./Doctor.svg'
            />
          </div>
          <div className='w-1/2 -mt-30'>
            <Foursquare
              FoursquareName='데일리 체험'
              FoursquareImage='./Experience.svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
