import { Img, Text } from "../../components";
import React from "react";

export default function CommunityHighlightsSection() {
  return (
    <>
      {/* community highlights section */}
      <div className="mt-[366px] self-stretch">
        <div className="flex flex-col items-center bg-charcoal py-40 md:py-5">
          <div className="container-xs mb-[72px] flex flex-col items-center gap-[146px] md:gap-[109px] md:px-5 sm:gap-[73px]">
            <Text
              size="text2xl"
              as="p"
              className="text-center text-[40px] font-medium leading-[100%] md:text-[38px] sm:text-[36px]"
            >
              <>
                Highlights from Our
                <br />
                Community
              </>
            </Text>
            <div className="flex flex-col gap-[50px] self-stretch">
              <div className="relative h-[846px]">
                <Img
                  src="img_akira_hojo_86u.png"
                  width={986}
                  height={578}
                  alt="Akirahojo86u"
                  className="absolute left-0 right-0 top-0 mx-auto h-[578px] w-[76%] rounded-[20px] object-contain opacity-40"
                />
                <Img
                  src="img_matt_botsford_b.png"
                  width={1116}
                  height={654}
                  alt="Mattbotsfordb"
                  className="absolute left-0 right-0 top-[27px] mx-auto h-[654px] w-[86%] rounded-[20px] object-contain opacity-60"
                />
                <Img
                  src="img_kevin_wright_4s.png"
                  width={1206}
                  height={708}
                  alt="Kevinwright4s"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[708px] w-[94%] rounded-[20px] object-contain opacity-80"
                />
                <Img
                  src="img_joel_muniz_w3wn.png"
                  width={1280}
                  height={752}
                  alt="Joelmunizw3wn"
                  className="absolute bottom-0 left-0 right-0 mx-auto h-[752px] w-full flex-1 rounded-[20px] object-cover"
                />
              </div>
              <div className="mx-12 flex gap-3 md:mx-0 md:flex-col">
                <Img
                  src="img_joel_muniz_w3wn_154x186.png"
                  width={186}
                  height={154}
                  alt="Joelmunizwwn"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain md:w-full"
                />
                <Img
                  src="img_matt_botsford_b_154x186.png"
                  width={186}
                  height={154}
                  alt="Mattbotsfordb"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain opacity-50 md:w-full"
                />
                <Img
                  src="img_edward_cisneros.png"
                  width={186}
                  height={154}
                  alt="Edwardcisneros"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain opacity-50 md:w-full"
                />
                <Img
                  src="img_akira_hojo_86u_154x186.png"
                  width={186}
                  height={154}
                  alt="Akirahojou"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain opacity-50 md:w-full"
                />
                <Img
                  src="img_akira_hojo_86u_154x186.png"
                  width={186}
                  height={154}
                  alt="Akirahojou"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain opacity-50 md:w-full"
                />
                <Img
                  src="img_akira_hojo_86u_154x186.png"
                  width={186}
                  height={154}
                  alt="Akirahojou"
                  className="h-[154px] w-[16%] rounded-[12px] object-contain opacity-50 md:w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
