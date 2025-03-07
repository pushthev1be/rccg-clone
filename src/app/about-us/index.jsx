"use client";

import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import UserProfileImage from "../../components/UserProfileImage";
import AboutUsSection from "./AboutUsSection";
import AboutUsSection1 from "./AboutUsSection1";
import AboutUsSection2 from "./AboutUsSection2";
import AboutUsSection3 from "./AboutUsSection3";
import AboutUsSection4 from "./AboutUsSection4";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/ImageSlider";

const images = [
  {
    src: "img_dsc_5797.png",
    alt: "Pastor J.K Balogun",
    title: "Pastor J.K Balogun",
    subtitle: "Head Pastor",
  },
  {
    src: "img_dsc_9587.png",
    alt: "Pastor(Mrs) F.O Balogun",
    title: "Pastor(Mrs) F.O Balogun",
    subtitle: "Head Pastor",
  },
  {
    src: "img_dsc_5797.png",
    alt: "Pastor J.K Balogun",
    title: "Pastor J.K Balogun",
    subtitle: "Head Pastor",
  },
  {
    src: "img_dsc_9587.png",
    alt: "Pastor(Mrs) F.O Balogun",
    title: "Pastor(Mrs) F.O Balogun",
    subtitle: "Head Pastor",
  },
];

export default function AboutUsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                <Heading
                  as="h2"
                  className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]"
                >
                  Our Ministers
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
              <div className="flex gap-8 self-stretch md:flex-col">
                <div className="relative group overflow-hidden rounded-lg w-full">
                  <UserProfileImage
                    userImage="img_dsc_5797.png"
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center">
                    <p className="text-[20px] text-white_color font-medium">
                      Pastor J.K Balogun
                    </p>
                    <p className="text-[13.5px] text-white_color">
                      Head Pastor
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg w-full">
                  <UserProfileImage
                    userImage="img_dsc_9587.png"
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center">
                    <p className="text-[20px] text-white_color font-medium">
                      Pastor(Mrs) F.O Balogun
                    </p>
                    <p className="text-[13.5px] text-white_color">
                      Head Pastor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isClient && (
            <div className="flex flex-col gap-44 md:gap-[132px] sm:gap-[88px]">
              <div className="flex flex-col gap-16 sm:gap-8">
                <div className="container-xs md:px-5">
                  <ImageSlider
                    images={images}
                    title={"Head Church Ministers"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-16 sm:gap-8">
                <div className="container-xs md:px-5">
                  <ImageSlider images={images} title={"Next Gen Ministers"} />
                </div>
              </div>
              <div className="flex flex-col gap-16 sm:gap-8">
                <div className="container-xs md:px-5">
                  <ImageSlider
                    images={images}
                    title={"Our Head of Departments"}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* about us section */}
        <AboutUsSection3 />

        {/* about us section */}
        <AboutUsSection4 />
      </div>
      <footer className="mt-[272px] flex items-end justify-center border-t border-dashed border-alternate bg-charcoal p-11 md:p-5">
        <div className="mt-[50px] flex w-[94%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[30%] flex-col gap-8 md:w-full">
            <Text
              size="textxl"
              as="p"
              className="text-[32px] font-normal leading-[38px] md:text-[30px] sm:text-[28px]"
            >
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
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal !text-alternate"
              >
                LINKS
              </Text>
              <ul className="flex w-[64%] flex-col items-start md:w-full">
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Home
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-2">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      About Us
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-3 w-full leading-[100%]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Services & Event
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mt-4 w-full leading-[100%]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Get Involved
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex w-[28%] flex-col items-start gap-3 sm:w-full">
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal !text-alternate"
              >
                SHOP
              </Text>
              <ul className="flex flex-col items-start gap-2.5">
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Store
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Popular
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3">
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal !text-alternate"
              >
                Location
              </Text>
              <ul className="flex flex-col items-start gap-[7px]">
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Rod Of God Parish,
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Indianapolis Indiana USA.
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      5350 Allied Blvd,
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
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
