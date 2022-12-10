import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect } from 'react'

import Home from "./pages/Home"
import Product from "./pages/Product"
import Footer from "./components/Footer/Footer";

const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
`

function App() {
  useLayoutEffect(() => {
    window.scrollTo({top:0})
  }, [])
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyled />
        <NavHome />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Product" element={ <Product />} />
        </Routes>
        <Footer />
      </Container>
      <ModalLogin />
    </BrowserRouter>
  )
}

export default App
