import { Text, Img } from "../../components";
import React from "react";

export default function AboutUsSection2() {
  return (
    <>
      {/* about us section */}
      <div className="relative mt-[146px] h-[630px] content-center md:mt-24 sm:mt-16 md:h-auto">
        <div
          className="container-xs flex justify-start md:px-5 border rounded-lg p-6 mx-auto"
          style={{
            backgroundImage: "url('/images/img_verse.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="top-0 my-auto flex h-max w-[48%] flex-col items-start justify-center gap-4 rounded-[20px] bg-gray-100 px-[34px] py-[60px] md:w-[65%] sm:w-full md:py-10 sm:px-5 sm:py-8">
            <Text
              size="textlg"
              as="p"
              className="text-[24px] font-normal !text-charcoal lg:text-[22px] md:text-[20px] sm:text-[18px]"
            >
              Church history
            </Text>
            <Text
              size="textmd"
              as="p"
              className="text-[15px] font-normal leading-normal !text-gray-600_01 sm:text-[14px]"
            >
              <>
                RCCG Rod of God Parish was established in [2009] as part of the Redeemed Christian Church of God (RCCG) network, a global church with millions of members worldwide. From humble beginnings, God has blessed our church to grow into a thriving community of worshippers, committed to the Great Commission.
                <br /> <br />
                Through prayer, faith, and dedication, we have expanded our ministries, outreach programs, and impact in Indianapolis and beyond. Today, we continue to build on the vision of holiness, evangelism, and community transformation.


              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
