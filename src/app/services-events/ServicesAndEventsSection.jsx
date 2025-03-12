"use client";

import { Button, Img, Text, Slider, Heading } from "../../components";
import React from "react";

export default function ServicesAndEventsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* services and events section */}
      <div className="mt-[196px] flex flex-col items-center gap-[74px] md:mt-28 sm:mt-20 md:gap-[55px] sm:gap-[37px]">
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <div className="flex w-[66%] flex-col items-center gap-8 md:w-full">
            <Heading
              as="h2"
              className="text-center text-[40px] font-semibold leading-[100%] lg:text-[36px] md:text-[32px] sm:text-[28px]"
            >
              <>
                Weekly and Monthly
                <br />
                Church Programs
              </>
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%] !text-charcoal"
            >
              Join us as we celebrate the beginning of forever. With love in
              their hearts and joy to share, Nina and Chris invite you to
              witness their journey as they say "I do."
            </Text>
          </div>
        </div>
        <div className="flex w-full flex-col gap-12 self-end md:gap-10 sm:gap-8">
          <div className="container-xs flex flex-col items-start md:px-5">
            <Heading
              size="headings"
              as="h3"
              className="text-[32px] font-semibold lg:text-[30px] md:text-[28px] sm:text-[24px]"
            >
              Weekly
            </Heading>
          </div>
          <div className="mx-auto flex w-full gap-6 overflow-x-hidden md:mx-0 md:flex-col">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                768: { items: 1 },
                1051: { items: 3 },
              }}
              paddingLeft={0}
              paddingRight={0}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full sm:px-0"
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="px-3 md:px-2 sm:px-4">
                    <div className="flex flex-col justify-center gap-[138px] rounded-[16px] border border-solid border-gray-300 bg-white_color px-[18px] py-[42px] md:gap-[103px] md:p-5 sm:gap-[69px] w-full">
                      <div className="flex flex-col items-start gap-2">
                        <Text
                          size="textlg"
                          as="p"
                          className="text-[24px] font-medium !text-gray-900 lg:text-[22px] md:text-[20px] sm:text-[18px]"
                        >
                          Sunday Prayer Meeting
                        </Text>
                        <Text
                          as="p"
                          className="text-[16px] font-normal leading-[19px] !text-gray-600_01"
                        >
                          <>
                            Come worship with us every Sunday.
                            <br />
                            We promise you'll be filled with the holy spirit.
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
                          <Text
                            as="p"
                            className="text-[16px] font-normal !text-gray-900_02"
                          >
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
                          <Text
                            as="p"
                            className="text-[16px] font-normal !text-gray-900_02"
                          >
                            Sundays
                          </Text>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img
                            src="img_search.svg"
                            width={20}
                            height={20}
                            alt="Search"
                            className="h-[20px]"
                          />
                          <Text
                            as="p"
                            className="text-[16px] font-normal !text-gray-900_02"
                          >
                            9am – 9:30am
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
        <div className="container-xs flex items-center justify-between w-full mt-6 md:px-5">
          <Img
            src="img_status.svg"
            width={46}
            height={30}
            alt="Status"
            className="h-[30px] w-[4%] rounded-[50%]"
          />
          <div className="flex gap-4 px-8 sm:px-5">
            <Button
              shape="circle"
              onClick={() => {
                sliderRef?.current?.slidePrev();
              }}
              className="w-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px] hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              <Img src="img_arrow_left.svg" width={24} height={24} />
            </Button>
            <Button
              shape="circle"
              onClick={() => {
                sliderRef?.current?.slideNext();
              }}
              className="w-[60px] rotate-[-180deg] rounded-[30px] border border-solid border-gray-400 px-[18px] hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              <Img src="img_arrow_left.svg" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
