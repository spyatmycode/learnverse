import { Outlet } from "react-router";

function Root() {
  return (
    <>
      {/* Layouts such as headers and footers */}
      <h1 className="font-bold">This is the root</h1>
      {/* Route Outlet Goes here */}
      <Outlet />
    </>
  );
}

export default Root;
