import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import { enumApis } from "@/services/enumApis";
import { enumPaths } from "@/routes/routesUrls";
import InputSelect from "@/components/InputSelect";
import { useFetchOptionsQuery } from "@/services/fetchApis";
import { pushInsurance } from "@/redux/reducers/insurance";

const defaultValues = {
  carType: null,
  carModel: null,
};

const VehicleType: FC = (): JSX.Element => {
  const { data = [], isLoading } = useFetchOptionsQuery(enumApis.getVehicles);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues,
  });

  const { getValues, setValue } = form;

  useEffect(() => {
    setValue("carModel", null);
  }, [getValues("carType")?.id]);

  const handleDisabled = () => {
    if (getValues("carType")?.id && getValues("carModel")?.id) return true;
    return false;
  };

  const handleSubmit = () => {
    dispatch(pushInsurance(getValues()));
    navigate(enumPaths.selectInsuranceCompany);
  };

  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p>نوع و مدل خودرو خود را انتخاب کنید.</p>
      <div className="grid-layout mt-10 sm:mb-0">
        <InputSelect
          wrapperClassName="max-sm:col-span-2 mb-6"
          loading={isLoading}
          placeholder="نوع خودرو"
          form={form}
          name="carType"
          options={data?.map((item) => ({ id: item?.id, title: item?.title }))}
        />
        <InputSelect
          wrapperClassName="max-sm:col-span-2"
          placeholder="مدل خودرو"
          form={form}
          name="carModel"
          options={
            data?.find((item) => item.id === getValues("carType")?.id)?.usages
          }
        />
      </div>
      <div className="flex justify-between pt-3">
        <Button
          text="بازگشت"
          className="line-green"
          startIcon
          onClick={() => navigate(enumPaths.selectInsuranceType)}
        />
        <Button
          text="مرحله بعد"
          className="line-green"
          endIcon
          disabled={!handleDisabled()}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default VehicleType;
