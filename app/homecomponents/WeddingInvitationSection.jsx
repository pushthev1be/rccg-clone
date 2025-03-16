import { Text } from "../../components";
import React from "react";

export default function WeddingInvitationSection() {
  return (
    <>
      {/* wedding invitation section */}
      <div className="mt-[46px] flex h-[226px] items-center justify-center self-stretch bg-[url(/images/img_group_193.png)] bg-cover bg-no-repeat py-[84px] md:h-auto md:py-16 sm:py-12">
        <div className="container-xs flex justify-center px-14 md:px-8 sm:px-5">
          <Text
            as="p"
            className="w-[66%] sm:w-[90%] text-center !font-poppins text-[16px] font-light leading-[130%] !text-charcoal md:text-[15px] sm:text-[14px]"
          >
            We are delighted to have you here! At RCCG Parish, we are a family of believers committed to worshiping God, growing in faith, and sharing His love with our community. Whether you're joining us for the first time or looking for a place to call home, we welcome you with open arms. Come experience powerful worship, life-changing teachings, and a community that cares. We look forward to worshiping with you and growing together in Christ!
          </Text>
        </div>
      </div>
    </>
  );
}
