import { Text, Button } from "../../components";
import React from "react";

export default function WorshipInvitationSection() {
  return (
    <>
      {/* worship invitation section */}
      <div className="mt-[274px] flex justify-center self-stretch md:mt-[200px] sm:mt-[150px]">
        <div className="container-xs flex items-center justify-center md:flex-col md:gap-10 md:px-8 sm:px-5">
          <div className="flex w-[42%] flex-col items-center gap-[30px] md:w-full md:px-5">
            <p className="mx-auto text-center text-[40px] w-full font-normal leading-[110%] !text-charcoal md:ml-0 lg:text-[36px] md:text-[32px] sm:text-[28px]">
              <>
                Come worship
                <br />
                with us
              </>
            </p>
            <p className="text-center text-[16px] sm:text-[14px] font-normal leading-[130%] !text-gray-600_01">
              <>
                Join us as we celebrate the beginning of forever. With love in
                their hearts and joy to share, Nina and Chris invite you to
                witness their journey as they say "I do."
              </>
            </p>
            <Button
              size="xs"
              shape="round"
              className="min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              Next service
            </Button>
            <Button
              size="xs"
              shape="round"
              className="min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[35px] sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              Visit us
            </Button>
          </div>
          <div className="flex h-[630px] flex-1 items-start justify-center rounded-[20px] bg-[url(/images/img_verse.png)] bg-cover bg-no-repeat px-14 py-[194px] md:h-auto md:w-full md:py-16 sm:py-12 sm:px-5">
            <div className="mb-3 flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-[38px] py-[66px] md:w-full md:px-6 md:py-10 sm:py-8 sm:px-5">
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal leading-[130%] !text-charcoal lg:text-[18px] md:text-[16px] sm:text-[15px]"
              >
                <span className="text-gray-600_01">
                  <>
                    For where two or three gather in my
                    <br className="md:hidden" />
                    name, there am I with them."
                    <br />
                  </>
                </span>
                <span className="text-charcoal">
                  <>
                    <br />
                  </>
                </span>
                <span className="font-medium text-charcoal">
                  — Matthew 18:20 (NIV)
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
