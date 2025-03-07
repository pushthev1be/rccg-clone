import { Text, Button, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const serviceDepartmentGrid = [
  {
    userImage: "img_dsc_9539.png",
    userTitle: "Welfare",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_pexels_kawerodr.png",
    userTitle: "Ushering",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_dsc_9519.png",
    userTitle: "Sound & Media",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_dsc_9552.png",
    userTitle: "Special Duties",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_dsc_9435.png",
    userTitle: "Children and Media",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_dsc_9221.png",
    userTitle: "Accounting",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_dsc_9484.png",
    userTitle: "Transportation",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
  {
    userImage: "img_kevin_wright_4s_482x630.png",
    userTitle: "Sanctuary Keeper & Beautifiers",
    userDescription: (
      <>
        Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
        <br />
        minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
        <br />
        an teliga. Prement larminyn sugt, an teliga.
      </>
    ),
  },
];

export default function AboutUsSection4() {
  return (
    <>
      {/* about us section */}
      <div className="mt-[468px] flex flex-col items-center">
        <div className="flex w-[88%] flex-col gap-[146px] md:w-full md:gap-[109px] md:px-5 sm:gap-[73px]">
          <div className="mx-[246px] flex flex-col items-center gap-[18px] md:mx-0">
            <Heading as="h2" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
              Our Departments
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%] !text-charcoal"
            >
              Join us as we celebrate the beginning of forever. With love in their hearts and joy to share, Nina and
              Chris invite you to witness their journey as they say "I do."
            </Text>
          </div>
          <div className="flex gap-5 md:flex-col">
            <UserProfile className="w-[50%] md:w-full" />
            <UserProfile
              userImage="img_dsc_9200.png"
              userTitle="Sunday School"
              userDescription={
                <>
                  Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
                  <br />
                  minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
                  <br />
                  an teliga. Prement larminyn sugt, an teliga.
                </>
              }
              className="w-[50%] md:w-full"
            />
          </div>
        </div>
        <div className="mt-[146px] grid w-[88%] grid-cols-2 justify-center gap-[26px] gap-y-[146px] md:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {serviceDepartmentGrid.map((d, index) => (
              <UserProfile {...d} key={"aboutUs" + index} className="w-full" />
            ))}
          </Suspense>
        </div>
        <div className="container-xs mt-[196px] px-[30px] md:px-5">
          <div className="ml-3 flex items-center md:ml-0 md:flex-col">
            <div className="flex w-[38%] flex-col items-start gap-[30px] md:w-full">
              <Text
                size="text2xl"
                as="p"
                className="ml-9 text-center text-[40px] font-normal leading-[100%] !text-charcoal md:ml-0 md:text-[38px] sm:text-[36px]"
              >
                <>
                  Come worship
                  <br />
                  with us
                </>
              </Text>
              <Text as="p" className="text-center text-[16px] font-normal leading-[19px] !text-gray-600_01">
                <>
                  Come worship with us every Sunday.
                  <br />
                  We promise you'll be filled with the holy spirit.
                </>
              </Text>
              <Button
                size="xs"
                shape="round"
                className="ml-[74px] min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[33px] md:ml-0 sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
              >
                RCCG Live
              </Button>
              <Button
                size="xs"
                shape="round"
                className="ml-[74px] min-w-[196px] rounded-[12px] border border-solid border-gray-400 px-[29px] md:ml-0 sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
              >
                Next Gen Live
              </Button>
            </div>
            <div className="flex h-[630px] flex-1 items-start justify-center rounded-[20px] bg-[url(/images/img_verse.png)] bg-cover bg-no-repeat px-14 py-[194px] md:h-auto md:self-stretch md:p-5">
              <div className="mb-3 flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-[38px] py-[66px] md:w-full md:py-5 sm:p-5">
                <Text size="textmd" as="p" className="w-full text-[20px] font-normal leading-6 !text-charcoal">
                  <span className="text-gray-600_01">
                    <>
                      For where two or three gather in my
                      <br />
                      name, there am I with them.”
                      <br />
                    </>
                  </span>
                  <span className="text-charcoal">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="font-medium text-charcoal">— Matthew 18:20 (NIV)</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
