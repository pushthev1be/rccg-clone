import { Img, Text, Heading } from "../../components";
import React from "react";

export default function WelcomeSection() {
  return (
    <>
      {/* welcome section */}
      <div className="flex items-center bg-gray-900_02 px-14 py-16 md:flex-col md:p-5">
        <div className="mb-[132px] flex flex-1 flex-col items-start gap-5 self-end md:self-stretch">
          <Heading
            size="headinglg"
            as="h1"
            className="text-[64px] font-semibold leading-[100%] !text-white_color md:text-[48px]"
          >
            <>
              Welcome to the
              <br />
              Rod of God Parish
              <br />
              Service Itenarary.
            </>
          </Heading>
          <Text size="textlg" as="p" className="text-[24px] font-normal md:text-[22px]">
            At RCCG Rod of God Parish, we accept everyone.
          </Text>
        </div>
        <Img
          src="img_pexels_jibarofoto_2014773.png"
          width={628}
          height={516}
          alt="Pexels"
          className="mb-6 h-[516px] w-[46%] rounded-[20px] object-contain md:w-full"
        />
      </div>
    </>
  );
}
