"use client";

import { Button, Text, Heading } from "../components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserProfileImage from "../components/UserProfileImage";
import AboutUsSection from "./components/AboutUsSection";
import CommunityHighlightsSection from "./components/CommunityHighlightsSection";
import HomeWelcomeSection from "./components/HomeWelcomeSection";
import ServiceTimesSection from "./components/ServiceTimesSection";
import UpcomingEventsSection from "./components/UpcomingEventsSection";
import WeddingInvitationSection from "./components/WeddingInvitationSection";
import WorshipInvitationSection from "./components/WorshipInvitationSection";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center bg-white_color">
      <div className="h-[1024px] self-stretch bg-[url(/images/img_group_5.png)] bg-cover bg-no-repeat md:h-auto">
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
      <div className="container-xs mt-[252px] sm:mt-[152px] flex flex-col items-center px-14 md:px-5">
        <div className="flex w-[74%] flex-col items-center gap-[62px] md:w-full sm:gap-[31px]">
          <div className="mx-9 flex flex-col items-center gap-[22px] self-stretch md:mx-0">
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
              witness their journey as they say “I do.”
            </Text>
          </div>
          <div className="flex gap-8 self-stretch md:flex-col">
            <UserProfileImage />
            <UserProfileImage userImage="img_dsc_9587.png" />
          </div>
          <Button
            color="gray_400"
            size="xs"
            variant="outline"
            shape="round"
            className="min-w-[196px] rounded-[12px] !border px-[31px] !text-gray-800 sm:px-5"
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
      <Footer className="mt-[274px] self-stretch" />
    </div>
  );
}
