import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const { auth } = useSelector((state) => state);
  console.log(auth);

  useEffect(() => {
    const cookies = document.cookie.split(';').reduce(
        (cookies, cookie) => {
            const [name, val] = cookie.split('=').map(c => c.trim());
            cookies[name] = val;
            return cookies;
        }, {});
    console.log(Object.keys(cookies).length !== 0,'========', cookies)
  },[])

  return auth.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ showLogin: true }} />
  );
};

export default PrivateRoutes;
