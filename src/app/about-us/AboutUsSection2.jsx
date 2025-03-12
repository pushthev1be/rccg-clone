import { Text, Img } from "../../components";
import React from "react";

export default function AboutUsSection2() {
  return (
    <>
      {/* about us section */}
      <div className="relative mt-[146px] h-[630px] content-center md:mt-24 sm:mt-16 md:h-auto">
        <div className="container-xs flex justify-start md:px-5 border rounded-lg p-6 mx-auto"
        style={{backgroundImage: "url('/images/img_verse.png')", backgroundSize: "cover", backgroundPosition: "center"}}>

        <div className="top-0 my-auto flex h-max w-[48%] flex-col items-start justify-center gap-4 rounded-[20px] bg-gray-100 px-[34px] py-[60px] md:w-[65%] sm:w-full md:py-10 sm:px-5 sm:py-8">
          <Text size="textlg" as="p" className="text-[24px] font-normal !text-charcoal lg:text-[22px] md:text-[20px] sm:text-[18px]">
            Church history
          </Text>
          <Text size="textmd" as="p" className="text-[15px] font-normal leading-normal !text-gray-600_01 sm:text-[14px]">
            <>
              Lörem ipsum desöhet onde prer sugt, anteliga. Prement lar minyn.
              <br className="md:hidden" />
              Kroktiga bängen vosk. Presa dilig oaktat yteng: i mikroning, kasas
              <br className="md:hidden" />
              ade.
              <br />
              <br />
              Nilasam mihyns trabel premonar. Muvis abpol även om bett, härgj
              <br className="md:hidden" />
              ord det vill säga plade. Hypokoborade far telerutt inte spevening.
              <br className="md:hidden" />
              Progen ask. Ananyssade homoprett meledes, ynde i fans. <br />
              <br />
              Vill säga plade. Hypokoborade far telerutt inte spevening. Progen
              <br className="md:hidden" />
              ask. Ananyssade homoprett meledes, ynde i fans.onde prer sugt,
              <br className="md:hidden" />
              anteliga. Prement lar minyn.Kroktiga bängen vosk. Presa dilig oak
              <br className="md:hidden" />
              tat yteng: i mikroning, kasasade.{" "}
            </>
          </Text>
        </div>
        </div>
      </div>
    </>
  );
}
