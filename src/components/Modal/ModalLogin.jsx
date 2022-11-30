import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { json, Navigate } from "react-router-dom"
import { handleOpenModalLogin, handleLogin } from "../../feature/auth/authSlice"

const Container = styled.div`
  background-color: hsl(0, 0%, 0%,70%);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  transform: ${({open}) => open ? `translateY(0%)`: `translateY(-100%)`};
  transition: transform 0.5s ease-in-out;
  display: grid;
  place-items: center;
  user-select: none;
  overflow: hidden;
`

const WrapperBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: gray;
  display: -webkit-inline-box;
  position: relative;
  overflow: hidden;
`

const ImageLogin = styled.div`
  width: 40%;
  height: 100%;
  transform: ${({register}) => register ? `translateX(-100%)` : `translateX(0%)`};
  opacity: ${({register}) => register ? `0` : `1`};
  transition: all 0.5s ease-in-out;
`

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Input = styled.input`
  padding: 0;
  border: none;
  /* height: 10%;
  width: 50%; */
`

const WrapperSignup = styled.div`
  display: flex;
  flex-direction: column;
  transform: ${({register}) => register ? `translateX(-150%)` : `translateX(0%)`};
  opacity: ${({register}) => register ? `1` : `0`};
  transition: all 0.5s ease-in-out;
  width:50%;
  height: 100%;
  justify-content: center;
  background-color: green;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap:5%;
  width: 60%;
  height: 100%;
  margin: auto;
  justify-content: center;
  transform: ${({register}) => register ? `translateX(100%)` : `translateX(0%)`};
  opacity: ${({register}) => register ? `0` : `1`};
  transition: all 0.5s ease-in-out;
`

const Label = styled.label`
`

const Button = styled.button`
  width: 100%;
`

const WrapperButton = styled.div`
  display: flex;
  padding-top: ${({top}) => top && `10%`};
`

const ModalLogin = () => {

  const {auth} = useSelector(state => state)
  const dispath = useDispatch()
  const modalRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const userNameRef = useRef()
  const emailRegisterRef = useRef()
  const passwordRegisterRef = useRef()

  const [register, setRegister] = useState(false)

  useEffect(() => {
    if(!register){
      userNameRef.current.value = ''
      emailRegisterRef.current.value = ''
      passwordRegisterRef.current.value = ''
    }
  }, [register])

  const handleSummitLogin = async () => {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw_data = JSON.stringify({
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw_data,
    };

    try {
      const result = await fetch("http://localhost:3500/api/login", requestOptions)
      if(![200,201].includes(result.status)) return false 
      const data = await result.json()

      window.sessionStorage.setItem("user_data", JSON.stringify(data.data_user))

      dispath(handleOpenModalLogin(false))
      dispath(handleLogin(true))
    } catch(err) {
      console.log(err)
    }
  }
  
  const handleSubmitRegister = async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw_data = JSON.stringify({
      "username": userNameRef.current.value,
      "email": emailRegisterRef.current.value,
      "password": passwordRegisterRef.current.value
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw_data,
    };

    try {
      const result = await fetch("http://localhost:3500/api/register", requestOptions)
      if(![200,201].includes(result.status)) return false 
      setRegister(false)
    } catch(err) {
      console.log(err)
    }


  }
  
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && auth.modalLogin) {
        dispath(handleOpenModalLogin(false))
        setRegister(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  },[modalRef, auth.modalLogin])

  return (
    <Container open={auth.modalLogin}>
      <WrapperBox ref={modalRef}>
        <ImageLogin register={register}>
          <ImageSrc src="https://fakeimg.pl/300/" />
        </ImageLogin>
        <WrapperInput register={register} >
          <Label htmlFor="fname"> Email : {''} </Label>
          <Input ref={emailRef} type={'email'} />
          <Label htmlFor="fname"> password :{' '} </Label>
          <Input ref={passwordRef} type={'password'} />
          <WrapperButton>
            <Button onClick={handleSummitLogin}>login</Button>
            <Button>cancel</Button>
          </WrapperButton>
          <Button onClick={() => setRegister(true)}>sign up</Button>
        </WrapperInput>
        <WrapperSignup register={register}>
          <Label>Username:</Label>
          <Input ref={userNameRef} type={'text'} />
          <Label>Email:</Label>
          <Input ref={emailRegisterRef} type={'email'} />
          <Label>password:</Label>
          <Input ref={passwordRegisterRef} type={'password'} />
          <WrapperButton top >
            <Button onClick={handleSubmitRegister}>confirm</Button>
            <Button onClick={() => setRegister(false)}>back</Button>
          </WrapperButton>
        </WrapperSignup>
      </WrapperBox>
      {/* {validate && (
          <Navigate to="/Profile" replace={true} />
        )} */}
    </Container>
  )
}

export default ModalLogin