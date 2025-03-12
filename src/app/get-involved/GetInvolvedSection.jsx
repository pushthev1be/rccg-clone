import { Text, Heading } from "../../components";
import React from "react";

export default function GetInvolvedSection() {
  return (
    <>
      {/* get involved section */}
      <div className="flex h-[670px] items-start justify-center bg-[url(/images/img_group_227.png)] bg-cover bg-no-repeat py-[168px] md:h-auto md:py-10 sm:py-8">
        <div className="container-xs mb-[148px] flex justify-center md:mb-10 sm:mb-5 md:px-5">
          <div className="flex w-full flex-col items-start gap-5 px-24 lg:px-16 md:px-8 sm:px-4">
            <Heading
              size="headinglg"
              as="h1"
              className="text-[64px] font-semibold leading-[100%] !text-white_color lg:text-[56px] md:text-[48px] sm:text-[40px] xs:text-[32px]"
            >
              <>
                Get involved
                <br />
                with the church
              </>
            </Heading>
            <Text
              size="textlg"
              as="p"
              className="text-[24px] font-normal lg:text-[22px] md:text-[20px] sm:text-[18px]"
            >
              At RCCG Rod of God Parish, we accept everyone.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
