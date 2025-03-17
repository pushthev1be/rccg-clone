"use client";

import { Img, Text } from "../../components";
import React, { useState } from "react";

export default function CommunityHighlightsSection() {
  // Add state to track the currently displayed image
  const [activeImage, setActiveImage] = useState({
    src: "H1.jpeg",
    alt: "Active",
  });

  // Array of image data
  const images = [
    { src: "H1.jpeg", alt: "H1" },
    { src: "H2.jpeg", alt: "H2" },
    { src: "H3.jpeg", alt: "H3" },
    { src: "H4.jpeg", alt: "H4" },
    { src: "H5.jpeg", alt: "H5" },
    { src: "H6.jpeg", alt: "H6" },
    { src: "H7.jpeg", alt: "H7" },
    { src: "H8.jpeg", alt: "H8" },
    { src: "H9.jpeg", alt: "H9" },
    { src: "H10.jpeg", alt: "H10" },
    { src: "H11.jpeg", alt: "H11" },
    { src: "H12.jpeg", alt: "H12" },
    { src: "H13.jpeg", alt: "H13" },
    { src: "H14.jpeg", alt: "H14" },
    { src: "H15.jpeg", alt: "H15" },
    { src: "H16.jpeg", alt: "H16" },
    { src: "H17.jpeg", alt: "H17" },
    { src: "H18.jpeg", alt: "H18" },
    { src: "H19.jpeg", alt: "H19" },
    { src: "H20.jpeg", alt: "H20" },
    { src: "H21.jpeg", alt: "H21" },
    { src: "H22.jpeg", alt: "H22" },
    { src: "H23.jpeg", alt: "H23" },
    { src: "H24.jpeg", alt: "H24" },
    { src: "H25.jpeg", alt: "H25" },
    { src: "H26.jpeg", alt: "H26" },
    { src: "H27.jpeg", alt: "H27" },
    { src: "H28.jpeg", alt: "H28" },
    { src: "H29.jpeg", alt: "H29" }
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
                  className="absolute bottom-0 left-0 right-0 mx-auto h-[752px] w-full flex-1 rounded-[20px] object-cover object-top"
                />
              </div>
              <div className="mx-12 sm:mx-2 flex gap-3 md:mx-0 overflow-x-auto ">
                {images.map((image, index) => (
                  <Img
                    key={index}
                    src={`${image.src}`}
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
