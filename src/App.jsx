import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect } from 'react'

import Home from "./pages/Home"
import Product from "./pages/Product"
import Footer from "./components/Footer/Footer";

import PrivateRoutes from "./utils/PrivateRoute";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Notification from "./pages/Notification";
import History from "./pages/History";

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
          <Route element={<PrivateRoutes />}>
              <Route path='/user/account/profile' element={<Profile />} />
              <Route path='/user/account/support' element={<Support />} />
              <Route path='/user/account/history' element={<History />} />
              <Route path='/user/account/notification' element={<Notification />} />
          </Route>
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
