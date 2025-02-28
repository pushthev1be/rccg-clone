import { Text, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "img_pexels_cottonbro_7520369.png",
  userTitle = "Choir",
  userDescription = "&lt;&gt;Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar&lt;br /&gt;minyn  sugt, an teliga. Lörem ipsum desöhet onde prer sugt,&lt;br /&gt;an teliga. Prement larminyn  sugt, an teliga.&lt;/&gt;",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col gap-8 border-blue_gray-100 border border-solid bg-white_color rounded-[20px]`}
    >
      <Img
        src={userImage}
        width={630}
        height={482}
        alt="Choir"
        className="h-[482px] w-full rounded-tl-[20px] rounded-tr-[20px] object-cover sm:h-auto"
      />
      <div className="mx-8 mb-[38px] flex flex-col items-start gap-0.5 self-stretch sm:mx-0 sm:gap-0.5">
        <Text size="textlg" as="p" className="text-[24px] font-normal !text-charcoal sm:text-[20px]">
          {userTitle}
        </Text>
        <Text size="textmd" as="p" className="text-[20px] font-normal leading-6 !text-gray-600_01 sm:text-[17px]">
          {userDescription}
        </Text>
      </div>
    </div>
  );
}
