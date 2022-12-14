import styled from "styled-components";
import ButtonRound from "../Buttons/ButtonRound";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { handleActiveUser, handleLogin, handleLogout, handleOpenModalLogin } from "../../feature/auth/authSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import PopupMenu from "../Popup/PopupMenu";

const WrapperMenu = styled.div`
  display: flex;
  height: 7.5%;
  justify-content: space-between;
  align-items: center;
  padding: 1% 5%;
  background-color: var(--bg-color);
  position: ${({clone}) => clone && `fixed`};
  width: ${({clone}) => clone && `90%`};
  z-index: 3000;
  top: ${({clone}) => clone && `0`};
  /* top: ${({clone}) => clone && `0`}; */
`;

const GroupsMenu = styled.div`
  display: flex;
  gap: 2.5%;
  width: 70%;
  align-items: center;
`

const Brand = styled.h2`
  margin: 0;
  margin-right: 8%;
  ::after{
    content: '.';
    padding: 0;
    margin: 0;
    left: -5px;
    position: relative;
    color: red;
  }
`;

const ListMenu = styled.div`
  color: ${({firstWord}) => firstWord ? `var(--text-gray)`:`var(--text-gray-less)`};
`;

const DropDownName = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  position: relative;
`

export const NavHome = ({clone}) => {
  const menu_list = [`Home`,`Product`, `How It Work`, `Features`, `Pricing`, `FAQs`];
  const { auth } = useSelector(state => state)
  const [dropDown, setDropDown] = useState(false)

  const dispath = useDispatch()

  const handleClickModal = () => {
    dispath(handleOpenModalLogin(true))
  }
  
  const handleLogout = (result) => {
    // setLogout(result)
    console.log('will remove soon')
  }

  return (
    <WrapperMenu clone={clone}>
      <GroupsMenu>
        <Brand> Foody </Brand>
        {
          menu_list.map((el, index) => (
            <Link to={index === 0 ? `/`: `/${el}`} key={`menu-navbar-${index}`} style={{textDecoration: `none`}} >
              <ListMenu firstWord={index == 0} >{el}</ListMenu>
            </Link>
            ))
          }
      </GroupsMenu>
      {
        auth.user ?
        <DropDownName onClick={() => setDropDown(prev => !prev)}>
          {auth.user} <RiArrowDropDownLine style={{ cursor: 'pointer' }} />
          <PopupMenu drop={dropDown} callLogOut={(result) => handleLogout(result)} />
        </DropDownName>
        : 
        <ButtonRound bgColor={`true`} height={'90%'} callBackClick={() => handleClickModal()} >Sign in </ButtonRound>
      }
    </WrapperMenu>
  );
};
