import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

import {
  handleOpenModalLogin,
  handleSetCredentials
} from "../../feature/auth/authSlice";

import axios from '../../axios/axios'
import { convert_json } from "../../utils/convert_json";

const Container = styled.div`
  background-color: var(--theme-primary);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  transform: ${({ open }) => (open ? `translateY(0%)` : `translateY(-100%)`)};
  transition: transform 0.5s ease-in-out;
  display: grid;
  place-items: center;
  user-select: none;
  overflow: hidden;
  z-index:5000;
`;

const Borad = styled.div`
  max-width: 1440px;
  height: 80%;
  width: 80%;
  background-color: white;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ active }) =>
    active ? `1.4fr 1fr` : `1fr 1.4fr`};
  transition: all 0.3s ease-in;
`;

const BackgroundBorad = styled.div`
  position: absolute;
  background-color: black;
  height: 120%;
  width: 120%;
  rotate: 80deg;
  transform: ${({ active }) =>
    active ? `translateY(70%)` : `translateY(-50%)`};
  transition: all 0.5s ease-in-out;
  z-index: 500;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  opacity: ${({ active }) => (active ? `1` : `0`)};
  transition: all 0.5s ease-in-out;
  display: grid;
  place-items: center;
`;

const WrapperGroups = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TextTitle = styled.h3`
  margin: 0;
`;

const TextBody = styled.p`
  margin: 5% 0;
  line-height: 1.5;
  width: 70%;
`;

const WrapperInputGroups = styled.form`
  width: 80%;
  height: 55%;
  display: flex;
  justify-content: center;
  ${({ row }) =>
    row &&
    css`
      height: 72%;
      flex-direction: column;
      justify-content: start;
      align-items: center;
    `}
`;

const WrapperInput = styled.div`
  width: 100%;
  height: 15%;
  border: 1px solid var(--theme-primary);
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin: 2.5% 0;
  ${({ row }) =>
    row &&
    css`
      height: 58%;
    `}
`;

const WrapperOption = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  margin-bottom: 2.5%;
  align-items: center;
`;

const WrapperCheck = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  width: ${({ check }) => !check && `80%`};

  ::placeholder{
    ${({dataError}) => dataError && css`
      color: red;
    `}
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
  /* width: ; */
`;

const WrapperInputContent = styled.div`
  width: 80%;

  ${({ signUp }) =>
    signUp &&
    css`
      height: 79%;
    `}

  ${({ row }) =>
    row &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 20%;
    `}
`;

const GroupsName = styled.div`
  height: 100%;
  width: 48%;
`;

const Button = styled.button`
  height: 15%;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: var(--theme-primary);
  cursor: pointer;
  ${({ signUp }) =>
    signUp &&
    css`
      margin-top: 2.5%;
    `}
  :active {
    background-color: #ffc068;
  }
`;

const ModalLogin = () => {
  const { auth } = useSelector((state) => state);
  const [dataError, setDataError] = useState(false)
  const dispath = useDispatch();
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const formRegisterRef = useRef([])


  const modal = useRef(null);
  const [signUp, setSignUp] = useState(false);

  const handleClickSignUp = () => {
    setSignUp((prev) => !prev);
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!modal.current.contains(e.target)) {
        dispath(handleOpenModalLogin(false));
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    if (auth.modalLogin) return;
    const delay = setTimeout(() => {
      setSignUp(false);
    }, 400);

    return () => clearTimeout(delay);
  }, [auth.modalLogin]);

  useEffect(() => {
    if(dataError){
      usernameRef.current.value = ''
      passwordRef.current.value = ''
    }
  }, [ dataError ])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(usernameRef.current.value === '' || passwordRef.current.value === '') return
    try {
        const { data } = await axios.post("auth", {
          email: usernameRef.current.value,
          password: passwordRef.current.value,
          }, 
          { withCredentials: true }
        )
        dispath(handleOpenModalLogin(false))
        dispath(handleSetCredentials({accessToken: data?.accessToken, user: data?.username }))
    } catch (err) {
      if(Object.keys(err.response?.data).length > 0){
        setDataError(true)
      }
    }
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {

      const send_data = {
        username: formRegisterRef[0].value + " " + formRegisterRef[1].value,
        first_name: formRegisterRef[0].value,
        last_name: formRegisterRef[1].value,
        email: formRegisterRef[2].value,
        password: formRegisterRef[3].value,
      }

      const { data } = await axios.post("register", convert_json(send_data))
      setSignUp(false)
      
    } catch(err) {
      console.log(err,'======== err')
    }
  }

  return (
    <Container open={auth.modalLogin}>
      <Borad ref={modal} active={!signUp}>
        <BackgroundBorad
          active={signUp}
          onClick={handleClickSignUp}
        ></BackgroundBorad>
        <Content active={!signUp}>
          <WrapperGroups>
            <WrapperText>
              <TextTitle> Log in to Your Account</TextTitle>
              <TextBody>
                Log in to your account so you can continue building and editing
                your projects
              </TextBody>
            </WrapperText>
            <WrapperInputGroups onSubmit={(e) => handleSubmit(e)}>
              <WrapperInputContent>
                <label htmlFor="email">Email</label>
                <WrapperInput>
                  <Input ref={usernameRef} type={'text'} onClick={() => setDataError(false)} dataError={dataError} placeholder={dataError ? `info wrong`: `Enter your email address` } />
                </WrapperInput>
                <label htmlFor="password">Password</label>
                <WrapperInput>
                  <Input ref={passwordRef} type={"password"} onClick={() => setDataError(false)} dataError={dataError} placeholder={dataError ? `info wrong`: `Enter your password` } />
                </WrapperInput>
                <WrapperOption>
                  <WrapperCheck>
                    <Input check="true" type="checkbox" />
                    <Label htmlFor="rememberPassWord">Remember Me</Label>
                  </WrapperCheck>
                  <Link
                    to={"/profile"}
                    style={{ textDecoration: `none`, fontSize: "0.75rem" }}
                  >
                    Forgot password
                  </Link>
                </WrapperOption>
                <Button>Sign in</Button>
              </WrapperInputContent>
            </WrapperInputGroups>
          </WrapperGroups>
        </Content>
        <Content active={signUp}>
          <WrapperGroups>
            <WrapperText>
              <TextTitle> Sign Up for an Account </TextTitle>
              <TextBody>
                Let's get you all set up so you can start craeting your first
                account
              </TextBody>
            </WrapperText>
            <WrapperInputGroups onSubmit={(e) => handleSubmitRegister(e)} row>
              <WrapperInputContent row>
                <GroupsName>
                  <label htmlFor="email">First Name</label>
                  <WrapperInput row>
                    <Input type={"text"} ref={ el => formRegisterRef[0] = el } placeholder="Enter your firstname" />
                  </WrapperInput>
                </GroupsName>
                <GroupsName>
                  <label htmlFor="email">Last Name</label>
                  <WrapperInput row>
                    <Input type={"text"} ref={ el => formRegisterRef[1] = el } placeholder="Enter your lastname" />
                  </WrapperInput>
                </GroupsName>
              </WrapperInputContent>
              <WrapperInputContent signUp>
                <label htmlFor="email">Email</label>
                <WrapperInput>
                  <Input placeholder="Enter your email address" ref={ el => formRegisterRef[2] = el } />
                </WrapperInput>
                <label htmlFor="password">Password</label>
                <WrapperInput>
                  <Input type={"password"} placeholder="Enter your password" ref={ el => formRegisterRef[3] = el } />
                </WrapperInput>
                <Button signUp >Sign up</Button>
              </WrapperInputContent>
            </WrapperInputGroups>
          </WrapperGroups>
        </Content>
      </Borad>
    </Container>
  );
};

export default ModalLogin;
