import styled from "styled-components";
import ButtonRound from "../Buttons/ButtonRound";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { handleLogin, handleOpenModalLogin } from "../../feature/auth/authSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const WrapperMenu = styled.div`
  display: flex;
  height: 7.5%;
  justify-content: space-between;
  align-items: center;
  padding: 2% 5% 0 5%;
  background-color: var(--bg-color);
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

export const NavHome = () => {
  const menu_list = [`Home`, `How It Work`, `Features`, `Pricing`, `FAQs`];
  const { auth } = useSelector(state => state)
  const [dataUser, setDataUser] = useState(null)
  const dispath = useDispatch()

  const handleClickModal = () => {
    dispath(handleOpenModalLogin(true))
  }

  useEffect(() => {
    const data_username = window.sessionStorage.getItem("user_data")
    if(data_username === null || data_username === undefined || data_username === 'undefined') return 
    setDataUser(JSON.parse(data_username))
    dispath(handleLogin(true))
  }, [auth.isLogin])

  return (
    <WrapperMenu>
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
      auth.isLogin && dataUser?.username ? `${dataUser.username}`: 
      <ButtonRound bgColor={`true`} height={'90%'} callBackClick={() => handleClickModal()} >Sign in </ButtonRound>
      }
    </WrapperMenu>
  );
};
