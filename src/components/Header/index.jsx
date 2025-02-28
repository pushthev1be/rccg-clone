import { Text, Img } from "./..";
import Link from "next/link";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center py-[22px] sm:py-5`}>
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
        <Img
          src="img_header_logo.png"
          width={242}
          height={48}
          alt="Headerlogo"
          className="h-[48px] w-[242px] object-contain"
        />
        <ul className="flex flex-wrap gap-12">
          <li>
            <Link href="#">
              <Text size="textmd" as="p" className="text-[20px] font-normal !text-blue-900">
                Home
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              <Text size="textmd" as="p" className="text-[20px] font-normal hover:text-blue-900">
                About Us
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              <Text size="textmd" as="p" className="text-[20px] font-normal hover:text-blue-900">
                Services & Events
              </Text>
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer">
              <Text size="textmd" as="p" className="text-[20px] font-normal hover:text-blue-900">
                Get Involved
              </Text>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
