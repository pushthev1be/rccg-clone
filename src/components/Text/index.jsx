import React from "react";

const sizes = {
  textxs: "text-[14px] font-normal",
  texts: "text-[16px] font-normal",
  textmd: "text-[20px] font-normal",
  textlg: "text-[24px] font-normal md:text-[22px]",
  textxl: "text-[32px] font-normal md:text-[30px] sm:text-[28px]",
  text2xl: "text-[40px] font-normal md:text-[38px] sm:text-[36px]",
};

const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white_color font-inter ${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
