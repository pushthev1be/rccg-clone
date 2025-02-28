"use client";

import { Text, Heading, Button, TextArea, Input, SelectBox, Img } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function GetInvolvedSection3() {
  const countryOptions = React.useMemo(() => {
    return Object.entries(metadata.countries).map(([code, data]) => {
      const callingCode = `${data[0]}`;

      const display = {
        code,
        callingCode: `+${callingCode}`,
        imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
      };

      return {
        value: code,
        label: (
          <>
            <Text as="p" className="text-[16px] font-normal !text-gray-800">
              {"display.callingCode"}
            </Text>
          </>
        ),
      };
    });
  }, []);

  return (
    <>
      {/* get involved section */}
      <div className="mt-[284px] flex h-[810px] items-center justify-center bg-[url(/images/img_group_138.png)] bg-cover bg-no-repeat py-20 md:h-auto md:py-5">
        <div className="container-xs flex justify-center md:px-5">
          <div className="flex w-full items-center justify-center md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-12 px-7 md:self-stretch sm:px-5">
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex flex-col items-start gap-2">
                  <Text as="p" className="text-[16px] font-normal">
                    Name
                  </Text>
                  <Input
                    shape="round"
                    name="name"
                    placeholder={`John doe`}
                    className="w-[58%] rounded-lg border border-solid border-blue_gray-100_01 px-4"
                  />
                </div>
                <div className="flex gap-10 sm:flex-col">
                  <div className="flex w-[28%] flex-col items-start gap-2 sm:w-full">
                    <Text as="p" className="text-[16px] font-normal">
                      Country
                    </Text>
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="img_arrowdown.svg"
                          width={20}
                          height={20}
                          alt="Arrow Down"
                          className="h-[20px] w-[20px]"
                        />
                      }
                      name="country"
                      placeholder={`USA`}
                      options={dropDownOptions}
                      className="gap-4 self-stretch rounded-lg border border-solid border-blue_gray-100_01 px-2"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2 sm:self-stretch">
                    <Text as="p" className="text-[16px] font-normal">
                      Phone
                    </Text>
                    <div className="flex h-[56px] w-[40%] items-center justify-center rounded-lg border border-solid border-blue_gray-100_01 bg-white_color px-1">
                      <SelectBox
                        options={countryOptions}
                        defaultValue={countryOptions.find((option) => option.value === "US")}
                        className="max-h-[20px] flex-shrink-0 items-center justify-center bg-transparent"
                      />
                      <input
                        name="edittext"
                        type="tel"
                        className="ml-1.5 flex h-[20px] flex-grow items-center justify-center px-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Text as="p" className="text-[16px] font-normal">
                    Email Address
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`johndoe@gmail.com`}
                    className="w-[58%] rounded-lg border border-solid border-blue_gray-100_01 px-4"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Text as="p" className="text-[16px] font-normal">
                    Message
                  </Text>
                  <TextArea
                    shape="round"
                    name="form_one"
                    placeholder={`Leave a message...`}
                    className="w-[58%] rounded-lg !border !border-blue_gray-100_01 px-4 text-gray-400_01"
                  />
                </div>
              </div>
              <Button color="blue_A400" size="md" className="min-w-[486px] rounded-[16px] px-[34px] sm:px-5">
                Contact us
              </Button>
            </div>
            <div className="flex flex-col items-start gap-0.5 self-end">
              <Heading as="h2" className="text-[40px] font-semibold !text-white_color md:text-[38px] sm:text-[36px]">
                The Church Address
              </Heading>
              <Text size="textmd" as="p" className="text-[20px] font-normal">
                5350 Allied Blvd, Indianapolis, IN
              </Text>
              <Text size="textmd" as="p" className="text-[20px] font-normal">
                Visit and Worship with us.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
