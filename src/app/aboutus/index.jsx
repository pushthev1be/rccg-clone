"use client";

import { Text, Img, Slider, Button, Heading } from "../../components";
import Header from "../../components/Header";
import UserProfileImage from "../../components/UserProfileImage";
import AboutUsSection from "./AboutUsSection";
import AboutUsSection1 from "./AboutUsSection1";
import AboutUsSection2 from "./AboutUsSection2";
import AboutUsSection3 from "./AboutUsSection3";
import AboutUsSection4 from "./AboutUsSection4";
import Link from "next/link";
import React from "react";

export default function AboutUsPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef(null);

  return (
    <div className="w-full bg-white_color">
      <Header className="bg-white_color" />
      <div>
        {/* about us section */}
        <AboutUsSection />

        {/* about us section */}
        <AboutUsSection1 />

        {/* about us section */}
        <AboutUsSection2 />
        <div className="mt-[254px] flex flex-col gap-[174px] md:gap-[130px] sm:gap-[87px]">
          <div className="container-xs flex flex-col items-center px-14 md:px-5">
            <div className="flex w-[74%] flex-col gap-[62px] md:w-full sm:gap-[31px]">
              <div className="mx-9 flex flex-col items-center gap-[22px] md:mx-0">
                <Heading as="h2" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
                  Our Ministers
                </Heading>
                <Text
                  as="p"
                  className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%] !text-charcoal"
                >
                  Join us as we celebrate the beginning of forever. With love in their hearts and joy to share, Nina and
                  Chris invite you to witness their journey as they say “I do.”
                </Text>
              </div>
              <div className="flex gap-8 md:flex-col">
                <UserProfileImage userImage="img_dsc_5797.png" />
                <UserProfileImage userImage="img_dsc_9587.png" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-44 md:gap-[132px] sm:gap-[88px]">
            <div className="flex flex-col gap-16 sm:gap-8">
              <div className="container-xs md:px-5">
                <div className="flex items-start justify-center sm:flex-col">
                  <Heading as="h3" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
                    Head Church Ministers
                  </Heading>
                  <div className="mt-2 flex flex-1 justify-end gap-4 self-end sm:self-stretch">
                    <Button
                      onClick={() => {
                        sliderRef2?.current?.slidePrev();
                      }}
                      shape="circle"
                      className="w-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px]"
                    >
                      <Img src="img_arrow_left.svg" width={24} height={24} />
                    </Button>
                    <Button
                      onClick={() => {
                        sliderRef2?.current?.slideNext();
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
                  activeIndex={sliderState2}
                  onSlideChanged={(e) => {
                    setSliderState2(e?.item);
                  }}
                  ref={sliderRef2}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex md:flex-col">
                        <div className="flex flex-1 gap-[30px] md:flex-col md:self-stretch md:px-5">
                          <div className="flex w-[16%] gap-[30px] md:w-full md:flex-col">
                            <div className="flex w-full justify-between gap-5 md:flex-col">
                              <Img
                                src="img_dsc_9310.png"
                                width={350}
                                height={398}
                                alt="Dsc9310"
                                className="h-[398px] w-full rounded-[16px] object-cover"
                              />
                              <Img
                                src="img_dsc_9348.png"
                                width={350}
                                height={398}
                                alt="Dsc9348"
                                className="h-[398px] w-full rounded-[16px] object-cover"
                              />
                            </div>
                            <div className="w-full">
                              <Img
                                src="img_dsc_9297.png"
                                width={350}
                                height={398}
                                alt="Dsc9297"
                                className="h-[398px] w-full rounded-[16px] object-cover md:h-auto"
                              />
                            </div>
                            <div className="w-full">
                              <Img
                                src="img_dsc_9242.png"
                                width={350}
                                height={398}
                                alt="Dsc9242"
                                className="h-[398px] w-full rounded-[16px] object-cover md:h-auto"
                              />
                            </div>
                          </div>
                          <Img
                            src="img_dsc_9206.png"
                            width={350}
                            height={398}
                            alt="Dsc9206"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9251.png"
                            width={350}
                            height={398}
                            alt="Dsc9251"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9350.png"
                            width={350}
                            height={398}
                            alt="Dsc9350"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9348.png"
                            width={350}
                            height={398}
                            alt="Dsc9348"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9341.png"
                            width={350}
                            height={398}
                            alt="Dsc9341"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9322.png"
                            width={350}
                            height={398}
                            alt="Dsc9322"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9284.png"
                            width={350}
                            height={398}
                            alt="Dsc9284"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9277.png"
                            width={350}
                            height={398}
                            alt="Dsc9277"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9268.png"
                            width={350}
                            height={398}
                            alt="Dsc9268"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9256.png"
                            width={350}
                            height={398}
                            alt="Dsc9256"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9245.png"
                            width={350}
                            height={398}
                            alt="Dsc9245"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9408.png"
                            width={350}
                            height={398}
                            alt="Dsc9408"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9293.png"
                            width={350}
                            height={398}
                            alt="Dsc9293"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                          <Img
                            src="img_dsc_9350_398x350.png"
                            width={350}
                            height={398}
                            alt="Dsc9350"
                            className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                          />
                        </div>
                        <Img
                          src="img_dsc_9340.png"
                          width={350}
                          height={398}
                          alt="Dsc9340"
                          className="h-[398px] w-[5%] rounded-[16px] object-contain md:w-full"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-16 sm:gap-8">
              <div className="container-xs md:px-5">
                <div className="flex items-start justify-center sm:flex-col">
                  <Heading as="h4" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
                    Next Gen Ministers
                  </Heading>
                  <div className="mt-2 flex flex-1 justify-end gap-4 self-end pl-14 pr-[126px] md:px-5 sm:self-stretch">
                    <Button
                      shape="circle"
                      className="w-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px]"
                    >
                      <Img src="img_arrow_left.svg" width={24} height={24} />
                    </Button>
                    <Button
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
                  activeIndex={sliderState1}
                  onSlideChanged={(e) => {
                    setSliderState1(e?.item);
                  }}
                  ref={sliderRef1}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex md:flex-col">
                        <div className="w-[5%] md:w-full md:px-5">
                          <Img
                            src="img_dsc_9396.png"
                            width={370}
                            height={422}
                            alt="Dsc9396"
                            className="h-[422px] w-full rounded-[16px] object-cover md:h-auto"
                          />
                        </div>
                        <div className="ml-2 w-[5%] md:ml-0 md:w-full md:px-5">
                          <Img
                            src="img_dsc_9388.png"
                            width={370}
                            height={422}
                            alt="Dsc9388"
                            className="ml-2 h-[422px] w-full rounded-[16px] object-cover md:ml-0 md:h-auto"
                          />
                        </div>
                        <div className="ml-2 w-[5%] md:ml-0 md:w-full md:px-5">
                          <Img
                            src="img_dsc_9374.png"
                            width={370}
                            height={422}
                            alt="Dsc9374"
                            className="ml-2 h-[422px] w-full rounded-[16px] object-cover md:ml-0 md:h-auto"
                          />
                        </div>
                        <Img
                          src="img_dsc_9404.png"
                          width={370}
                          height={422}
                          alt="Dsc9404"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9420.png"
                          width={370}
                          height={422}
                          alt="Dsc9420"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9495.png"
                          width={370}
                          height={422}
                          alt="Dsc9495"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9511.png"
                          width={370}
                          height={422}
                          alt="Dsc9511"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col gap-16 sm:gap-8">
              <div className="container-xs md:px-5">
                <div className="flex items-start justify-center md:flex-col">
                  <Heading as="h5" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
                    Our Head of Departments
                  </Heading>
                  <div className="mt-1 flex flex-1 justify-end gap-4 self-end md:self-stretch">
                    <Button
                      shape="circle"
                      onClick={() => {
                        sliderRef1?.current?.slidePrev();
                      }}
                      className="w-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px]"
                    >
                      <Img src="img_arrow_left.svg" width={24} height={24} />
                    </Button>
                    <Button
                      shape="circle"
                      onClick={() => {
                        sliderRef1?.current?.slideNext();
                      }}
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
                      <div className="flex md:flex-col">
                        <div className="w-[5%] md:w-full md:px-5">
                          <Img
                            src="img_dsc_9396.png"
                            width={370}
                            height={422}
                            alt="Dsc9396"
                            className="h-[422px] w-full rounded-[16px] object-cover md:h-auto"
                          />
                        </div>
                        <div className="ml-2 w-[5%] md:ml-0 md:w-full md:px-5">
                          <Img
                            src="img_dsc_9388.png"
                            width={370}
                            height={422}
                            alt="Dsc9388"
                            className="ml-2 h-[422px] w-full rounded-[16px] object-cover md:ml-0 md:h-auto"
                          />
                        </div>
                        <div className="ml-2 w-[5%] md:ml-0 md:w-full md:px-5">
                          <Img
                            src="img_dsc_9374.png"
                            width={370}
                            height={422}
                            alt="Dsc9374"
                            className="ml-2 h-[422px] w-full rounded-[16px] object-cover md:ml-0 md:h-auto"
                          />
                        </div>
                        <Img
                          src="img_dsc_9404.png"
                          width={370}
                          height={422}
                          alt="Dsc9404"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9420.png"
                          width={370}
                          height={422}
                          alt="Dsc9420"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9495.png"
                          width={370}
                          height={422}
                          alt="Dsc9495"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                        <Img
                          src="img_dsc_9511.png"
                          width={370}
                          height={422}
                          alt="Dsc9511"
                          className="ml-4 h-[422px] w-[5%] rounded-[16px] object-contain md:ml-0 md:w-full"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* about us section */}
        <AboutUsSection3 />

        {/* about us section */}
        <AboutUsSection4 />
      </div>
      <footer className="mt-[272px] flex items-end justify-center border-t border-dashed border-alternate bg-charcoal p-11 md:p-5">
        <div className="mt-[50px] flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[30%] flex-col gap-8 md:w-full">
            <Text size="textxl" as="p" className="text-[32px] font-normal leading-[38px] md:text-[30px] sm:text-[28px]">
              <>
                RCCG
                <br />
                Rod of God Parish
              </>
            </Text>
            <div className="flex gap-5 sm:flex-col">
              <div className="flex flex-1 items-center gap-1 sm:self-stretch">
                <Text as="p" className="text-[16px] font-normal">
                  INSTAGRAM
                </Text>
                <Img
                  src="img_arrow_arrow_up_right_sm.svg"
                  width={24}
                  height={24}
                  alt="Arrowarrowup"
                  className="h-[24px]"
                />
              </div>
              <div className="flex flex-1 items-center gap-1 sm:self-stretch">
                <Text as="p" className="text-[16px] font-normal">
                  X (TWITTER)
                </Text>
                <Img
                  src="img_arrow_arrow_up_right_sm.svg"
                  width={24}
                  height={24}
                  alt="Arrowarrowup"
                  className="h-[24px]"
                />
              </div>
              <div className="flex items-center gap-1">
                <Text as="p" className="text-[16px] font-normal">
                  YOUTUBE
                </Text>
                <Img
                  src="img_arrow_arrow_up_right_sm.svg"
                  width={24}
                  height={24}
                  alt="Arrowarrowup"
                  className="h-[24px]"
                />
              </div>
            </div>
          </div>
          <div className="flex w-[44%] items-start justify-between gap-5 self-center md:w-full sm:flex-col">
            <div className="flex w-[28%] flex-col items-start gap-3 self-center sm:w-full">
              <Text size="textmd" as="p" className="text-[20px] font-normal !text-alternate">
                LINKS
              </Text>
              <ul className="flex w-[64%] flex-col items-start md:w-full">
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Home
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-2">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      About Us
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-3 w-full leading-[100%]">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Services & Event
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-4 w-full leading-[100%]">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Get Involved
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-[28%] flex-col items-start gap-3 sm:w-full">
              <Text size="textmd" as="p" className="text-[20px] font-normal !text-alternate">
                SHOP
              </Text>
              <ul className="flex flex-col items-start gap-2.5">
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Store
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Popular
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Text size="textmd" as="p" className="text-[20px] font-normal !text-alternate">
                Location
              </Text>
              <ul className="flex flex-col items-start gap-[7px]">
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Rod Of God Parish,
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Indianapolis Indiana USA.
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      5350 Allied Blvd,
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Indianapolis, IN
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
