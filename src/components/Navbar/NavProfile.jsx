import styled, { css } from "styled-components";
import { RiAccountPinCircleFill, RiNotification3Fill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  /* position: absolute; */
  /* left: 0; */
  height: 100%;
  width: 30%;
  background-color: green;
`;

const GroupsMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Menu = styled.li`
  padding: 5% 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;

  ${({ active }) =>
    active &&
    css`
      background-color: #333333;
      color: white;
    `}

  :hover {
    background-color: #333333;
    color: white;

    svg {
      fill: white;
    }
  }
`;

const NavProfile = () => {
  const localPath = useLocation();
  const [activePath, setActivePath] = useState({
    account: true,
    history: false,
    notification: false,
    support: false,
  });

  useEffect(() => {
    const split_path_txt = localPath?.pathname.split("/");
    const len = localPath?.pathname.split("/").length;
    switch (split_path_txt[len - 1]) {
      case "profile":
        setActivePath({
          account: true,
          history: false,
          notification: false,
          support: false,
        });
        break;
      case "history":
        setActivePath({
          account: false,
          history: true,
          notification: false,
          support: false,
        });
        break;
      case "notification":
        setActivePath({
          account: false,
          history: false,
          notification: true,
          support: false,
        });
        break;
      case "support":
        setActivePath({
          account: false,
          history: false,
          notification: false,
          support: true,
        });
        break;
      default:
        break;
    }
  }, [])

  const navigate = useNavigate()

  const handleOnClick = async (e) => {
    const children = Array.from(e.target.childNodes)
    const path = await children[1].data.toLowerCase().trim()
    switch (path){
        case "account":
            navigate('/user/account/profile')
            break
        case "history":
            navigate('/user/account/history')
            break
        case "notification":
            navigate('/user/account/notification')
            break
        case "support":
            navigate('/user/account/support')
            break
        default:
            break
    }
  }


  return (
    <Container>
      <GroupsMenu onClick={handleOnClick}>
        <Menu active={activePath.account}>
          <RiAccountPinCircleFill color="#FB9300" size={30} /> Account
        </Menu>
        <Menu active={activePath.history}>
          <FaHistory color="#FB9300" size={30} /> History
        </Menu>
        <Menu active={activePath.notification}>
          <RiNotification3Fill color="#FB9300" size={30} /> Notification
        </Menu>
        <Menu active={activePath.support}>
          <MdContactSupport color="#FB9300" size={30} /> Support
        </Menu>
      </GroupsMenu>
    </Container>
  );
};

export default NavProfile;
