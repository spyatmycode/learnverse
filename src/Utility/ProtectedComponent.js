import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { SIGNIN } from "./Routers/Router";
// import { useUser } from "../Hooks/Auth";


const ProtectedComponent = ({ children }) => {
  // const [user, loading, error] = useUser();
  const [user, setUser] = useState(false)


  if (!user /* && !loading */) {
    return <Navigate to={SIGNIN} />;
  }
  return <>{children}</>;
};

export default ProtectedComponent;
