import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { navigationBoxType } from "@/constants/interfaces";
import { ReactComponent as InsuranceIcon } from "@/assets/icons/insuranceIcon.svg";

const NavigationBox: FC<navigationBoxType> = ({ disabled, title, url }): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    !disabled && navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-3 rounded-xl border border-gray w-32  h-32 flex justify-center items-center flex-col gap-3 ${
        disabled ? "bg-gray bg-opacity-30 " : "cursor-pointer"
      }`}
    >
      <InsuranceIcon className={`mx-7 ${disabled ? "opacity-20" : ""} `} />
      <p className={disabled ? "opacity-20" : ""}>{title}</p>
    </div>
  );
};

export default NavigationBox;
