"use client";

import { Text, Img, Heading, Slider, Button } from "../../components";
import React from "react";

export default function ServicesEventsSection2() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* services events section */}
      <div className="mt-[278px] flex flex-col gap-[72px] md:gap-[54px] sm:gap-9">
        <div className="container-xs md:px-5">
          <div className="flex items-start justify-center sm:flex-col">
            <Heading as="h2" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
              Upcoming events
            </Heading>
            <div className="flex flex-1 justify-end gap-4 self-end sm:self-stretch">
              <Button
                onClick={() => {
                  sliderRef?.current?.slidePrev();
                }}
                shape="circle"
                className="w-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px]"
              >
                <Img src="img_arrow_left.svg" width={24} height={24} />
              </Button>
              <Button
                onClick={() => {
                  sliderRef?.current?.slideNext();
                }}
                shape="circle"
                className="w-[60px] rotate-[-180deg] rounded-[30px] border border-solid border-gray-400 px-[18px]"
              >
                <Img src="img_arrow_left.svg" width={24} height={24} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full overflow-x-scroll">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="flex gap-[18px] md:flex-col">
                  <div className="flex w-full flex-col gap-[30px] md:px-5">
                    <Img
                      src="img_edwin_andrade_4.png"
                      width={808}
                      height={744}
                      alt="Edwinandradefou"
                      className="mr-1.5 h-[744px] object-cover md:mr-0"
                    />
                    <div className="flex flex-col items-start gap-[30px]">
                      <Heading
                        size="headingxs"
                        as="h3"
                        className="text-[24px] font-bold !text-gray-900_02 md:text-[22px]"
                      >
                        Salvation Celebration
                      </Heading>
                      <Text size="textmd" as="p" className="text-[20px] font-normal leading-6 !text-gray-600_01">
                        <>
                          Lörem ipsum prelig trekånar i prenyde. Rektigt nelig osk och vare, emedan tåk. Trollfilt
                          <br />
                          erd i koktiga evås. Du kan vara drabbad.Lörem ipsum prelig trekånar i prenyde. Rektigt
                          <br />
                          nelig osk och vare, emedan tåk. Trollfilt erd i koktiga evås. Du kan vara drabbad.{" "}
                        </>
                      </Text>
                      <div className="flex gap-4 self-stretch sm:flex-col">
                        <div className="flex items-center gap-2">
                          <Img
                            src="img_navigation_house_03.svg"
                            width={24}
                            height={24}
                            alt="Navigation"
                            className="h-[24px]"
                          />
                          <Text size="textmd" as="p" className="text-[20px] font-normal !text-blue-a400">
                            Parish House Indianapolis.
                          </Text>
                        </div>
                        <div className="flex flex-1 items-center gap-2 px-4 sm:self-stretch">
                          <Img
                            src="img_calendar_calendar.svg"
                            width={24}
                            height={24}
                            alt="Calendar"
                            className="h-[24px]"
                          />
                          <Text size="textmd" as="p" className="text-[20px] font-normal !text-blue-a400">
                            10th January 2025
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-[30px] md:px-5">
                    <Img
                      src="img_worshae_bcy9e8uyuhu_unsplash.png"
                      width={808}
                      height={744}
                      alt="Worshae"
                      className="mr-1.5 h-[744px] w-full object-cover md:mr-0 md:h-auto"
                    />
                    <Heading
                      size="headingxs"
                      as="h4"
                      className="text-[24px] font-bold !text-gray-900_02 md:text-[22px]"
                    >
                      Youth Event
                    </Heading>
                    <Text size="textmd" as="p" className="text-[20px] font-normal leading-6 !text-gray-600_01">
                      <>
                        Lörem ipsum prelig trekånar i prenyde. Rektigt nelig osk och vare, emedan tåk. Trollfilt
                        <br />
                        erd i koktiga evås. Du kan vara drabbad.Lörem ipsum prelig trekånar i prenyde. Rektigt
                        <br />
                        nelig osk och vare, emedan tåk. Trollfilt erd i koktiga evås. Du kan vara drabbad.{" "}
                      </>
                    </Text>
                    <div className="flex gap-4 self-stretch sm:flex-col">
                      <div className="flex items-center gap-2">
                        <Img
                          src="img_navigation_house_03.svg"
                          width={24}
                          height={24}
                          alt="Navigation"
                          className="h-[24px]"
                        />
                        <Text size="textmd" as="p" className="text-[20px] font-normal !text-blue-a400">
                          Parish House Indianapolis.
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-2 px-4 sm:self-stretch">
                        <Img
                          src="img_calendar_calendar.svg"
                          width={24}
                          height={24}
                          alt="Calendar"
                          className="h-[24px]"
                        />
                        <Text size="textmd" as="p" className="text-[20px] font-normal !text-blue-a400">
                          16th January 2025
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
