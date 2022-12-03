import styled from "styled-components";

const Container = styled.div`
  height: 108vh;
  max-height: 870px;
  padding-top: 15%;
  position: relative;
`;

const BackgroundContainer = styled.div`
    position: absolute;
    left: ${({deg}) => deg ? `-10%` : `50%`};
    top: ${({deg}) => deg ? `60%` : `80%`};
    transform: translate(-50%, -50%);
    width: 600px;
    height: 380px;
    scale: ${({deg}) => deg && `0.6`};
    background-color: var(--theme-primary);
    border-radius: 30px;
    rotate: ${({deg}) => deg ? `${deg}deg` : `45deg`};
`

const WrapperCard = styled.div`
  display: flex;
  height: 100%;
  gap: 2.5%;
  align-items: center;
  justify-content: center;
`

export {
  Container,
  BackgroundContainer,
  WrapperCard
}