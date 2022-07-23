import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet />
    </>
  );
};

export default SharedLayout;
