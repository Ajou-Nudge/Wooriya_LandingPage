"use client"
import Title from '@/components/Title';
import CustomButton from '@/components/CustomButton';
import React,{useState, useEffect} from 'react';
import Foursquare from '@/components/Foursquare';
import { useMediaQuery } from "react-responsive"
import MiniTitle from '@/components/MiniTitle';

const Provide = () => {
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
    <div className='section_container' style={{ overflow: 'hidden' }}>
      {isPc && <div>
          <div className='flex ml-80 mr-0'>
            {/* Left column */}
            <div className='flex-1 mt-80 flex'>
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
                  FoursquareImage='/Doctor.svg'
                />
              </div>
              <div className='w-1/2 -mt-25'>
                <Foursquare
                  FoursquareName='장비 대여'
                  FoursquareImage='/Rental.svg'
                />
              </div>

              {/* Second row */}
              <div className='w-1/2'>
                <Foursquare
                  FoursquareName='행사'
                  FoursquareImage='/Festival.svg'
                />
              </div>
              <div className='w-1/2 -mt-30'>
                <Foursquare
                  FoursquareName='공간 대여'
                  FoursquareImage='/SpaceRental.svg'
                />
              </div>

              {/* Third row */}
              <div className='w-1/2 '>
                <Foursquare
                  FoursquareName='코칭'
                  FoursquareImage='/Coaching.svg'
                />
              </div>
              <div className='w-1/2 -mt-30'>
                <Foursquare
                  FoursquareName='강연'
                  FoursquareImage='/Lecture.svg'
                />
              </div>

              {/* Fourth row */}
              <div className='w-1/2'>
                <Foursquare
                  FoursquareName='의료'
                  FoursquareImage='/Doctor.svg'
                />
              </div>
              <div className='w-1/2 -mt-30'>
                <Foursquare
                  FoursquareName='데일리 체험'
                  FoursquareImage='/Experience.svg'
                />
              </div>
          </div>
          </div>
        </div>
      }

      {isMobile &&
      <div>
        <div className='mt-20'>
          <div className='flex justify-center'>
            <MiniTitle
              SubTitleContent='우리야가 제공하는 서비스는?'
              TitleContent='우리야는 우리 모임의/ 활동과 특성에 알맞는'
            />
          </div>
          <p className="text-6xl font-bold mt-2 flex justify-center">다양한 업체</p>
          <div className="mt-6 flex justify-center">
            <CustomButton
              ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
              FontStyle='text-primary text-center text-4xl'
              ButtonContent='우리 모임 확인하기'
              href='https://www.wooriya.com/'
            />
          </div>
        </div>
        <div className='mt-40 gap-5' style={{ overflowX: 'hidden' }}>
          <div className='flex flex-row gap-4' style={{ transform: 'translateX(20px)' }}>
              <Foursquare
                    FoursquareName='의료'
                    FoursquareImage='/Doctor.svg'
              />
              <Foursquare
                    FoursquareName='행사'
                    FoursquareImage='/Festival.svg'
              />
              <Foursquare
                    FoursquareName='코칭'
                    FoursquareImage='/Coaching.svg'
              />
          </div> 
          <div className='flex flex-row gap-4' style={{ transform: 'translateX(-20px)' }}>
              <Foursquare
                    FoursquareName='경연'
                    FoursquareImage='/Lecture.svg'
              />
              <Foursquare
                    FoursquareName= '공간 대여'
                    FoursquareImage='/SpaceRental.svg'
              />
              <Foursquare
                    FoursquareName='데일리 체험'
                    FoursquareImage='/Experience.svg'
              />
          </div> 
        </div>
      </div>
      }
        
      


    </div>
  );
};

export default Provide;
