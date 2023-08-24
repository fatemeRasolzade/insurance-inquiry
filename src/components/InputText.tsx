import { FC } from "react";

interface InputTextProps {
  placeholder?: string;
  className?: string;
}

const InputText: FC<InputTextProps> = ({ placeholder, className }): JSX.Element => {
  return (
    <>
      <input className={`input-text ${className}`} placeholder={placeholder} />
    </>
  );
};

export default InputText;
