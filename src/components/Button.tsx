import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | string;
  rounded?: boolean;
  size: "small" | "medium" | "large";
};

const SIZE_MAP = {
  small: "8px",
  medium: "12px",
  large: "16px",
} as const;

const Button = ({ children, rounded, size }: Props) => {
  const style = {
    borderRadius: rounded ? "15px" : "unset",
    padding: SIZE_MAP[size],
  };

  return <button style={style}>{children}</button>;
};

export default Button;
