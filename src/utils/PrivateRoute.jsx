import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce(
        (cookies, cookie) => {
            const [name, val] = cookie.split('=').map(c => c.trim());
            cookies[name] = val;
            return cookies;
        }, {});
  },[])

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ showLogin: true }} />
  );
};

export default PrivateRoutes;
