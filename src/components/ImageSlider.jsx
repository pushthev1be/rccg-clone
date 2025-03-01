import React, { useRef, useState } from "react";
import { Img } from ".";

export default function ImageSlider({ images, title }) {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = {
    lg: 4,
    md: 3,
    sm: 1,
  };

  // Create a new array with duplicated images for infinite scrolling
  const duplicatedImages = [
    ...images.slice(-4), // Duplicate last 4 images for seamless transition
    ...images,
    ...images.slice(0, 4), // Duplicate first 4 images for seamless transition
  ];

  const getCurrentItems = () => {
    const totalItems = duplicatedImages.length;
    const itemsPerView =
      window.innerWidth >= 1024
        ? itemsToShow.lg
        : window.innerWidth >= 768
        ? itemsToShow.md
        : itemsToShow.sm;
    return totalItems > itemsPerView ? itemsPerView : totalItems;
  };

  const handlePrev = () => {
    const itemsPerView = getCurrentItems();
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return duplicatedImages.length - itemsPerView; // Jump to the end
      }
      return prevIndex - itemsPerView;
    });
  };

  const handleNext = () => {
    const itemsPerView = getCurrentItems();
    setCurrentIndex((prevIndex) => {
      if (prevIndex + itemsPerView >= duplicatedImages.length) {
        return 0; // Jump to the start
      }
      return prevIndex + itemsPerView;
    });
  };

  return (
    <div className="mx-auto flex w-full flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center">
          <h3 className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
            {title}
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="w-[60px] h-[60px] rounded-[30px] border border-solid border-gray-400 px-[18px]"
          >
            <Img src="img_arrow_left.svg" width={24} height={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-[60px] h-[60px] rotate-[-180deg] rounded-[30px] border border-solid border-gray-400 px-[18px]"
          >
            <Img src="img_arrow_left.svg" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / getCurrentItems())
            }%)`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 lg:w-1/4 px-2"
            >
              <Img
                src={image.src}
                width={350}
                height={398}
                alt={image.alt}
                className="h-[398px] w-full rounded-[16px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
