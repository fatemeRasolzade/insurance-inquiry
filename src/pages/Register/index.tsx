import Button from "../../components/Button";
import InputText from "../../components/InputText";

const Register = () => {
  return (
    <form className="form-layout">
      <h1>ثبت نام</h1>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 mb-6">
        <InputText placeholder="نام" />
        <InputText placeholder="نام خانوادگی" />
        <InputText className="col-span-2" placeholder="شماره موبایل" />
        <InputText className="col-span-2" placeholder="رمز عبور" />
      </div>
      <div className="text-end">
        <Button text="ثبت نام" />
      </div>
    </form>
  );
};

export default Register;
