import { FC, useState } from "react";

interface listObjectTypes {
  id: number;
  title: string;
}

interface InputSelectProps {
  form: any;
  name: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  list: listObjectTypes[];
}

const InputSelect: FC<InputSelectProps> = ({
  form,
  name,
  placeholder,
  className,
  wrapperClassName,
  list = [],
}): JSX.Element => {
  const [Open, setOpen] = useState(false);

  const { setValue, getValues, watch } = form;

  const handleSelectItem = (value: any) => {
    setValue(name, value);
  };

  console.log(name, watch(name));

  return (
    <div className={`relative ${wrapperClassName}`}>
      <input
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        // onChange={() => console.log()}
        value={getValues(name)?.title || ""}
        className={`input-text ${className} focus:border-green`}
        placeholder={placeholder}
      />
      <div
        className={`overflow-hidden absolute rounded-md w-full shadow ${Open ? "fade-in" : "fade-out"} z-40`}
      >
        <ul className="bg-white rounded-md overflow-hidden">
          {list?.length > 0 ? (
            list.map((item) => {
              return (
                <li
                  className="px-4 py-2 cursor-pointer transition hover:bg-gray"
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                >
                  {item.title}
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 cursor-pointer transition hover:bg-gray">موردی یافت نشد</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default InputSelect;
