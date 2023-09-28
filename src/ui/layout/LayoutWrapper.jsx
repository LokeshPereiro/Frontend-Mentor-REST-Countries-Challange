import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
