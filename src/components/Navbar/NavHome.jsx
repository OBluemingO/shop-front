import styled from "styled-components";
import ButtonRound from "../Buttons/ButtonRound";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { handleOpenModalLogin } from "../../feature/auth/authSlice";
import { useEffect } from "react";

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
  const dispath = useDispatch()

  const handleClickModal = () => {
    dispath(handleOpenModalLogin(true))
  }

  return (
    <WrapperMenu>
      <GroupsMenu>
        <Brand> Foody </Brand>
        {
          menu_list.map((el, index) => (
            <ListMenu key={`menu-navbar-${index}`} firstWord={index == 0} >{el}</ListMenu>
            ))
          }
      </GroupsMenu>
      <ButtonRound bgColor={`true`} height={'90%'} callBackClick={() => handleClickModal()} >Sign in </ButtonRound>
    </WrapperMenu>
  );
};
