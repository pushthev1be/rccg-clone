"use client";

import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";
import UserProfileImage from "../../components/UserProfileImage";
import AboutUsSection from "./AboutUsSection";
import AboutUsSection1 from "./AboutUsSection1";
import AboutUsSection2 from "./AboutUsSection2";
import AboutUsSection3 from "./AboutUsSection3";
import AboutUsSection4 from "./AboutUsSection4";
import Footer from "../../components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/ImageSlider";
import { usePageLoading } from "../../hooks/usePageLoading";

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
  usePageLoading();

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

        <div className="mt-[254px] flex flex-col items-center md:mt-32 sm:mt-24">
          <div className="container-xs flex flex-col items-center px-14 md:px-8 sm:px-5">
            <div className="flex w-[74%] flex-col gap-[62px] md:w-full md:gap-[40px] sm:gap-[31px]">
              <div className="mx-9 flex flex-col items-center gap-[22px] md:mx-0">
                <Heading
                  as="h2"
                  className="text-[40px] font-semibold text-center lg:text-[36px] md:text-[32px] sm:text-[28px]"
                >
                  Our Ministers
                </Heading>
                <Text
                  as="p"
                  className="self-stretch text-center !font-poppins text-[16px] font-light leading-[130%] !text-charcoal md:text-[15px] sm:text-[14px]"
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
              <Button
                size="xs"
                shape="round"
                className="self-center min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
              >
                See all ministers
              </Button>
            </div>
          </div>
        </div>

        {/* about us section */}
        <AboutUsSection3 />

        {/* about us section */}
        <AboutUsSection4 />
      </div>

      {/* Footer moved outside and to the end */}
      <Footer className="mt-[100px]" />
    </div>
  );
}
