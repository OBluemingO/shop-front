import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef } from "react"
import { handleOpenModalLogin } from "../../feature/auth/authSlice"

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
`

const WrapperBox = styled.div`
  width: 50%;
  height: 50%;
  background-color: gray;
  display: flex;
  position: relative;
`

const ImageLogin = styled.div`
  width: 35%;
  height: 100%;
`

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Input = styled.input`
  /* height: 10%;
  width: 50%; */
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap:5%;
  width: 60%;
  height: 100%;
  align-items: center;
  /* transform: translateX(50%); */
  /* left: -50%; */
  /* position: absolute; */
  justify-content: center;
`

const Label = styled.label`
`

const Button = styled.button`

`

const WrapperButton = styled.div`
  display: flex;
`

const ModalLogin = () => {

  const {auth} = useSelector(state => state)
  const dispath = useDispatch()
  const modalRef = useRef()

  
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && auth.modalLogin) {
        dispath(handleOpenModalLogin(false))
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
        <ImageLogin>
          <ImageSrc src="https://fakeimg.pl/300/" />
        </ImageLogin>
        <WrapperInput >
          <Label htmlFor="fname"> Email : {''}
            <Input type={'email'} />
          </Label>
          <Label htmlFor="fname"> password :{' '}
            <Input type={'password'} />
          </Label>
          <WrapperButton>
            <Button>login</Button>
            <Button>cancel</Button>
          </WrapperButton>
          <Button>sign up</Button>
        </WrapperInput>
      </WrapperBox>
    </Container>
  )
}

export default ModalLogin