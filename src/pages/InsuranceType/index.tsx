import { FC } from "react";
import { enumPaths } from "@/routes/routesUrls";
import NavigationBox from "@/components/NavigatinBox";
import { navigationBoxType } from "@/constants/interfaces";

const InsuranceType: FC = (): JSX.Element => {
  const insuranceTypeOptions = [
    { title: "شخص ثالث", url: enumPaths.selectVehicleType, disabled: false },
    { title: "بدنه", url: "", disabled: true },
  ];

  return (
    <div className="form-layout">
      <h1>انتخاب بیمه </h1>
      <div className="flex gap-5">
        {insuranceTypeOptions.map((item: navigationBoxType, index: number) => (
          <NavigationBox key={index} url={item.url} disabled={item.disabled} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default InsuranceType;
