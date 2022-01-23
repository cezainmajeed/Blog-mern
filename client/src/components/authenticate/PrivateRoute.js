import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
    if(currentUser && !currentUser.emailVerified)
    {
      return (
        <Navigate to="/verify-email"/>
      );
    }
    else if(currentUser && currentUser.emailVerified)
    {
      return (
        <Outlet/>
      );
    }
    else
    {
      return (
        <Navigate to="/login"/>
      );
    }
}
