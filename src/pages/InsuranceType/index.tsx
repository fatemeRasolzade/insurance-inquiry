import { FC } from "react";
import SelectBox from "@/components/SelectBox";

const InsuranceType: FC = (): JSX.Element => {
  return (
    <div className="form-layout">
      <h1>انتخاب بیمه </h1>
      <div className="flex gap-5">
        <SelectBox />
        <SelectBox disabled />
      </div>
    </div>
  );
};

export default InsuranceType;
