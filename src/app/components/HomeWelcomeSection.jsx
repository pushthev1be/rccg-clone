import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function HomeWelcomeSection() {
  return (
    <>
      {/* home welcome section */}
      <div className="flex justify-center">
        <div className="container-xs flex items-start justify-center gap-9 md:flex-col md:px-5">
          <div className="mb-[186px] flex flex-1 flex-col items-start gap-14 md:self-stretch sm:gap-7">
            <div className="flex flex-col items-start gap-5 self-stretch">
              <Heading
                size="headingxl"
                as="h1"
                className="text-[96px] font-semibold leading-[100%] !text-white_color md:text-[48px]"
              >
                <>
                  Welcome to the
                  <br />
                  Redeemed Christian
                  <br />
                  Church of God.
                </>
              </Heading>
              <Text size="textlg" as="p" className="text-[24px] font-normal md:text-[22px]">
                Rod Of God Parish, Indianapolis Indiana USA.
              </Text>
            </div>
            <Button
              color="gray_400"
              size="xs"
              variant="outline"
              shape="round"
              className="min-w-[196px] rounded-[12px] !border px-[33px] sm:px-5"
            >
              Learn more
            </Button>
          </div>
          <div className="flex w-[24%] flex-col gap-4 self-end rounded-[12px] bg-gray-900_01 p-[18px] md:w-full">
            <div className="flex flex-col items-start gap-2.5">
              <Text as="p" className="!font-poppins text-[16px] font-normal">
                Jeremiah ch. 12 v 11
              </Text>
              <div className="flex flex-col gap-4 self-stretch">
                <Text
                  size="textxs"
                  as="p"
                  className="!font-poppins text-[14px] font-normal leading-[100%] !text-gray-700_01"
                >
                  <>
                    Lörem ipsum kror bena minylig: vägt.
                    <br />
                    Pere so vis jiren inte rin. Terangen por.
                    <br />
                    Didadat epp nusm. Minde dilase.{" "}
                  </>
                </Text>
                <Text
                  size="textxs"
                  as="p"
                  className="!font-poppins text-[14px] font-normal leading-[100%] !text-gray-700_01"
                >
                  <>
                    Lörem ipsum kror bena minylig: vägt.
                    <br />
                    Pere so vis jiren inte rin. Terangen por.
                    <br />
                    Didadat epp nusm. Minde dilase.{" "}
                  </>
                </Text>
              </div>
            </div>
            <div className="mb-1 flex items-center justify-end">
              <Img src="img_media_pause.svg" width={16} height={16} alt="Mediapause" className="h-[16px]" />
              <div className="flex w-[28%] justify-center gap-1.5">
                <div className="h-[10px] w-[10px] rounded bg-blue-a400" />
                <div className="h-[10px] w-[10px] rounded bg-gray-700_7f" />
                <div className="h-[10px] w-[10px] rounded bg-gray-700_7f" />
                <div className="h-[10px] w-[10px] rounded bg-gray-700_7f" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
