"use client";

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

          {/* services events section */}
          <ServicesEventsSection1 />


        {/* services events section */}
        <ServicesEventsSection2 />
      </div>
      <Footer className="mt-[350px]" />
    </div>
  );
}
