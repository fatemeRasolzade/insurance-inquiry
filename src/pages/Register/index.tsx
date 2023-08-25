import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginUser } from "@/redux/reducers/user";
import { registerValidation } from "@/constants/validations";
import { enumPaths } from "@/routes/routesUrls";

const defaultValues: defaultValuesProps = {
  firstName: "",
  lastName: "",
  mobile: "",
  password: "",
};

interface defaultValuesProps {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
}

const Register: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues,
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = async (values: defaultValuesProps) => {
    dispatch(loginUser(values));
    navigate(enumPaths.selectInsuranceType);
  };

  return (
    <form className="form-layout" onSubmit={form.handleSubmit(onSubmit)}>
      <h1>ثبت نام</h1>
      <div className="grid-layout">
        <InputText name="firstName" form={form} wrapperClassName="max-sm:col-span-2" placeholder="نام" />
        <InputText
          name="lastName"
          form={form}
          wrapperClassName="max-sm:col-span-2"
          placeholder="نام خانوادگی"
        />
        <InputText
          name="mobile"
          form={form}
          wrapperClassName="col-span-2"
          placeholder=" شماره موبایل (...09)"
        />
        <InputText name="password" form={form} wrapperClassName="col-span-2" placeholder="رمز عبور" />
      </div>
      <div className="flex justify-end">
        <Button text="ثبت نام" type="submit" />
      </div>
    </form>
  );
};

export default Register;
