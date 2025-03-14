import { Text, Img } from "..";
import Link from "next/link";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end p-11 md:p-5 border-alternate border-t border-dashed bg-charcoal`}
    >
      <div className="mx-auto mt-[50px] flex w-full max-w-[1270px] items-start justify-between gap-5 md:flex-col">
        <div className="flex w-[30%] flex-col gap-8 md:w-full">
          <Text
            size="textxl"
            as="p"
            className="text-[32px] font-normal leading-[38px] md:text-[30px] sm:text-[28px]"
          >
            <>
              RCCG
              <br />
              Rod of God Parish
            </>
          </Text>
          <div className="flex gap-5 sm:flex-col">
            <div className="flex flex-1 items-center gap-1 sm:self-stretch">
                <Link href="https://www.instagram.com/rccg_rog" target="_blank" rel="noreferrer">
              <Text as="p" className="text-[16px] font-normal">
                INSTAGRAM
              </Text>
              <Img
                src="img_arrow_arrow_up_right_sm.svg"
                width={24}
                height={24}
                alt="Arrowarrowup"
                className="h-[24px]"
              />
              </Link>
            </div>
            <div className="flex flex-1 items-center gap-1 sm:self-stretch">
                <Link href="https://www.facebook.com/RCCGRodOfGodParish" target="_blank" rel="noreferrer">
              <Text as="p" className="text-[16px] font-normal">
                Facebook
              </Text>
              <Img
                src="img_arrow_arrow_up_right_sm.svg"
                width={24}
                height={24}
                alt="Arrowarrowup"
                className="h-[24px]"
              />
              </Link>
            </div>
            <div className="flex items-center gap-1">
                <Link href="https://www.youtube.com/RCCGRodofGodParish" target="_blank" rel="noreferrer">
              <Text as="p" className="text-[16px] font-normal">
                YOUTUBE
              </Text>
              <Img
                src="img_arrow_arrow_up_right_sm.svg"
                width={24}
                height={24}
                alt="Arrowarrowup"
                className="h-[24px]"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-[44%] items-start justify-between gap-5 self-center md:w-full sm:flex-col">
          <div className="flex w-[42%] items-start justify-between gap-5 self-center sm:w-full">
            <div className="flex w-[85%] flex-col items-start gap-3 self-center">
              <Text
                size="textmd"
                as="p"
                className="text-[20px] font-normal !text-alternate"
              >
                LINKS
              </Text>
              <ul className="flex w-[64%] flex-col items-start md:w-full">
                <li>
                  <Link href="/" target="_blank" rel="noreferrer">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Home
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="mt-2">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      About Us
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/services-events" className="mt-3 w-full leading-[100%]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Services & Event
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="mt-4 w-full leading-[100%]">
                    <Text
                      size="textmd"
                      as="p"
                      className="text-[20px] font-normal"
                    >
                      Get Involved
                    </Text>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="flex flex-col items-start gap-3">
              <Text size="textmd" as="p" className="text-[20px] font-normal !text-alternate">
                SHOP
              </Text>
              <ul className="flex flex-col items-start gap-2.5">
                <li>
                  <Link href="Store" target="_blank" rel="noreferrer">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Store
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link href="Popular" target="_blank" rel="noreferrer">
                    <Text size="textmd" as="p" className="text-[20px] font-normal">
                      Popular
                    </Text>
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="flex w-[42%] flex-col items-start gap-4 sm:w-full">
            <Text
              size="textmd"
              as="p"
              className="text-[20px] font-normal !text-alternate"
            >
              Phone
            </Text>
            <Text
              size="textmd"
              as="p"
              className="text-[20px] font-normal leading-[120%]"
            >
              <>
                <a href="tel:+13174187388">
                (317) 418-7388
                </a>
              </>
            </Text>
          </div>
          <div className="flex w-[42%] flex-col items-start gap-4 sm:w-full">
            <Text
              size="textmd"
              as="p"
              className="text-[20px] font-normal !text-alternate"
            >
              Location
            </Text>
            <Text
              size="textmd"
              as="p"
              className="text-[20px] font-normal leading-[120%]"
            >
              <>
                Rod Of God Parish,
                <br />
                Indianapolis Indiana USA.
                <br />
                <br />
                5350 Allied Blvd,
                <br />
                Indianapolis, IN 46224
              </>
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
