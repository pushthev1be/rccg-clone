import { Text } from "../../components";
import React from "react";

export default function AboutUsSection1() {
  return (
    <>
      {/* about us section */}
      <div>
        <div className="flex justify-center bg-gray-900_02 py-[226px] md:py-32 sm:py-20">
          <div className="container-xs flex justify-center px-14 md:px-8 sm:px-5">
            <Text
              size="textlg"
              as="p"
              className="flex-1 text-center !font-poppins  font-normal leading-[130%] lg:text-[22px] md:text-[20px] sm:text-[16px] "
            >
              <span className="text-gray-400">
                RCCG ROG is a Bible-based, evangelistic, Spirit-empowered church.
                <br className="md:hidden" />
                At RCCG ROG, we're all about people, because God is all about people.
                <br />
                <br className="md:hidden" />
                One of the ways we express our love for Him is through our love for people,
                <br className="md:hidden" />
                and we do this by helping people who come to RCCG ROG to grow in their
                <br className="md:hidden" />
                relationship with the Lord.
              </span>
              <br />
              <br />
              Want to get started? We'd love for you to join us for a service, and we're
              <br className="md:hidden" />
              here to help you get connected.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
