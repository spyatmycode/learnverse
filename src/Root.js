import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function Root() {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* Layouts such as headers and footers */}
      <Outlet />

      {/* Route Outlet Goes here */}
    </div>
  );
}

export default Root;
