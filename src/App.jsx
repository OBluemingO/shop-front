import styled from "styled-components"
import ModalLogin from "./components/Modal/ModalLogin"
import { NavHome } from "./components/Navbar/NavHome"
import { GlobalStyled } from "./Globalstyled"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState } from 'react'
import { useRef } from "react";

import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import Home from "./pages/Home"
import Product from "./pages/Product"
import Footer from "./components/Footer/Footer";

import Persistent from "./components/Auth/Persistent";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Notification from "./pages/Notification";
import History from "./pages/History";
import { useEffect } from "react";

const Container = styled.div`
  max-width:  2560px;
  height: 100vh;
  margin: 0 auto;
  /* position: relative; */
  padding-top: 5%;
`

const WrapperIcon = styled.div`
  position: fixed;
  bottom: 20%;
  right: 5%;
  opacity: 0;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`

function App() {
  // useEffect(() => {
  //   window.scrollTo({top:0, behavior: 'auto'})
  // }, [])

  const refScrollUp = useRef()

  const [scrollY, setScrollY] = useState(0)

  const handleScrollTop = () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }
    
    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  },[])

  useEffect(() => {
    const body = document.body,
    html = document.documentElement;

    const height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    if(scrollY > (height - 1500)){
      refScrollUp.current.style.opacity = 1
    }
    else{
      refScrollUp.current.style.opacity = 0
    }
  },[scrollY])
  
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyled />
        <NavHome clone />
        <Routes>
          <Route element={<Persistent />}>
              <Route path='/user/account/profile' element={<Profile />} />
              <Route path='/user/account/support' element={<Support />} />
              <Route path='/user/account/history' element={<History />} />
              <Route path='/user/account/notification' element={<Notification />} />
          </Route>

          <Route path="/" element={ <Home />} />
          <Route path="/Product" element={ <Product />} />
        </Routes>
        <WrapperIcon ref={refScrollUp} onClick={() => handleScrollTop()}>
          <BsFillArrowUpCircleFill size={50} color={`white`} />
        </WrapperIcon>
        <Footer />
      </Container>
      <ModalLogin />
    </BrowserRouter>
  )
}

export default App
