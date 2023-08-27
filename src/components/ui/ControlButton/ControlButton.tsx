import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string | number;
};

export const ControlButton = ({ text, ...props }: ControlButtonProps) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};
