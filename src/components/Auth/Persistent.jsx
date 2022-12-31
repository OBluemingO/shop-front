import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import useRefreshToken from "../../hook/useRefreshToken";

const Persistent = () => {
  const { auth } = useSelector((state) => state);
  // console.log(auth,'====');
  // const refresh = useRefreshToken()

  useEffect(() => {

  },[])

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ showLogin: true }} />
  );
};

export default Persistent;
