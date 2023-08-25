import { FC } from "react";

interface InputTextProps {
  form: any;
  name: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
}

const InputText: FC<InputTextProps> = ({
  form,
  name,
  placeholder,
  className,
  wrapperClassName,
}): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;
  XMLDocument;
  console.log("ERROS", form);

  return (
    <div className={wrapperClassName}>
      <input
        className={`input-text ${className} ${
          errors[name] ? "border-red-600 focus:border-red-600" : "focus:border-green"
        }`}
        placeholder={placeholder}
        {...register(name)}
      />
      <p className="text-xs h-4 text-red-600">{errors[name]?.message}</p>
    </div>
  );
};

export default InputText;
