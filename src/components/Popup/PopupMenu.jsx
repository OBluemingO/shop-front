import styled from "styled-components";
import axios from "../../axios/axios";
import { useDispatch } from "react-redux";
import { handleSetCredentials } from "../../feature/auth/authSlice";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  bottom: -150%;
  width: 100%;
  opacity: ${({ display }) => (display ? `1` : `0`)};
  transform: ${({ display }) =>
    display ? `translateY(0px)` : `translateY(-10px)`};
  transition: all 0.25s ease-in-out;
`;

const Menu = styled.div`
  width: 100%;
  text-align: center;
  padding: 5% 0;
  cursor: pointer;
  background-color: green;

  :hover {
    background-color: brown;
  }
`;

const PopupMenu = ({ drop, callLogOut }) => {
  const dispath = useDispatch();
  const handleLogout = async () => {
    try {
      dispath(handleSetCredentials({ accessToken: null, user: null }));
      const { data } = await axios.post(
        "auth/logout",
        {username: user},
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err, "=====");
    }
  };

  return (
    <Container display={drop}>
      <Link to={"user/account/profile"}>
        <Menu>My Profile</Menu>
      </Link>
      <Menu>PopupMenu</Menu>
      <Menu onClick={handleLogout}>logout</Menu>
    </Container>
  );
};

export default PopupMenu;
