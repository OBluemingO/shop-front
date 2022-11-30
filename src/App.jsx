import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Profile from "./pages/Profile"

const Container = styled.div`
  /* background-color: black; */
  /* max-width: 1440px; */
  /* overflow-x: hidden; */
  height: 100vh;
  margin: 0 auto;

`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyled />
        <NavHome />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/profile" element={ <Profile />} />
        </Routes>
      </Container>
      <ModalLogin />
    </BrowserRouter>
  )
}

export default App
