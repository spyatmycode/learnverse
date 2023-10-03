import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Hooks/AuthHook";
import { WELCOME } from "./Routers/Router";

const ProtectedComponent = ({ children }) => {
  const [userInfo, isLoading] = useUser();


  if (!userInfo && !isLoading) {
    return <Navigate to={WELCOME} />;
  }
  return <>{children}</>;
};

export default ProtectedComponent;
