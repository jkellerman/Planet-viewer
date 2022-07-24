import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation isNavOpen />
      <Outlet />
    </>
  );
};

export default SharedLayout;
