import { Button, Text } from "../../components";
import React from "react";

export default function GetInvolvedSection1() {
  return (
    <>
      {/* get involved section */}
      <div className="mt-[152px] flex justify-center md:mt-20 sm:mt-14">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex h-[630px] flex-1 items-center justify-center rounded-[20px] bg-[url(/images/img_verse_630x738.png)] bg-cover bg-no-repeat px-14 py-[200px] md:h-auto md:w-full md:self-stretch md:px-8 md:py-10 sm:px-5">
            <div className="flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-9 py-10 md:w-[85%] sm:w-full sm:px-5 sm:py-6">
              <Text
                size="textmd"
                as="p"
                className="w-full text-[20px] font-normal leading-6 !text-charcoal lg:text-[18px] md:text-[16px]"
              >
                <span className="text-gray-600_01">
                  <>
                    "Each of you should give what you
                    <br />
                    have decided in your heart to give,
                    <br />
                    not reluctantly or under compulsion,
                    <br />
                    for God loves a cheerful giver."
                    <br />
                  </>
                </span>
                <span className="text-charcoal">
                  <>
                    <br />
                  </>
                </span>
                <span className="font-medium text-charcoal">
                  — 2 Corinthians 9:7 (NIV)
                </span>
              </Text>
            </div>
          </div>
          <div className="flex w-[42%] flex-col items-center gap-[30px] pl-14 pr-16 lg:pl-10 lg:pr-10 md:w-full md:px-5 md:pt-8">
            <Text
              size="text2xl"
              as="p"
              className="self-stretch text-center text-[40px] font-normal leading-[100%] !text-charcoal lg:text-[36px] md:text-[32px] sm:text-[28px]"
            >
              Help the <br /> church grow
            </Text>
            <Text
              as="p"
              className="text-center text-[16px] font-normal leading-[19px] !text-gray-600_01"
            >
              <>
                Giving is an act of worship and a way to make a<br />
                difference in our community.
              </>
            </Text>
            <Button
              size="xs"
              shape="round"
              className="min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] md:mr-0 sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              Give today
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
