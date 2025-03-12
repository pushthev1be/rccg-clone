"use client";

import { Button, Text, Heading } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserProfileImage from "../components/UserProfileImage";
import AboutUsSection from "./homecomponents/AboutUsSection";
import CommunityHighlightsSection from "./homecomponents/CommunityHighlightsSection";
import HomeWelcomeSection from "./homecomponents/HomeWelcomeSection";
import ServiceTimesSection from "./homecomponents/ServiceTimesSection";
import UpcomingEventsSection from "./homecomponents/UpcomingEventsSection";
import WeddingInvitationSection from "./homecomponents/WeddingInvitationSection";
import WorshipInvitationSection from "./homecomponents/WorshipInvitationSection";
import React, { useEffect } from "react";
import { usePageLoading } from "../hooks/usePageLoading";

export default function Home() {
  // Use the loading hook
  usePageLoading();

  return (
    <div className="flex w-full flex-col items-center bg-white_color">
      <div className="h-fit self-stretch bg-[url(/images/img_group_5.png)] bg-cover bg-no-repeat md:h-auto">
        <div className="mb-[52px] flex flex-col gap-[236px] md:gap-[177px] sm:gap-[118px]">
          <Header />

          {/* home welcome section */}
          <HomeWelcomeSection />
        </div>
      </div>

      {/* wedding invitation section */}
      <WeddingInvitationSection />

      {/* about us section */}
      <AboutUsSection />
      <div className="container-xs mt-[252px] sm:mt-[90px] md:mt-[180px] flex flex-col items-center px-14 md:px-8 sm:px-5">
        <div className="flex w-[74%] flex-col items-center gap-[62px] md:w-full md:gap-[40px] sm:gap-[31px]">
          <div className="mx-9 flex flex-col items-center gap-[22px] self-stretch md:mx-0">
            <Heading
              as="h2"
              className="text-center text-[40px] font-semibold lg:text-[36px] md:text-[32px] sm:text-[28px]"
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
          <div className="flex gap-8 self-stretch md:gap-6 sm:gap-4 md:flex-col">
            <div className="relative group overflow-hidden rounded-lg w-full">
              <UserProfileImage className="w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center">
                <p className="text-[20px] text-white_color font-medium sm:text-[18px]">
                  Pastor J.K Balogun
                </p>
                <p className="text-[13.5px] text-white_color sm:text-[12px]">
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
                <p className="text-[20px] text-white_color font-medium sm:text-[18px]">
                  Pastor(Mrs) F.O Balogun
                </p>
                <p className="text-[13.5px] text-white_color sm:text-[12px]">
                  Head Pastor
                </p>
              </div>
            </div>
          </div>
          <Button
            color="gray_400"
            size="xs"
            variant="outline"
            shape="round"
            className="min-w-[196px] rounded-[12px] !border px-[31px] !text-gray-800 sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
          >
            See more info
          </Button>
        </div>
      </div>

      {/* upcoming events section */}
      <UpcomingEventsSection />

      {/* service times section */}
      <ServiceTimesSection />

      {/* community highlights section */}
      <CommunityHighlightsSection />

      {/* worship invitation section */}
      <WorshipInvitationSection />
      <Footer className="mt-[274px] md:mt-[200px] sm:mt-[150px] self-stretch" />
    </div>
  );
}
