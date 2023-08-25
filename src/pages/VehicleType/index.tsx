import { FC } from "react";
import InputSelect from "@/components/InputSelect";
import { useForm } from "react-hook-form";

const defaultValues = {
  carType: null,
  carModel: null,
};

const VehicleType: FC = (): JSX.Element => {
  const form = useForm({
    defaultValues,
  });
  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p>نوع و مدل خودرو خود را انتخاب کنید.</p>
      <div className="grid-layout mt-10">
        <InputSelect placeholder="نوع خودرو" form={form} name="carType" />
        <InputSelect placeholder="مدل خودرو" form={form} name="carModel" />
      </div>
    </div>
  );
};

export default VehicleType;
