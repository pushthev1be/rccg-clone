"use client";

import { Text, Heading, Button, TextArea, Input, SelectBox, Img } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import React from "react";

const dropDownOptions = [
  { label: "CANADA", value: "CANADA" },
  { label: "UNITED STATES", value: "UNITED STATES" },
  { label: "UNITED KINGDOM", value: "UNITED KINGDOM" },
  { label: "NIGERIA", value: "NIGERIA" },
  { label: "AUSTRALIA", value: "AUSTRALIA" },
  { label: "NEW ZEALAND", value: "NEW ZEALAND" },
  { label: "SOUTH AFRICA", value: "SOUTH AFRICA" },
  { label: "GHANA", value: "GHANA" },

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
              {display.callingCode}
            </Text>
          </>
        ),
      };
    });
  }, []);

  return (
    <>
      {/* get involved section */}
      <div className="flex h-[1024px] flex-col items-center justify-end bg-[url(/images/img_group_1024x1440.png)] bg-cover bg-no-repeat pt-[274px] md:h-auto md:pt-5">
        <div className="container-xs flex flex-col items-center gap-[274px] md:gap-[150px] sm:gap-[100px] md:px-5">
          <div className="flex flex-col items-center gap-[62px] self-stretch md:gap-[31px]">
            <div className="mx-[218px] flex flex-col items-center gap-[22px] self-stretch md:mx-0">
              <Heading as="h2" className="text-[40px] font-semibold !text-white_color md:text-[38px] sm:text-[36px]">
                Contact us
              </Heading>
              <Text
                as="p"
                className="self-stretch text-center !font-poppins text-[16px] font-light leading-[120%]"
              >
                Join us as we celebrate the beginning of forever. With love in their hearts and joy to share, Nina and
                Chris invite you to witness their journey as they say "I do."
              </Text>
            </div>
            <div className="flex flex-col items-center gap-6 self-stretch">
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
              <div className="flex w-[58%] gap-10 sm:flex-col">
                <div className="flex basis-1/2 flex-col items-start gap-2 sm:w-full">
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
                <div className="flex basis-1/2 flex-col items-start gap-2 sm:w-full">
                  <Text as="p" className="text-[16px] font-normal">
                    Phone
                  </Text>
                  <div className="flex h-[56px] items-center justify-center rounded-lg border border-solid border-blue_gray-100_01 bg-white_color px-1">
                    <SelectBox
                      options={countryOptions}
                      defaultValue={countryOptions.find((option) => option.value === "US")}
                      className="max-h-[20px] flex-shrink-0 items-center justify-center bg-transparent"
                    />
                    <input
                      name="edittext"
                      type="tel"
                      className="ml-1.5 flex h-[20px] flex-grow items-center justify-center border-none px-3 outline-none"
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
                  className="w-[58%] md:w-[80%] sm:w-full rounded-lg !border !border-blue_gray-100_01 px-4 text-gray-400_01"
                />
              </div>
            </div>
            <Button
              color="blue_A400"
              size="md"
              className="min-w-[486px] md:min-w-[300px] sm:min-w-full rounded-[16px] px-[34px] sm:px-5 hover:bg-[#4D88FF] hover:text-white_color hover:border-[#4D88FF] transition-colors"
            >
              Contact us
            </Button>
          </div>
          <div className="flex flex-col items-start gap-0.5 self-end md:self-center">
            <Heading as="h2" className="text-[40px] font-semibold !text-white_color md:text-[38px] sm:text-[36px]">
              The Church Address
            </Heading>
            <Text size="textmd" as="p" className="text-[20px] font-normal md:text-[18px]">
              5350 Allied Blvd, Indianapolis, IN
            </Text>
            <Text size="textmd" as="p" className="text-[20px] font-normal md:text-[18px]">
              Visit and Worship with us.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
