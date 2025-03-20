import React, { useRef, useState } from "react";
import { Img } from ".";

export default function ImageSlider({ images, title }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft -= containerWidth;
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollLeft += containerWidth;
    }
  };

  return (
    <div className="container-xs">
      <div className="flex justify-between items-center mb-12 sm:px-4">
        <div className="flex items-center">
          <h3 className="text-[40px] font-semibold md:text-[38px] sm:text-[30px]">
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
      <div className="overflow-hidden -mx-[max(0px,calc((100vw-1280px)/2))]">
        <div
          ref={sliderRef}
          className="flex gap-6  overflow-x-auto md:px-[80px] lg:px-[80px] sm:px-4 scrollbar-hide scroll-smooth))]"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-none w-[350px] sm:w-[calc(100vw-40px)]"
            //   style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative group overflow-hidden rounded-[15px] cursor-pointer">
                <Img
                  src={image.src}
                  width={350}
                  height={398}
                  alt={image.alt}
                  className="h-full w-full rounded-[15px]  sm:object-fill md:object-cover lg:object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-[30%] bg-[#181818] flex flex-col items-center justify-center
                  translate-y-full group-hover:translate-y-0
                  sm:translate-y-0
                  transition-transform duration-300 ease-in-out"
                >
                  <p className="text-[20px] text-white_color font-medium capitalize">
                    {image.title}
                  </p>
                  <p className="text-[13.5px] text-white_color">
                    {image.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
