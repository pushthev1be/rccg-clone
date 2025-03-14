import { Text, Img } from ".";
import React from "react";

export default function UserProfile({
  className,
  userImage = "img_dsc_9539.png",
  userTitle = "Welfare",
  userDescription,
  ...props
}) {
  return (
    <div
      className={`${className} flex flex-col items-start justify-start gap-[22px] rounded-[20px] border border-solid border-gray-300 bg-white_color overflow-hidden`}
      {...props}
    >
      <Img
        src={userImage}
        alt="Dsc9539"
        width={212}
        height={284}
        className="md:h-[404px] lg:h-[450px] sm:h-[300px] w-full object-cover"
      />
      <div className="flex w-full flex-col items-start gap-3 lg:py-[30px] pr-5 md:py-5 sm:py-5 px-4">
        <Text
          size="textlg"
          as="p"
          className="text-[24px] font-normal !text-charcoal lg:text-[22px] md:text-[20px] sm:text-[18px]"
        >
          {userTitle}
        </Text>
        <Text
          size="textmd"
          as="p"
          className="text-[15px] font-normal leading-normal !text-gray-600_01 sm:text-[14px]"
        >
          {userDescription}
        </Text>
      </div>
    </div>
  );
}
