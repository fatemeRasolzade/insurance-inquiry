import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { registerValidation } from "@/constants/validations";

const defaultValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
};

const Register: FC = (): JSX.Element => {
  const form = useForm({
    defaultValues,
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = async () => {
    alert("")
  };

  return (
    <form className="form-layout" onSubmit={form.handleSubmit(onSubmit)}>
      <h1>ثبت نام</h1>
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-5">
        <InputText name="firstName" form={form} placeholder="نام" />
        <InputText name="lastName" form={form} placeholder="نام خانوادگی" />
        <InputText
          name="mobile"
          form={form}
          wrapperClassName="col-span-2"
          placeholder=" شماره موبایل (...09)" 
        />
        <InputText name="password" form={form} wrapperClassName="col-span-2" placeholder="رمز عبور" />
      </div>
      <div className="text-end">
        <Button text="ثبت نام" type="submit" />
      </div>
    </form>
  );
};

export default Register;
