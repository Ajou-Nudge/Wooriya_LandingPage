"use client"
import Title from '@/components/Title';
import CustomButton from '@/components/CustomButton';
import React, { useState, useEffect } from 'react';
import Foursquare from '@/components/Foursquare';
import { useMediaQuery } from "react-responsive"
import Image from 'next/image';
import MiniTitle from '@/components/MiniTitle';
import AutoScrollContainer1 from '@/components/AutoScrollContainer1';
import AutoScrollContainer2 from '@/components/AutoScrollContainer2';
import AutoScrollContainerPC1 from '@/components/AutoScrollContainerPC1';
import AutoScrollContainerPC2 from '@/components/AutoScrollContainerPC2';

const Provide = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPc, setIsPc] = useState(false);

  const mobile = useMediaQuery({ query: "(max-width: 1200px)" });
  const pc = useMediaQuery({ query: "(min-width:1201px)" })

  useEffect(() => {
    if (mobile) {
      setIsMobile(mobile);
      setIsPc(false);
    }
    if (pc) {
      setIsPc(pc);
      setIsMobile(false);
    }
  }, [mobile, pc])

  return (
    <section className='section_container'>
      {isPc &&
        <div className='flex flex-row h-screen'>
          <div className='flex flex-1 justify-end provid-mr'>
            <div className='flex flex-col justify-center'>
              <Title
                SubTitleContent='우리야가 제공하는 서비스는?'
                TitleContent='우리야는 우리 모임의/ 활동과 특성에 알맞는/ 다양한 업체'
              />
              <div className="ProvidButtonMarginTop">
                <CustomButton
                  ButtonStyle='rounded-md bg-blue-16 flex justify-center button_container'
                  FontStyle='text-primary text-center button_font'
                  ButtonContent='다양한 혜택들 받기'
                  href='https://by1go71xvc6.typeform.com/to/XfhA8AkT'
                />
              </div>
            </div>

          </div>
          <div className='flex-1 foursquare-cardMarginTop'>
            <div className='flex flex-row foursquare-card-gap'>
              <AutoScrollContainerPC1/>
              <AutoScrollContainerPC2/>
            </div>
          </div>
        </div>
      }

      {isMobile &&
        <div className='flex flex-col justify-center h-screen'>
          <div>
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
                href='https://by1go71xvc6.typeform.com/to/XfhA8AkT'
              />
            </div>
          </div>
          <div className='flex flex-col Mobile_Provide_between1 gap-3'>
            <AutoScrollContainer1 />
            <AutoScrollContainer2 />
          </div>
        </div>
      }




    </section>
  );
};

export default Provide;
