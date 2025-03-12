import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    blue_A400: "bg-blue-a400 text-white_color",
    white_color: "bg-white_color text-gray-900_02",
  },
  outline: {
    gray_400: "border-gray-400 border border-solid text-white_color",
  },
};
const sizes = {
  md: "h-[66px] px-[34px] text-[20px]",
  xs: "h-[52px] px-[34px] text-[20px]",
  sm: "h-[60px] px-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_color",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["blue_A400", "white_color", "gray_400"]),
};

export { Button };
