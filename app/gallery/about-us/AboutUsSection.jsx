import { Text, Heading } from "../../components";
import React, { useEffect, useState } from "react";

export default function AboutUsSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      // Add any other window-related logic here
    }
  }, []);

  return (
    <>
      {/* about us section */}
      <div className="flex h-[670px] items-start justify-center bg-[url(/images/img_group_227.png)] bg-cover bg-no-repeat py-[168px] md:h-auto md:py-5">
        <div className="container-xs mb-[148px] flex justify-center md:px-5">
          <div className="flex w-full flex-col items-start gap-5 lg:px-24 md:px-24 sm:px-5">
            <Heading
              size="headinglg"
              as="h1"
              className="text-[64px] font-semibold leading-[100%] !text-white_color md:text-[48px]"
            >
              <>
                There's a home for
                <br />
                everyone in christ.
              </>
            </Heading>
            <Text
              size="textlg"
              as="p"
              className="text-[24px] font-normal md:text-[22px]"
            >
              At RCCG Rod of God Parish, we accept everyone.
            </Text>
            <p>Current window width: {windowWidth}</p>
          </div>
        </div>
      </div>
    </>
  );
}
