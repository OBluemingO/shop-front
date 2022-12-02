import { useCookies } from "react-cookie";
import styled from "styled-components";
import axios from '../../axios/axios'


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

const PopupMenu = ({ drop }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const handleLogout = () => {
        // console.log(document,'========= document document')
        // const cookie = document.cookie.split(" ")[1]
        console.log(window,'======== cookies cookies')
        console.log(document.cookie,'======== cookies cookies')
        // const { data } = await axios.post("auth/logout",{
        //     cookie: cookie
        // })
        // window.localStorage.setItem('username', data.username )
        // dispath(handleOpenModalLogin(false))
    }

    return (
        <Container display={drop}>
        <Menu>PopupMenu</Menu>
        <Menu>PopupMenu</Menu>
        <Menu onClick={handleLogout}>logout</Menu>
        </Container>
    );
};

export default PopupMenu;
