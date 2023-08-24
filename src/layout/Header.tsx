import { ReactComponent as LogoIcon } from "./../assets/icons/logoIcon.svg";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-between py-8 px-14 items-center">
        <li><LogoIcon /></li>
        <li className="font-semibold max-sm:hidden">سامانه مقایسه و خرید آنلاین بیمه</li>
        <li>ثبت نام</li>
      </ul>
    </header>
  );
};

export default Header;
