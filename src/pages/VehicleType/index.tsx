import { FC } from "react";

const VehicleType: FC = (): JSX.Element => {
  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p>نوع و مدل خودرو خود را انتخاب کنید.</p>
      <div className="grid-layout"></div>
    </div>
  );
};

export default VehicleType;
