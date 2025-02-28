import { Text, Button } from "../../components";
import React from "react";

export default function GetInvolvedSection2() {
  return (
    <>
      {/* get involved section */}
      <div className="mt-[194px] flex justify-center">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex w-[42%] flex-col items-start gap-[26px] px-[38px] md:w-full sm:px-5">
            <Text
              size="text2xl"
              as="p"
              className="ml-[76px] text-[40px] font-normal !text-charcoal md:ml-0 md:text-[38px] sm:text-[36px]"
            >
              Q&A and Polls
            </Text>
            <Text as="p" className="text-center text-[16px] font-normal leading-[19px] !text-gray-600_01">
              <>
                We take questions from our members anonymously and
                <br />
                answer them as a community to help them grow.
              </>
            </Text>
            <Button
              size="xs"
              shape="round"
              className="ml-28 min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[29px] md:ml-0 sm:px-5"
            >
              Go to the Q&A
            </Button>
          </div>
          <div className="flex h-[630px] flex-1 items-center justify-center rounded-[20px] bg-[url(/images/img_verse_1.png)] bg-cover bg-no-repeat px-14 py-[200px] md:h-auto md:self-stretch md:p-5">
            <div className="flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-[42px] py-[52px] md:w-full md:p-5">
              <Text size="textmd" as="p" className="w-full text-[20px] font-normal leading-6 !text-charcoal">
                <span className="text-gray-600_01">
                  <>
                    “Carry each other’s burdens, and in
                    <br />
                    this way you will fulfill the law of
                    <br />
                    Christ.”
                    <br />
                  </>
                </span>
                <span className="text-charcoal">
                  <>
                    <br />
                  </>
                </span>
                <span className="font-medium text-charcoal">— Galatians 6:2 (NIV)</span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
