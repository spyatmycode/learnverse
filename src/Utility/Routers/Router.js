import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../../Pages/AuthenticationPages/Signin";
import Signup from "../../Pages/AuthenticationPages/Signup";
import Welcome from "../../Pages/AuthenticationPages/Welcome";
import Dashboard from "../../Pages/Dashboard";
import Root from "../../Root";
import ProtectedComponent from "../ProtectedComponent";
import { AppProvider } from "../../Context/AppContext";
import Course from "../../Pages/Course";
import EachCourseTopic from "../../Pages/EachCourseTopic";
import Profile from "../../Pages/Profile";

// Export Route paths
export const ROOT = "/";
export const SIGNIN = "/signin";
export const SIGNUP = "/signup";
export const DASHBOARD = "/dashboard";
export const WELCOME = "/welcome";
export const COURSE = "/course/:id";
export const EACHCOURSE = "/course/:id/:id";
export const PROFILE = "/profile"



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
      }, {
        path: PROFILE,
        element: <Profile />
      }
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
  {
    path: COURSE,
    element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <Course />,
      },
    ]},

  {
    path: EACHCOURSE,
      element: (
      <ProtectedComponent>
        <Root />
      </ProtectedComponent>
    ),
    errorElement: <h1>An Error Has Occured</h1>,
    children: [
      {
        index: true,
        element: <EachCourseTopic />,
      },
    ]},
]);
const Router = () => {
  return(
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
   )
};

export default Router;
