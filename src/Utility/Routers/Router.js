import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../../Pages/AuthenticationPages/Signin";
import Signup from "../../Pages/AuthenticationPages/Signup";
import Welcome from "../../Pages/AuthenticationPages/Welcome";
import Dashboard from "../../Pages/Dashboard";
import Root from "../../Root";
import ProtectedComponent from "../ProtectedComponent";


// Export Route paths
export const ROOT = "/";
export const SIGNIN = "/signin";
export const SIGNUP = "/signup";
export const DASHBOARD = "/dashboard";
export const WELCOME = "/welcome";

// Configure routes below
const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: SIGNIN,
    element: <Signin />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: SIGNUP,
    element: <Signup />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: WELCOME,
    element: <Welcome />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
]);
const Router = () => {
  return(
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
   )
};

export default Router;
