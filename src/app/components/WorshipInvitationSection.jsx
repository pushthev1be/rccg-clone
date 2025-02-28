import { Text, Button } from "../../components";
import React from "react";

export default function WorshipInvitationSection() {
  return (
    <>
      {/* worship invitation section */}
      <div className="mt-[274px] flex justify-center self-stretch">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex w-[42%] flex-col items-start gap-[30px] pl-[76px] pr-14 md:w-full md:px-5 ">
            <Text
              size="text2xl"
              as="p"
              className="mx-auto text-center text-[40px] font-normal leading-[100%] !text-charcoal md:ml-0 md:text-[38px] sm:text-[36px]"
            >
              <>
                Come worship
                <br />
                with us
              </>
            </Text>
            <Text as="p" className="text-center text-[16px] font-normal leading-[19px] !text-gray-600_01">
              <>
                Come worship with us every Sunday.
                <br />
                We promise you’ll be filled with the holy spirit.
              </>
            </Text>
            <div className="flex gap-3 mb-4 flex-col items-center sm:w-full">
            <Button
              size="xs"
              shape="round"
              className="ml-[74px] min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] md:ml-0 sm:px-5"
            >
              RCCG Live
            </Button>
            <Button
              size="xs"
              shape="round"
              className="ml-[74px] min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[29px] md:ml-0 sm:px-5"
            >
              Next Gen Live
            </Button>
            </div>
          </div>
          <div className="flex h-[630px] flex-1 items-start justify-center rounded-[20px] bg-[url(/images/img_verse.png)] bg-cover bg-no-repeat px-14 py-[194px] md:h-auto md:self-stretch md:p-5">
            <div className="mb-3 flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-[38px] py-[66px] md:w-full md:py-5 sm:p-5">
              <Text size="textmd" as="p" className="w-full text-[20px] font-normal leading-6 !text-charcoal">
                <span className="text-gray-600_01">
                  <>
                    For where two or three gather in my
                    <br />
                    name, there am I with them.”
                    <br />
                  </>
                </span>
                <span className="text-charcoal">
                  <>
                    <br />
                  </>
                </span>
                <span className="font-medium text-charcoal">— Matthew 18:20 (NIV)</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
