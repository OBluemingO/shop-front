import styled, {css} from "styled-components";
import { device } from "../../../utils/media_queries";

const ContainerThird = styled.div`
  display: flex;
  max-height: 800px;
  height: 100%;
  padding: 0 5%;
  position: relative;
  align-items: center;
`;

const LineDetechItem = styled.div`
  height: ${({height}) => height ? `${height}` : `100%`};
  width: 1.5%;
  right: -10%;
  border-radius: 20px;
  position: absolute;
  top: 0;
  background-color: ${({color}) => color ? `var(--bg-color)` : `var(--theme-primary)`};
  transform: ${({posY}) => posY ? `translateY(${posY})` : `translateY(0%)`};
  transition: transform 0.25s ease-in-out;
`

const WrapperContentSectionThrid = styled.div`
  height: 50%;
  display: ${({center}) => center ? `flex` : `block`};
  justify-content: ${({center}) => center && `center`};
  
  ${({left}) => left ? css`
    width:40%;
    /* padding-left: 10%; */
  ` : css`
    width:60%;
    /* padding-left: 15%; */
    z-index: 0;
    transform:translateX(5%);
  `}
`

const TextTitle = styled.h1`
  margin: 0;
`;

const MenuWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* align-items: center; */
  margin-top: 10%;
  /* gap: 5%; */
  position: relative;
`

const Menu = styled.div`
  background-color: black;
  color: white;
  text-transform: capitalize;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: ${({first}) => !first && `5%`};
  cursor: pointer;

  :before{
    content: ' ';
    display: ${({active}) => active ? `inline-block`: `none` };
    background-color: var(--theme-primary);
    height: 100%;
    width: 1%;
  }
`

const CircleIndex = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: var(--theme-primary);
  display: grid;
  place-items: center;
  margin: 0 15% 0 10%; 
`

const WrapperContentImage = styled.div`
  height: ${({ height }) => (height ? height : `600px`)};
  width: ${({ width }) => (width ? width : `500px`)};
  border-radius: ${({ round }) => round && `100%`};
  overflow: ${({ round }) => round && `hidden`};
  background-color: white;
  position: relative;
  transform: ${({ outside }) => outside && `translateY(-50px)`};
`;

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const WrapperWave = styled.div`
  position: absolute;
  top: ${({rotation}) => rotation ? `-65%`: `-54%`};
  /* top: ${({rotation}) => rotation ? `clamp(-64%, -75%, -85%)`: `clamp(-50%, -30%, -20%)`}; */
  left: 0;
  rotate: ${({rotation}) => rotation ? `180deg`: `0deg`};
  height: 100%;
  width: 100%;
  z-index:1;

  @media (max-width: 1600px) {
    top: ${({rotation}) => rotation ? `-80%`: `-52%`};
  }

  @media ${device.laptopL} {
    top: ${({rotation}) => rotation ? `-80%`: `-45%`};
  }
`

const WrapperIcon = styled.div`
  position: absolute;
  bottom: 0%;
  right:0;
`

export {
  ContainerThird,
  WrapperContentSectionThrid,
  TextTitle,
  MenuWrapper,
  Menu,
  WrapperContentImage,
  ImageSrc,
  LineDetechItem,
  CircleIndex,
  WrapperWave,
  WrapperIcon
}