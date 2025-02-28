import { Text, Heading } from "../../components";
import React from "react";

export default function ServicesEventsSection() {
  return (
    <>
      {/* services events section */}
      <div className="flex h-[820px] items-center justify-center bg-[url(/images/img_group_250.png)] bg-cover bg-no-repeat py-[88px] md:h-auto md:py-5">
        <div className="container-xs mt-[26px] flex md:px-5">
          <div className="flex w-[54%] flex-col items-start justify-center gap-4 rounded-[20px] bg-gray-100 px-[34px] py-[42px] md:w-full md:py-5 sm:p-5">
            <Heading size="headingxs" as="h2" className="text-[24px] font-semibold md:text-[22px]">
              THE YEAR OF MY GREATNESS
            </Heading>
            <Text size="textmd" as="p" className="text-[20px] font-normal !text-charcoal">
              Sunday Service January 19th, 2025.
            </Text>
            <div className="flex flex-col items-center gap-[46px] self-stretch">
              <Text size="textmd" as="p" className="w-full text-[20px] font-normal leading-6 !text-gray-600_01">
                <span className="text-gray-600_01">
                  <>
                    And there shall come forth a rod of out of the stem of Jesse and a branch shall grow out of his
                    roots: And the Spirit of the Lord shall rest upon him, the spirit of wisdom and understanding in the
                    fear of the LORD: and he shall not judge after the sight of his eyes, neither reprove after the
                    hearing of his ears.
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-gray-900_02">Isaiah 11:1-3</span>
              </Text>
              <Text size="textmd" as="p" className="text-[20px] font-normal leading-6 !text-gray-900_02">
                <span className="text-gray-700_01">Pastor’s Phone:</span>
                <span className="text-gray-900_02">
                  <>
                    {" "}
                    317-418-7388
                    <br />
                  </>
                </span>
                <span className="text-gray-700_01">Pastor (Mrs) Phone:</span>
                <span className="text-gray-900_02">
                  <>
                    &nbsp; 317-833-2186
                    <br />
                    <br />
                  </>
                </span>
                <span className="text-gray-700_01">General Overseer</span>
                <span className="text-gray-900_02">
                  <>
                    {" "}
                    Pastor E.A Adeboye
                    <br />
                  </>
                </span>
                <span className="text-gray-700_01">
                  <>
                    <br />
                    Chairman RCCGNA
                  </>
                </span>
                <span className="text-gray-900_02">
                  <>
                    &nbsp; Pastor J. Fadel
                    <br />
                  </>
                </span>
                <span className="text-gray-700_01">
                  <>
                    <br />
                    Host Ministers Pastor J.K. Balogun,
                    <br /> Pastor F.O. Balogun &nbsp;
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
