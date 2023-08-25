import { FC, useState } from "react";
import Loading from "./Loading";
import { listObjectType } from "@/constants/interfaces";
import { ReactComponent as ArrowDownIcon } from "@/assets/icons/arrowDownIcon.svg";

interface InputSelectProps {
  form: any;
  name: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  options: listObjectType[];
  loading?: boolean;
}

const InputSelect: FC<InputSelectProps> = ({
  form,
  name,
  placeholder,
  className,
  wrapperClassName,
  options = [],
  loading,
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const { setValue, getValues, watch } = form;

  const handleSelectItem = (value: listObjectType) => {
    setValue(name, value);
  };

  console.log(name, watch(name));

  return (
    <div className={`relative ${wrapperClassName}`}>
      <input
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)}
        // onChange={() => console.log()}
        value={getValues(name)?.title || ""}
        className={`input-text ${className} focus:border-green`}
        placeholder={placeholder}
      />
      <span className={`absolute top-4 left-3 transition duration-500 ${isOpen && "rotate-180"}`}>
        <ArrowDownIcon />
      </span>
      <div
        className={`overflow-hidden absolute rounded-md w-full shadow ${
          isOpen ? "fade-in" : "fade-out"
        } z-40`}
      >
        <ul className="bg-white rounded-md overflow-auto max-h-36">
          {loading ? (
            <Loading />
          ) : options?.length > 0 ? (
            options.map((item) => {
              return (
                <li
                  className="px-4 py-2 cursor-pointer transition hover:bg-gray text-sm"
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                >
                  {item.title}
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 text-sm">موردی یافت نشد</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default InputSelect;
