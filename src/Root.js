import { Outlet } from "react-router";

function Root() {
  return (
    <>
      {/* Layouts such as headers and footers */}

      <Outlet />

      {/* Route Outlet Goes here */}
    </>
  );
}

export default Root;
