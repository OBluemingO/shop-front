import styled from "styled-components"
import ButtonRound from "../Buttons/ButtonRound"

const Container = styled.div`
    /* height: 505px; */
    height: 372px;
    width: 340px;
    background-color: aqua;
    border-radius: 30px;
    z-index: 300;
`

const WrapperContent = styled.div`
  padding: 10%;
  height: 80%;
`

const TextHeader = styled.h3`
  margin: 0;
  text-transform: capitalize;
`

const TextBody = styled.p`
  margin: 0;
  margin-top: 10px;
  color: var(--text-gray-less);
`

const GroupsList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.75;
`

const WrapperButton = styled.div`
  height: 10%;
  width: 100%;
  display: grid;
  place-items: center;
`

const ChildrenList = styled.li`
`

const TextPricing = styled.h1`
  margin: 0;
  margin-top: 2px;

`

const PricingCard = () => {
  return (
    <Container>
      <WrapperContent>
        <TextHeader>test</TextHeader>
        <TextBody>test</TextBody>
        <TextPricing>$00</TextPricing>
        <GroupsList>
          <ChildrenList>Lorem ipsum dolor sit amet.</ChildrenList>
          <ChildrenList>Lorem ipsum dolor sit amet.</ChildrenList>
          <ChildrenList>Lorem ipsum dolor sit amet.</ChildrenList>
          <ChildrenList>Lorem ipsum dolor sit amet.</ChildrenList>
          <ChildrenList>Lorem ipsum dolor sit amet.</ChildrenList>
        </GroupsList>
        <WrapperButton >
          <ButtonRound width={`50%`} >Get Started</ButtonRound>
        </WrapperButton>
      </WrapperContent>
    </Container>
  )
}

export default PricingCard