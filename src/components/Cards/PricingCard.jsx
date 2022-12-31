import styled from "styled-components"
import ButtonRound from "../Buttons/ButtonRound"

const Container = styled.div`
    /* height: 505px; */
    height: 372px;
    width: 340px;
    background-color: ${({mode}) => mode === 'Normal' ? `black` : `white`};
    color: ${({mode}) => mode === 'Normal' ? `white` : `black`};
    border-radius: 30px;
    z-index: 300;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
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
  li{
    color: ${({mode}) => mode === 'Normal' ? `#777777` : `black`};
  }
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

const PricingCard = ({price, mode}) => {
  return (
    <Container mode={mode}>
      <WrapperContent>
        <TextHeader>{mode}</TextHeader>
        <TextBody>1 month for free</TextBody>
        <TextPricing>${price}</TextPricing>
        <GroupsList mode={mode}>
          <ChildrenList>No actnakiln tees</ChildrenList>
          <ChildrenList>No hidden costs ti</ChildrenList>
          <ChildrenList>No revenue based noting</ChildrenList>
          <ChildrenList>Unliked orders included</ChildrenList>
          <ChildrenList>(fair use) = Only Smartphone</ChildrenList>
        </GroupsList>
        <WrapperButton >
          <ButtonRound width={`50%`} bgColor={mode === 'Normal' && 'true'} >Get Started</ButtonRound>
        </WrapperButton>
      </WrapperContent>
    </Container>
  )
}

export default PricingCard