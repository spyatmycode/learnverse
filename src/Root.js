import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function Root() {
  return (
    <>
      {/* Layouts such as headers and footers */}
      <Navbar/>
      <Outlet />

      {/* Route Outlet Goes here */}
    </>
  );
}

export default Root;
