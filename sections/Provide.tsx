"use client"
import Title from '@/components/Title';
import CustomButton from '@/components/CustomButton';
import React,{useState, useEffect} from 'react';
import Foursquare from '@/components/Foursquare';
import { useMediaQuery } from "react-responsive"
import Image from 'next/image';
import MiniTitle from '@/components/MiniTitle';

const Provide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);

  const mobile = useMediaQuery({query: "(max-width: 1279px)"});
  const pc = useMediaQuery({query: "(min-width:1280px)"})
  
  useEffect(()=>{
            if(mobile) {
              setIsMobile(mobile);
              setIsPc(false);
            }
            if(pc) {
              setIsPc(pc);
              setIsMobile(false);
            }
  },[mobile,pc])

  return (
    <section className='section_container'>
      {isPc && 
        <div className='flex flex-row'>
          <div className='flex flex-1 justify-end provid-mr'>
                <div className='flex flex-col provide-mt'>
                  <Title
                    SubTitleContent='우리야가 제공하는 서비스는?'
                    TitleContent='우리야는 우리 모임의/ 활동과 특성에 알맞는/ 다양한 업체'
                  />
                  <div className="ProvidButtonMarginTop">
                    <CustomButton
                      ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                      FontStyle='text-primary text-center button_font'
                      ButtonContent='다양한 혜택들 받기'
                      href='https://www.wooriya.com/'
                    />
                  </div>
                </div>
          </div>
        <div className='flex-1 ml-5 foursquare-cardMarginTop'>
              <div className='flex flex-row foursquare-card-gap'>
                    <div className='flex flex-col foursquare-card-gap'>
                        
                        <div className=''>
                          <Foursquare
                            FoursquareName='의료'
                            FoursquareImage='/Doctor.webp'
                          />
                        </div>
                      
                        <div className=''>
                          <Foursquare
                            FoursquareName='행사'
                            FoursquareImage='/Festival.webp'
                          />
                        </div>

                        <div className=' '>
                          <Foursquare
                            FoursquareName='코칭'
                            FoursquareImage='/Coaching.webp'
                          />
                        </div>
                        
                        <div className=''>
                          <Foursquare
                            FoursquareName='의료'
                            FoursquareImage='/Doctor.webp'
                          />
                        </div>
              </div>

              <div className='flex flex-col foursquare-mt foursquare-card-gap'>
                        <div className=''>
                            <div className='foursquare-card'>
                                <div className='image-container rounded-md'>
                                <Image
                                  src="/Rental.webp"
                                  layout='fill'
                                  alt={`Wooriya Rental`}
                                  priority
                                ></Image>
                                </div>
                                <div className='text-container'>
                                  장비 대여
                                </div>
                            </div>
                        </div>

                        <div className=''>
                          <Foursquare
                            FoursquareName='공간 대여'
                            FoursquareImage='/SpaceRental.webp'
                          />
                        </div>
                      
                        <div className=''>
                          <Foursquare
                            FoursquareName='강연'
                            FoursquareImage='/Lecture.webp'
                          />
                        </div>

                        <div className=''>
                          <Foursquare
                            FoursquareName='데일리 체험'
                            FoursquareImage='/Experience.webp'
                          />
                        </div>
                    </div>
                </div>
          </div>
          </div>
   
      }

      {isMobile &&
      <div>
        <div className='mt-start'>
          <div className='flex justify-center'>
            <MiniTitle
              SubTitleContent='우리야가 제공하는 서비스는?'
              TitleContent='우리야는 우리 모임의/ 활동과 특성에 알맞는'
            />
          </div>
          <p className="Mobile_provier_font text-coolgray-cg-800 flex justify-center">다양한 업체</p>
          <div className="mt-6 flex justify-center">
            <CustomButton
              ButtonStyle='rounded-md bg-blue-16 flex justify-center Mobile_Hero_button_container'
              FontStyle='text-primary text-center Mobile_Hero_button_font'
              ButtonContent='우리 모임 확인하기'
              href='https://www.wooriya.com/'
            />
          </div>
        </div>
        <div className='flex flex-col mt-40 gap-3'>
          <div className='flex flex-row justify-center gap-3'>
            <div>
              <Foursquare
                    FoursquareName='의료'
                    FoursquareImage='/Doctor.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName='행사'
                    FoursquareImage='/Festival.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName='코칭'
                    FoursquareImage='/Coaching.webp'
              />
            </div>
          </div> 
          <div className='flex flex-row justify-center gap-3'>
            <div>
              <Foursquare
                    FoursquareName='경연'
                    FoursquareImage='/Lecture.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName= '공간 대여'
                    FoursquareImage='/SpaceRental.webp'
              />
            </div>
            <div>
              <Foursquare
                    FoursquareName='데일리 체험'
                    FoursquareImage='/Experience.webp'
              />
            </div>
          </div> 
        </div>
      </div>
      }
        
      


    </section>
  );
};

export default Provide;
