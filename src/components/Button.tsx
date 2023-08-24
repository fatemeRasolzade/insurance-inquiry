import { FC } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, type = "button", className }): JSX.Element => {
  return (
    <button className={`full-green ${className}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
