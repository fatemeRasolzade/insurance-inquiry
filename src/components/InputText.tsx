interface InputTextProps {
  placeholder?: string;
  className?: string;
}

const InputText = ({ placeholder, className }: InputTextProps) => {
  return (
    <>
      <input className={`input-text ${className}`} placeholder={placeholder} />
    </>
  );
};

export default InputText;
