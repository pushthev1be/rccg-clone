import { Img } from "..";
import React from "react";

export default function UserProfileImage({
  userImage = "img_dsc_5797.png",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-[50%] md:w-full`}
    >
      <Img
        src={userImage}
        width={414}
        height={472}
        alt="Dsc5797"
        className="h-[472px] w-full rounded-[20px] object-cover"
      />
    </div>
  );
}
