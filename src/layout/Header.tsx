import { FC } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as LogoIcon } from "@/assets/icons/logoIcon.svg";
import { ReactComponent as UserIcon } from "@/assets/icons/userIcon.svg";

const Header: FC = (): JSX.Element => {
  const { user } = useSelector((state: any) => state.User);

  return (
    <header>
      <ul className="flex justify-between py-8 px-14 items-center sticky top-0 z-20 bg-transparent">
        <li>
          <LogoIcon />
        </li>
        <li className="font-medium text-lg max-sm:hidden">سامانه مقایسه و خرید آنلاین بیمه</li>
        {user.firstName ? (
          <li className="flex gap-2">
            <UserIcon className="w-5 h-5" />
            <span>
              {user.firstName} {user.lastName}
            </span>
          </li>
        ) : (
          <li>ثبت نام</li>
        )}
      </ul>
    </header>
  );
};

export default Header;
