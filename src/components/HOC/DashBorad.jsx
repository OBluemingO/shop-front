import styled from "styled-components"
import NavProfile from "../Navbar/NavProfile"

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100%;
  display: flex;
`

const WrapperContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
`

const DashBorad = ({children}) => {
  return (
    <Container>
      <NavProfile />
      <WrapperContent>
        <Content>
            {children}
        </Content>
      </WrapperContent>
    </Container>
  )
}

export default DashBorad