"use client"

import { Img, Text } from "../../components";
import React, { useState } from "react";

export default function CommunityHighlightsSection() {
  // Add state to track the currently displayed image
  const [activeImage, setActiveImage] = useState({
    src: "img_joel_muniz_w3wn.png",
    alt: "Joelmunizw3wn",
  });

  // Array of image data
  const images = [
    { src: "img_joel_muniz_w3wn.png", alt: "Joelmunizw3wn" },
    { src: "img_matt_botsford_b.png", alt: "Mattbotsfordb" },
    { src: "img_edward_cisneros.png", alt: "Edwardcisneros" },
    { src: "img_akira_hojo_86u.png", alt: "Akirahojou" },
    { src: "img_akira_hojo_86u.png", alt: "Akirahojou" },
    { src: "img_akira_hojo_86u.png", alt: "Akirahojou" },
  ];

  return (
    <>
      {/* community highlights section */}
      <div className="mt-[366px] sm:mt-[90px] self-stretch">
        <div className="flex flex-col items-center bg-charcoal lg:py-40 md:py-5 sm:py-5">
          <div className="container-xs mb-[72px] flex flex-col sm:pt-6 items-center gap-[146px] md:gap-[109px] md:px-5 sm:gap-0">
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
                  src={activeImage.src}
                  width={1280}
                  height={752}
                  alt={activeImage.alt}
                  className="absolute bottom-0 left-0 right-0 mx-auto h-[752px] w-full flex-1 rounded-[20px] object-cover"
                />
              </div>
              <div className="mx-12 sm:mx-2 flex gap-3 md:mx-0 overflow-x-auto ">
                {images.map((image, index) => (
                  <Img
                    key={index}
                    src={image.src}
                    width={186}
                    height={154}
                    alt={image.alt}
                    className={`md:h-[182px] sm:h-[50px] w-1/6 sm:w-1/3 rounded-[12px] sm:rounded-sm object-cover md:w-full cursor-pointer ${
                      activeImage.src === image.src ? "" : "opacity-50"
                    }`}
                    onClick={() => setActiveImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
