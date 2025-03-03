import { Text } from "../../components";
import React from "react";

export default function AboutUsSection() {
  return (
    <>
      {/* about us section */}
      <div className="mt-[50px] flex h-[594px] items-end justify-center self-stretch bg-[url(/images/img_group_6.png)] bg-cover bg-no-repeat py-24 md:h-auto md:py-5">
        <div className="container-xs mt-[68px] flex justify-center px-14 md:px-5">
          <div className="flex w-[60%] flex-col items-center gap-2 rounded-[20px] bg-gray-900_02 px-[52px] py-[58px] md:w-full md:p-5">
            <Text size="textlg" as="p" className="!font-poppins text-[24px] font-medium md:text-[22px]">
              About Us
            </Text>
            <div
              className="mb-[18px] self-stretch text-center font-poppins text-[16px] sm:text-[13px] font-normal leading-[100%]"
            >
              <span className="text-gray-400">
                {/* <> */}
                  RCCG ROG is a Bible-based, evangelistic, Spirit-empowered church.
                  <br />
                  At RCCG ROG, we’re all about people, because God is all about people.
                  <br />
                  <br />
                  One of the ways we express our love for Him is through our love for people,
                  <br />
                  and we do this by helping people who come to RCCG ROG to grow in their
                  <br />
                  relationship with the Lord.
                  <br />
                {/* </> */}
              </span>
              <span className="text-white_color">
                <>
                  <br />
                  Want to get started? We’d love for you to join us for a service, and we’re
                  <br />
                  here to help you get connected.
                </>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
