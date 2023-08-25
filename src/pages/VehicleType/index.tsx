import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { enumApis } from "@/services/enumApis";
import InputSelect from "@/components/InputSelect";
import { useFetchOptionsQuery } from "@/services/fetchApis";
import { enumPaths } from "@/routes/routesUrls";

const defaultValues = {
  carType: null,
  carModel: null,
};

const VehicleType: FC = (): JSX.Element => {
  const { data = [], isLoading } = useFetchOptionsQuery(enumApis.getVehicles);

  console.log("Data", data);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues,
  });

  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p>نوع و مدل خودرو خود را انتخاب کنید.</p>
      <div className="grid-layout mt-10">
        <InputSelect
          loading={isLoading}
          placeholder="نوع خودرو"
          form={form}
          name="carType"
          list={data?.map((item) => ({ id: item?.id, title: item?.title }))}
        />
        <InputSelect
          placeholder="مدل خودرو"
          form={form}
          name="carModel"
          list={data?.find((item) => item.id === form.getValues("carType")?.id)?.usages}
        />
      </div>
      <div className="flex justify-between pt-3">
        <Button
          text="بازگشت"
          className="line-green"
          startIcon
          onClick={() => navigate(enumPaths.selectInsuranceType)}
        />
        <Button text="مرحله بعد" className="line-green" endIcon />
      </div>
    </div>
  );
};

// getValues(name)?.title

export default VehicleType;
