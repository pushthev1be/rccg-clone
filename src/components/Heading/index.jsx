import React from "react";

const sizes = {
  headingxs: "text-[24px] font-bold md:text-[22px]",
  headings: "text-[32px] font-semibold md:text-[30px] sm:text-[28px]",
  headingmd: "text-[40px] font-semibold md:text-[38px] sm:text-[36px]",
  headinglg: "text-[64px] font-semibold md:text-[48px]",
  headingxl: "text-[96px] font-semibold md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headingmd", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-charcoal font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
