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

const hcm = [
  {
    src: "img_dsc_9310.png",
    alt: "Pastor Bolanle Sowole",
    title: "Pastor Bolanle Sowole",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9297.png",
    alt: "Sister Omolade Babalola",
    title: "Sister Omolade Babalola",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9242.png",
    alt: "Pastor J.K Balogun",
    title: "Pastor J.K Balogun",
    subtitle: "Head Pastor",
  },
  {
    src: "img_dsc_9206.png",
    alt: "Bro Jide Akinsole",
    title: "Bro Jide Akinsole",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9251.png",
    alt: "Dcn. Emmanuel Onakoya",
    title: "Dcn. Emmanuel Onakoya",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9350.png",
    alt: "Dcn. Goke Fadeyi",
    title: "Dcn. Goke Fadeyi",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9348.png",
    alt: "Dcn. Adekola Omodele",
    title: "Dcn. Adekola Omodele",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9341.png",
    alt: "Pastor J.K Balogun",
    title: "Pastor J.K Balogun",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9322.png",
    alt: "Dcn. Isaac Ademakinwa",
    title: "Dcn. Isaac Ademakinwa",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9284.png",
    alt: "Dcn Bamidele Ojo",
    title: "Dcn Bamidele Ojo",
    subtitle: "Minster",
  },
  {
    src: "img_dsc_9277.png",
    alt: "Dcn. Adeola Tawede",
    title: "Dcn. Adeola Tawede",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9268.png",
    alt: "Dcn. Abel Makanjuola",
    title: "Dcn. Abel Makanjuola",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9256.png",
    alt: "Dr Yemi Ilesanmi",
    title: "Dr Yemi Ilesanmi",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9245.png",
    alt: "Pastor Dare Sylvester",
    title: "Pastor Dare Sylvester",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9408.png",
    alt: "Dr. Ayo Oshinowo",
    title: "Dr. Ayo Oshinowo",
    subtitle: "Minister",
  },
  {
    src: "img_dsc_9293.png",
    alt: "Bro Soji Toriola",
    title: "Bro Soji Toriola",
    subtitle: "Minister",
  },
];

const ngm = [
  {
    src: "img_dsc_9404.png",
    alt: "Segun Oladeji",
    title: "Segun Oladeji",
    subtitle: "Next Gen Minister",
  },
  {
    src: "WhatsApp Image 2025-03-06 at 19.50.11_050ee46d.png",
    alt: "Janet Oluwayomi",
    title: "Janet Oluwayomi",
    subtitle: "HOD Publication",
  },
  {
    src: "WhatsApp Image 2025-03-06 at 19.50.12_313e4a70.png",
    alt: "Temitope Ann Aluko",
    title: "Temitope Ann Aluko",
    subtitle: "HOD Publication",
  },
  {
    src: "WhatsApp Image 2025-03-06 at 19.50.12_6dc5a47c.png",
    alt: "Susanah Amure",
    title: "Susanah Amure",
    subtitle: "HOD Publication",
  },
];

const hod = [
  {
    src: "img_dsc_9396.png",
    alt: "Oladipo Baruwa",
    title: "Oladipo Baruwa",
    subtitle: "HOD Protocol",
  },
  {
    src: "img_dsc_9388.png",
    alt: "Yetunde Ajanaku",
    title: "Yetunde Ajanaku",
    subtitle: "HOD Choir",
  },
  {
    src: "img_dsc_9374.png",
    alt: "Oloyede Amure",
    title: "Oloyede Amure",
    subtitle: "HOD Soccer Team",
  },
  {
    src: "img_dsc_9404.png",
    alt: "Segun Oladeji",
    title: "Segun Oladeji",
    subtitle: "HOD Publication",
  },
  {
    src: "img_dsc_9420.png",
    alt: "David Ayodele",
    title: "David Ayodele",
    subtitle: "HOD Drama",
  },
  {
    src: "img_dsc_9495.png",
    alt: "Pastor(Mrs) F.O Balogun",
    title: "Pastor(Mrs) F.O Balogun",
    subtitle: "HOD Sanctuary",
  },
  {
    src: "img_dsc_9511.png",
    alt: "Bro Ademola Karonwi",
    title: "Bro Ademola Karonwi",
    subtitle: "HOD Children's Dept.",
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
                <div className="relative group overflow-hidden rounded-[15px] w-full cursor-pointer">
                  <UserProfileImage
                    userImage="img_dsc_5797.png"
                    className="w-full"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] flex flex-col items-center justify-center
                    translate-y-full group-hover:translate-y-0
                    sm:translate-y-0
                    transition-transform duration-300 ease-in-out"
                  >
                    <p className="text-[20px] text-white_color font-medium">
                      Pastor J.K Balogun
                    </p>
                    <p className="text-[13.5px] text-white_color">
                      Head Pastor
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-[15px] w-full cursor-pointer">
                  <UserProfileImage
                    userImage="img_dsc_9587.png"
                    className="w-full"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] flex flex-col items-center justify-center
                    translate-y-full group-hover:translate-y-0
                    sm:translate-y-0
                    transition-transform duration-300 ease-in-out"
                  >
                    <p className="text-[20px] text-white_color font-medium">
                      Pastor(Mrs) F.O Balogun
                    </p>
                    <p className="text-[13.5px] text-white_color">
                      Head Pastor
                    </p>
                  </div>
                </div>
              </div>
              {/* <Link href="/about-us">
              <Button
                size="xs"
                shape="round"
                className="self-center min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
              >
                  See all ministers
                </Button>
              </Link> */}
            </div>
          </div>
        </div>

        {isClient && (
          <div className="flex flex-col gap-44 md:gap-[132px] sm:gap-[88px] mt-[100px]">
            <div className="flex flex-col gap-16 sm:gap-8">
              <ImageSlider images={hcm} title={"Head Church Ministers"} />
            </div>
            <div className="flex flex-col gap-16 sm:gap-8">
              <ImageSlider images={ngm} title={"Next Gen Ministers"} />
            </div>
            <div className="flex flex-col gap-16 sm:gap-8">
              <ImageSlider images={hod} title={"Our Head of Departments"} />
            </div>
          </div>
        )}

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
