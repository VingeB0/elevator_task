import { ButtonHTMLAttributes } from "react";

type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string | number;
};

export const ControlButton = ({ text, ...props }: ControlButtonProps) => {
  return (
    <button style={{ border: "1px solid #fff", width: "50px" }} {...props}>
      {text}
    </button>
  );
};
