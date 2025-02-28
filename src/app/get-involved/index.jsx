import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GetInvolvedSection from "./GetInvolvedSection";
import GetInvolvedSection1 from "./GetInvolvedSection1";
import GetInvolvedSection2 from "./GetInvolvedSection2";
import GetInvolvedSection3 from "./GetInvolvedSection3";
import React from "react";

export default function GetInvolvedPage() {
  return (
    <div className="w-full bg-white_color">
      <Header className="bg-white_color" />
      <div>
        {/* get involved section */}
        <GetInvolvedSection />

        {/* get involved section */}
        <GetInvolvedSection1 />

        {/* get involved section */}
        <GetInvolvedSection2 />

        {/* get involved section */}
        <GetInvolvedSection3 />
      </div>
      <Footer />
    </div>
  );
}
