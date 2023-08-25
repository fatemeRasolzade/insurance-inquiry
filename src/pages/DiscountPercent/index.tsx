import { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { enumApis } from "@/services/enumApis";
import InputSelect from "@/components/InputSelect";
import { useFetchOptionsQuery } from "@/services/fetchApis";

const defaultValues = {
  thirdPartyInsurance: null,
  driverThirdPartyInsurance: null,
};

const DiscountPercent: FC = (): JSX.Element => {
  const { data = [], isLoading } = useFetchOptionsQuery(enumApis.getPercents);

  const form = useForm({
    defaultValues,
  });

  const { getValues } = form;

  const handleDisabled = () => {
    if (getValues("thirdPartyInsurance")?.id && getValues("driverThirdPartyInsurance")?.id) return true;
    return false;
  };

  return (
    <div className="form-layout">
      <h1>بیمه شخص ثالث</h1>
      <p className="mb-10">درصد تخفیف شخص ثالث و حوادث راننده را وارد کنید.</p>
      <InputSelect
        loading={isLoading}
        placeholder="درصد تخفیف ثالث"
        form={form}
        name="thirdPartyInsurance"
        list={data?.map((item) => ({ id: item?.id, title: item?.title }))}
      />
      <InputSelect
        wrapperClassName="mt-7"
        loading={isLoading}
        placeholder="درصد تخفیف حوادث راننده"
        form={form}
        name="driverThirdPartyInsurance"
        list={data?.map((item) => ({ id: item?.id, title: item?.title }))}
      />
      <div className="flex justify-end pt-8">
        <Button
          text="استعلام قیمت "
          className="w-56"
          disabled={!handleDisabled()}
          //   onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DiscountPercent;
