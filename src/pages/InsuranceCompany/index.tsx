import { FC } from "react";
import { useForm } from "react-hook-form";
import { enumApis } from "@/services/enumApis";
import { useNavigate } from "react-router-dom";
import InputSelect from "@/components/InputSelect";
import { useFetchOptionsQuery } from "@/services/fetchApis";
import Button from "@/components/Button";
import { enumPaths } from "@/routes/routesUrls";
import { pushInsurance } from "@/redux/reducers/user/insurance";
import { useDispatch } from "react-redux";

const defaultValues = {
  insuranceCompany: null,
};

const InsuranceCompany: FC = (): JSX.Element => {
  const { data = [], isLoading } = useFetchOptionsQuery(enumApis.getCompanies);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues,
  });

  const { getValues } = form;

  const handleDisabled = () => {
    if (getValues("insuranceCompany")?.id) return true;
    return false;
  };

  const handleSubmit = () => {
    dispatch(pushInsurance(getValues()));
    navigate(enumPaths.selectDiscountPercent);
  };

  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p className="mb-10">شرکت بیمه گر قبلی خود را در این بخش وارد کنید.</p>
      <InputSelect
        loading={isLoading}
        placeholder="شرکت بیمه گر قبلی "
        form={form}
        name="insuranceCompany"
        options={data?.map((item) => ({ id: item?.id, title: item?.title }))}
      />
      <div className="flex justify-between pt-8">
        <Button
          text="بازگشت"
          className="line-green"
          startIcon
          onClick={() => navigate(enumPaths.selectVehicleType)}
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

export default InsuranceCompany;
