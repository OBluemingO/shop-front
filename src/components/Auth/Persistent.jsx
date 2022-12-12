import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Persistent = () => {
  const { auth } = useSelector((state) => state);
  console.log(auth,'====');
  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ showLogin: true }} />
  );
};

export default Persistent;
