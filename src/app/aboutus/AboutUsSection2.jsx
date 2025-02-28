import { Text, Img } from "../../components";
import React from "react";

export default function AboutUsSection2() {
  return (
    <>
      {/* about us section */}
      <div className="relative mt-[146px] h-[630px] content-center md:h-auto">
        <div className="container-xs flex justify-center md:px-5">
          <Img
            src="img_verse.png"
            width={1276}
            height={630}
            alt="Pexelsrainene"
            className="h-[630px] w-full rounded-[20px] object-cover md:h-auto"
          />
        </div>
        <div className="absolute bottom-0 left-[9%] top-0 my-auto flex h-max w-[48%] flex-col items-start justify-center gap-4 rounded-[20px] bg-gray-100 px-[34px] py-[60px] md:py-5 sm:p-5">
          <Text size="textlg" as="p" className="text-[24px] font-normal !text-charcoal md:text-[22px]">
            Church history
          </Text>
          <Text size="textmd" as="p" className="text-[20px] font-normal leading-6 !text-gray-600_01">
            <>
              Lörem ipsum desöhet onde prer sugt, anteliga. Prement lar minyn.
              <br />
              Kroktiga bängen vosk. Presa dilig oaktat yteng: i mikroning, kasas
              <br />
              ade.
              <br />
              <br />
              Nilasam mihyns trabel premonar. Muvis abpol även om bett, härgj
              <br />
              ord det vill säga plade. Hypokoborade far telerutt inte spevening.
              <br />
              Progen ask. Ananyssade homoprett meledes, ynde i fans. <br />
              <br />
              Vill säga plade. Hypokoborade far telerutt inte spevening. Progen
              <br />
              ask. Ananyssade homoprett meledes, ynde i fans.onde prer sugt,
              <br />
              anteliga. Prement lar minyn.Kroktiga bängen vosk. Presa dilig oak
              <br />
              tat yteng: i mikroning, kasasade.{" "}
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
