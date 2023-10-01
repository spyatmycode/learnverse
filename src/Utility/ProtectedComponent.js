import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Hooks/AuthHook";
import { SIGNIN } from "./Routers/Router";

const ProtectedComponent = ({ children }) => {
  const [user, loading, error] = useUser();

  if (!user && !loading) {
    return <Navigate to={SIGNIN} />;
  }
  return <>{children}</>;
};

export default ProtectedComponent;
