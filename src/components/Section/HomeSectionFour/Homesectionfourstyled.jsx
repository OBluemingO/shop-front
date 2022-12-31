import styled from "styled-components";

const Container = styled.div`
  height: 108vh;
  max-height: 870px;
  padding-top: 5%;
  background-color: var(--bg-color);
  position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    left: 40%;
    top: 80%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 380px;
    background-color: var(--theme-primary);
    border-radius: 30px;
    rotate: 45deg;
`

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  gap: 8% 5%;
  align-items: center;
  justify-content: center;
  padding: 0 20%;
  max-width: 780px;
  margin: 0 auto;
`

const WrapperLottie = styled.div`
  position: absolute;
  top: -12%;
  right: 10%;
`

export {
  Container,
  BackgroundContainer,
  WrapperCard,
  WrapperLottie
}