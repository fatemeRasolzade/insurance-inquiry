import { Outlet } from "react-router-dom";
import Header from "./Header";
import bgCar from "../assets/icons/greenCarIcon.svg";

const Layout = () => {
  return (
    <>
      <Header />
      <img
        src={`${bgCar}`}
        className="fixed w-full max-w-[45%] 2xl:max-w-3xl bottom-20 sm:bottom-14 left-10"
      />
      <div className="fixed top-0 -z-10 left-0 w-1/4 h-full bg-lemon max-sm:hidden"></div>
      <div className="fixed bottom-0 -z-10 w-full h-1/6 bg-lemon sm:hidden"></div>
      <Outlet />
    </>
  );
};

export default Layout;
