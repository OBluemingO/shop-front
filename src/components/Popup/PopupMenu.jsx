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

const PopupMenu = ({ drop, callLogOut }) => {

    const handleLogout = async() => {
        const { data } = await axios.post("auth/logout")
        window.localStorage.removeItem('username')
        callLogOut(true)
        // document.cookie = ''
        // console.log(data,'======== after logout')
        const mydate = new Date();
        mydate.setTime(mydate.getTime() - 1);
        document.cookie = "username=; expires=" + mydate.toGMTString(); 
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
