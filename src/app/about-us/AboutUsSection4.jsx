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
      <div className="mt-[146px] flex flex-col items-center md:mt-24 sm:mt-16">
        <div className="container-xs flex flex-col items-center px-14 md:px-8 sm:px-5">
          <div className="flex w-[66%] flex-col items-center gap-[22px] md:w-full">
            <Heading
              as="h2"
              className="text-[40px] font-semibold text-center lg:text-[36px] md:text-[32px] sm:text-[28px]"
            >
              SERVICE DEPARTMENTS
            </Heading>
            <Text
              as="p"
              className="self-stretch text-center !font-poppins text-[16px] font-light leading-[130%] !text-charcoal md:text-[15px] sm:text-[14px]"
            >
              <>
                Lörem ipsum desöhet onde prer sugt, an teliga. Prement lar
                <br className="md:hidden" />
                minyn sugt, an teliga. Lörem ipsum desöhet onde prer sugt,
                <br className="md:hidden" />
                an teliga. Prement larminyn sugt, an teliga.
              </>
            </Text>
          </div>
        </div>
        <div className="mt-[146px] grid w-[88%] grid-cols-2 justify-center gap-[26px] gap-y-[146px] md:mt-20 sm:mt-16 md:grid-cols-1 md:gap-y-[90px] sm:gap-y-[70px]">
          <Suspense fallback={<div>Loading feed...</div>}>
            {serviceDepartmentGrid.map((d, index) => (
              <UserProfile {...d} key={"aboutUs" + index} className="w-full" />
            ))}
          </Suspense>
        </div>
        <div className="container-xs mt-[196px] px-[30px] md:mt-24 sm:mt-16 md:px-8 sm:px-5">
          <div className="ml-3 flex items-center md:ml-0 md:flex-col md:gap-10">
            <div className="flex w-[38%] flex-col items-start gap-[30px] md:w-full md:items-center">
              <Text
                size="text2xl"
                as="p"
                className="ml-9 text-center text-[40px] font-normal leading-[100%] !text-charcoal md:ml-0 lg:text-[36px] md:text-[32px] sm:text-[28px]"
              >
                <>
                  Come worship
                  <br />
                  with us
                </>
              </Text>
              <Text
                as="p"
                className="text-center text-[16px] font-normal leading-[130%] !text-gray-600_01 md:text-[15px] sm:text-[14px]"
              >
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
            <div className="flex h-[630px] flex-1 items-start justify-center rounded-[20px] bg-[url(/images/img_verse.png)] bg-cover bg-no-repeat px-14 py-[194px] md:h-auto md:w-full md:py-16 sm:py-12 sm:px-5">
              <div className="mb-3 flex w-[66%] justify-center rounded-[20px] border border-solid border-gray-400 bg-gray-100 px-[38px] py-[66px] md:w-full md:px-6 md:py-10 sm:py-8 sm:px-5">
                <Text
                  size="textmd"
                  as="p"
                  className="w-full text-[20px] font-normal leading-[130%] !text-charcoal lg:text-[18px] md:text-[16px]"
                >
                  <span className="text-gray-600_01">
                    <>
                      For where two or three gather in my
                      <br className="md:hidden" />
                      name, there am I with them."
                      <br />
                    </>
                  </span>
                  <span className="text-charcoal">
                    <>
                      <br />
                    </>
                  </span>
                  <span className="font-medium text-charcoal">
                    — Matthew 18:20 (NIV)
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
