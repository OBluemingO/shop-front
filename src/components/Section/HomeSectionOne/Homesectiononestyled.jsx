import styled, { css } from "styled-components";
import { media_size } from "../../../utils/media_queries";

const ContainerSectionOne = styled.div`

background-color: var(--bg-color);
height: 103.5%;
padding: 0 5%;
display: flex;
flex-direction: row;
max-height: 800px;

@media (max-width: ${media_size.laptops}) {
  flex-direction: column;
  /* max-height: 1500px; */
  height: 203.5%;
  align-items: center;
}
`;

const WrapperContent = styled.div`
  width: 50%;
  ${({ flex }) =>
    flex
      ? css`
          display: flex;
          justify-content: center;
          margin-top: 12%;
        `
      : css`
          display: block;
          margin-top: 18%;
  `}
  @media (max-width: ${media_size.laptops}) {
    width: 75%;
  }
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;

const DescText = styled.h3`
  margin: 2.5% 0 4% 0;
  line-height: 1.5;
`;

const WrapperButton = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  gap: 2.5%;

  @media (max-width: ${media_size.laptops}) {
    gap: none;
    justify-content: space-around;
  }
`;

const WrapperContentImage = styled.div`
  /* height: ${({ height }) => (height ? `80%` : `600px`)};
  width: ${({ width }) => (width ? `28%` : `500px`)}; */
  height: ${({ height }) => (height ? height : `600px`)};
  width: ${({ width }) => (width ? width : `500px`)};
  border-radius: ${({ round }) => round && `100%`};
  overflow: ${({ round }) => round && `hidden`};
  background-color: white;
  /* position: absolute; */
  position: relative;
  transform: ${({ outside }) => outside && `translateY(-50px)`};
`;

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Card = styled.div`
  /* height: 100px; */
  /* width: 300px; */
  height: 15%;
  width: 53%;
  position: absolute;
  background-color: black;
  border-radius: 20px;
  transform: ${({ posX }) => posX && `translateX(${posX})`};
  top: ${({ posY }) => posY && `${posY}`};
  display: flex;
  align-items: center;
  padding: 0 2%;
`;

const CardBigger = styled.div`
  /* height: 250px;
  width: 300px; */
  height: 47%;
  width: 56%;
  position: absolute;
  background-color: green;
  border-radius: 20px;
  transform: ${({ posX }) => posX && `translateX(${posX})`};
  top: ${({ posY }) => posY && `${posY}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  /* justify-content: center; */
`;

const MenuFood = styled.div``;

const WrapperIcon = styled.div`
  display: flex;
`;

const Address = styled.p`
  width: 75%;
  text-align: center;
`;

export {
  ContainerSectionOne,
  WrapperContent,
  TitleText,
  DescText,
  WrapperButton,
  WrapperContentImage,
  ImageSrc,
  Card,
  CardBigger,
  MenuFood,
  WrapperIcon,
  Address
}