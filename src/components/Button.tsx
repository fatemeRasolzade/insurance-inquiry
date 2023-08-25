import { FC, MouseEventHandler } from "react";
import { ReactComponent as ArrowIcon } from "@/assets/icons/arrowIcon.svg";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  type = "button",
  className,
  startIcon,
  endIcon,
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`full-green ${className} ${disabled && "opacity-50"}`}
      type={type}
    >
      {startIcon && <ArrowIcon className="w-3 rotate-180 absolute right-4 top-[1.2rem]" />}
      {text}
      {endIcon && <ArrowIcon className="w-3 absolute left-4 top-[1.2rem]" />}
    </button>
  );
};

export default Button;
