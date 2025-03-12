import { Text, Img } from "..";
import React from "react";

export default function SundayServiceInfo({
  serviceTitle = "Sunday Service",
  serviceDescription = "&lt;&gt;Come worship with us every Sunday.&lt;br /&gt;We promise you’ll be filled with the holy spirit.&lt;/&gt;",
  parishHouseText = "Parish House Indianapolis.",
  serviceDayText = "Every Sunday",
  serviceDateText = "10th January 2025",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[32%] md:w-full gap-[138px] px-[18px] py-[42px] md:gap-[103px] md:py-5 sm:gap-[69px] border-gray-300 border border-solid bg-white_color rounded-[16px]`}
    >
      <div className="flex flex-col items-start gap-2 self-stretch">
        <Text
          size="textlg"
          as="p"
          className="text-[24px] font-medium !text-gray-900"
        >
          {serviceTitle}
        </Text>
        <Text
          as="p"
          className="text-[16px] font-normal leading-[19px] !text-gray-600_01"
        >
          {serviceDescription}
        </Text>
      </div>
      <div className="flex flex-col gap-3 self-stretch">
        <div className="flex items-center gap-2">
          <Img
            src="img_navigation_house_03_gray_900_02.svg"
            width={20}
            height={20}
            alt="Image"
            className="h-[20px]"
          />
          <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
            {parishHouseText}
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Img
            src="img_calendar_calendar_gray_900_02.svg"
            width={20}
            height={20}
            alt="Every Sunday"
            className="h-[20px]"
          />
          <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
            {serviceDayText}
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <Img
            src="img_search.svg"
            width={20}
            height={20}
            alt="10th January"
            className="h-[20px]"
          />
          <Text as="p" className="text-[16px] font-normal !text-gray-900_02">
            {serviceDateText}
          </Text>
        </div>
      </div>
    </div>
  );
}
