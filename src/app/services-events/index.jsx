import { Button, Img, Switch } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ServicesAndEventsSection from "./ServicesAndEventsSection";
import ServicesEventsSection from "./ServicesEventsSection";
import ServicesEventsSection1 from "./ServicesEventsSection1";
import ServicesEventsSection2 from "./ServicesEventsSection2";
import WelcomeSection from "./WelcomeSection";
import React from "react";

export default function ServicesEventsPage() {
  return (
    <div className="w-full bg-white_color">
      <Header className="bg-white_color" />
      <div>
        <div>
          {/* welcome section */}
          <WelcomeSection />

          {/* services events section */}
          <ServicesEventsSection />
        </div>

        {/* services and events section */}
        <ServicesAndEventsSection />
        <div className="mt-[168px] flex flex-col gap-16 sm:gap-8">
          {/* services events section */}
          <ServicesEventsSection1 />
          <div className="container-xs md:px-5">
            <div className="flex items-center justify-center">
              <Switch value={false} />
              <div className="flex flex-1 justify-end gap-4 px-[30px] sm:px-5">
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
        </div>

        {/* services events section */}
        <ServicesEventsSection2 />
      </div>
      <Footer className="mt-[350px]" />
    </div>
  );
}
