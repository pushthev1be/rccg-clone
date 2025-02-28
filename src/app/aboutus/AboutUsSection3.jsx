import { Img, Text, Heading } from "../../components";
import React from "react";

export default function AboutUsSection3() {
  return (
    <>
      {/* about us section */}
      <div className="mt-[464px] flex flex-col items-center gap-[182px] md:gap-[136px] sm:gap-[91px]">
        <div className="container-xs flex flex-col items-center px-14 md:px-5">
          <div className="flex w-[66%] flex-col items-center gap-[22px] md:w-full">
            <Heading as="h2" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
              THE NEXT GEN MINISTRY
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%] !text-charcoal"
            >
              Join us as we celebrate the beginning of forever. With love in their hearts and joy to share, Nina and
              Chris invite you to witness their journey as they say “I do.”
            </Text>
          </div>
        </div>
        <Img
          src="img_bddd6da0_297a.png"
          width={1440}
          height={1052}
          alt="Bddd6da0297a"
          className="h-[1052px] w-full object-cover md:h-auto"
        />
      </div>
    </>
  );
}
