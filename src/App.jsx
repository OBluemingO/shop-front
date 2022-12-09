import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"
import axios from "./axios/axios"
import { useEffect } from "react"

import Home from "./pages/Home"
import Product from "./pages/Product"
import { useState } from "react";

const Container = styled.div`
  /* background-color: black; */
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  /* color: white; */
`

function App() {
  const [loading, setLoading] = useState(true)
  
  // useEffect(() => {

  //   const timmerLoading = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);

  //   return () => clearTimeout(timmerLoading)
  // },[])

  return (
    <BrowserRouter>
      {/* {
        loading ? <Container>loading</Container> : null
      } */}
      <Container>
        <GlobalStyled />
        <NavHome />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Product" element={ <Product />} />
        </Routes>
      </Container>
      <ModalLogin />
    </BrowserRouter>
  )
}

export default App
