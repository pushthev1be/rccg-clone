import { Text } from "../../components";
import React from "react";

export default function AboutUsSection1() {
  return (
    <>
      {/* about us section */}
      <div>
        <div className="flex justify-center bg-gray-900_02 py-[226px] md:py-5">
          <div className="container-xs flex justify-center px-14 md:px-5">
            <Text
              size="textlg"
              as="p"
              className="flex-1 text-center !font-poppins text-[24px] font-normal leading-[100%] md:text-[22px]"
            >
              <>
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
                <br />
                Want to get started? We’d love for you to join us for a service, and we’re
                <br />
                here to help you get connected.
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
