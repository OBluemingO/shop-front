import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import Home from "./pages/Home"

const Container = styled.div`
  /* background-color: black; */
  /* max-width: 1440px; */
  /* overflow-x: hidden; */
  height: 100vh;
  margin: 0 auto;

`

function App() {
  return (
    <>
      <Container>
        <GlobalStyled />
        <NavHome />
        <Home />
      </Container>
      <ModalLogin />
    </>
  )
}

export default App
