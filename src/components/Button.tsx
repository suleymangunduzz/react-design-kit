import React, { ReactNode } from "react";
import styled from "styled-components";

const SIZE_MAP = {
  xSmall: "4px",
  small: "8px",
  medium: "12px",
  large: "16px",
  xLarge: "20px",
} as const;

type Props = {
  children: ReactNode | string;
  rounded?: boolean;
  size: keyof typeof SIZE_MAP;
};

const StyledButton = styled.button<Omit<Props, "children">>`
  border-radius: ${(props) => (props.rounded ? "15px" : "unset")};
  padding: ${(props) => SIZE_MAP[props.size]};
`;

const Button = ({ children, rounded, size }: Props) => {
  return <StyledButton {...{ rounded, size }}>{children}</StyledButton>;
};

export default Button;
