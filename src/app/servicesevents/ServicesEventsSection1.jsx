"use client";

import { Text, Img, Slider, Heading } from "../../components";
import React from "react";

export default function ServicesEventsSection1() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* services events section */}
      <div className="flex flex-col gap-[52px] sm:gap-[26px]">
        <div className="container-xs flex flex-col items-start md:px-5">
          <Heading size="headings" as="h2" className="text-[32px] font-semibold md:text-[30px] sm:text-[28px]">
            Monthly
          </Heading>
        </div>
        <div className="mx-3 flex w-full gap-6 overflow-x-scroll md:mx-0 md:flex-col">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 4 } }}
            paddingLeft={392}
            paddingRight={312}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(18)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="px-3">
                  <div className="flex flex-col justify-center gap-[138px] rounded-[16px] border border-solid border-gray-300 bg-white_color px-[18px] py-[30px] md:gap-[103px] md:px-5 sm:gap-[69px] sm:p-5">
                    <div className="flex flex-col items-start gap-4">
                      <Text
                        size="textlg"
                        as="p"
                        className="text-[24px] font-medium leading-[100%] !text-gray-900 md:text-[22px]"
                      >
                        <>
                          Thanksgiving & Anointing
                          <br />
                          Service
                        </>
                      </Text>
                      <Text as="p" className="text-[16px] font-normal leading-[19px] !text-gray-600_01">
                        <>
                          Come worship with us every Sunday.
                          <br />
                          We promise you’ll be filled with the holy spirit.
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <Img
                          src="img_navigation_house_03_gray_900_02.svg"
                          width={20}
                          height={20}
                          alt="Navigation"
                          className="h-[20px]"
                        />
                        <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
                          Parish House Indianapolis.
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Img
                          src="img_calendar_calendar_gray_900_02.svg"
                          width={20}
                          height={20}
                          alt="Calendar"
                          className="h-[20px]"
                        />
                        <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
                          1st Sunday of the Month
                        </Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <Img src="img_search.svg" width={20} height={20} alt="Search" className="h-[20px]" />
                        <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
                          10:30am – 1:00pm
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
}
