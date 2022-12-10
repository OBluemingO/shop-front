import styled from "styled-components"
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  justify-content: space-around;
`

const WrapperContainer = styled.div`
  width: 100%;
  height: 40%;
  background-color: var(--theme-second);
  color: white;
  display: flex;
  align-items: center;
`

const GroupList = styled.ul`
  list-style: none;
`

const Menu = styled.li`
 color: ${({first}) => !first && `var(--text-gray-less)`};
 font-size: ${({first}) => first && `1.25rem`};
 margin-bottom: 5%;
`

const WrapperIcon = styled.div`
  display: flex;
  gap: 1.5%;
`

const Footer = () => {
  return (
    <WrapperContainer>
      <Container>
        <GroupList>
          <Menu first={'true'}>Foody</Menu>
          <Menu>Power up your business with our best digital <br/> marketing services.</Menu>
          <WrapperIcon>
            <BsFacebook color="#FB9300" />
            <AiFillInstagram color="#FB9300" />
            <AiFillLinkedin color="#FB9300" />
          </WrapperIcon>
        </GroupList>
        <GroupList>
          <Menu first={'true'}>Menu</Menu>
          <Menu>Home</Menu>
          <Menu>How It Work</Menu>
          <Menu>Features</Menu>
          <Menu>Pricing</Menu>
          <Menu>FAQs</Menu>
        </GroupList>
        <GroupList>
          <Menu first={'true'}>Contact Us</Menu>
          <Menu>phayuphat118@gmail.com</Menu>
          <Menu>082-591-4037</Menu>
          <Menu>Bangkok, Thailand</Menu>
        </GroupList>
      </Container>
    </WrapperContainer>
  )
}

export default Footer