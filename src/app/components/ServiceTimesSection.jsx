import { Button, Text, Heading } from "../../components";
import SundayServiceInfo from "../../components/SundayServiceInfo";
import React, { Suspense } from "react";

const eventDetailsList = [
  {
    serviceTitle: "Sunday Service",
    serviceDescription: (
      <>
        Come worship with us every Sunday.
        <br />
        We promise you’ll be filled with the holy spirit.
      </>
    ),
    parishHouseText: "Parish House Indianapolis.",
    serviceDayText: "Every Sunday",
    serviceDateText: "10th January 2025",
  },
  {
    serviceTitle: "Weekly Serice",
    serviceDescription: (
      <>
        Come worship with us every Sunday.
        <br />
        We promise you’ll be filled with the holy spirit.
      </>
    ),
    parishHouseText: "Parish House Indianapolis.",
    serviceDayText: "Every Tuesday",
    serviceDateText: "10th January 2025",
  },
  {
    serviceTitle: "Prayer Service",
    serviceDescription: (
      <>
        Come worship with us every Sunday.
        <br />
        We promise you’ll be filled with the holy spirit.
      </>
    ),
    parishHouseText: "Parish House Indianapolis.",
    serviceDayText: "Fridays & Saturdays",
    serviceDateText: "10th January 2025",
  },
];

export default function ServiceTimesSection() {
  return (
    <>
      {/* service times section */}
      <div className="mt-[290px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col items-center gap-[62px] px-[26px] md:px-5 sm:gap-[31px]">
          <div className="mx-[218px] flex flex-col items-center gap-[22px] self-stretch md:mx-0">
            <Heading as="h2" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
              Our Service times
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%] !text-charcoal"
            >
              Join us as we celebrate the beginning of forever. With love in their hearts and joy to share, Nina and
              Chris invite you to witness their journey as they say “I do.”
            </Text>
          </div>
          <div className="flex gap-6 self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {eventDetailsList.map((d, index) => (
                <SundayServiceInfo {...d} key={"listweekday" + index} />
              ))}
            </Suspense>
          </div>
          <Button
            size="xs"
            shape="round"
            className="min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] sm:px-5"
          >
            See more
          </Button>
        </div>
      </div>
    </>
  );
}
