import { Text, Heading } from "../../components";
import React from "react";

export default function GetInvolvedSection() {
  return (
    <>
      {/* get involved section */}
      <div className="flex h-[670px] items-start justify-center bg-[url(/images/img_group_137.png)] bg-cover bg-no-repeat py-[216px] md:h-auto md:py-5">
        <div className="container-xs mb-[54px] flex justify-center px-14 md:px-5">
          <div className="flex w-[56%] flex-col items-center gap-5 md:w-full">
            <Heading
              size="headinglg"
              as="h1"
              className="text-center text-[64px] font-semibold leading-[100%] !text-white_color md:text-[48px]"
            >
              <>
                Get Involved with the
                <br />
                Rod of God Parish.
              </>
            </Heading>
            <Text size="textlg" as="p" className="text-[24px] font-normal md:text-[22px]">
              At RCCG Rod of God Parish, we accept everyone.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
