import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../../Pages/AuthenticationPages/Signin";
import Signup from "../../Pages/AuthenticationPages/Signup";
import Welcome from "../../Pages/AuthenticationPages/Welcome";
import Dashboard from "../../Pages/Dashboard";
import Root from "../../Root";
import Quiz from "../../Pages/Quiz/Quiz";
import Instructions from "../../Pages/Quiz/Instructions";

// Export Route paths
export const ROOT = "/";
export const SIGNIN = "/signin";
export const SIGNUP = "/signup";
export const DASHBOARD = "/dashboard";
export const WELCOME = "/welcome";
export const QUIZ = "/quiz"
export const INSTRUCTIONS = "/instructions"


// Configure routes below
const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Root />,
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
  {
    path: QUIZ,
    element: <Quiz />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
  {
    path: INSTRUCTIONS,
    element: <Instructions />,
    errorElement: <h1>An Error Has Occured</h1>,
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
