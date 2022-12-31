import styled, { css } from "styled-components";
import { media_size } from "../../../utils/media_queries";

const ContainerSectionOne = styled.div`
    background-color: var(--bg-color);
    height: 103.5%;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    max-height: 800px;

    /* @media (max-width: ${media_size.laptops}) {
        flex-direction: column;
        height: 203.5%;
        align-items: center;
    }  */
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
              `}/* @media (max-width: ${media_size.laptops}) {
        width: 75%;
    } */
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

    /* @media (max-width: ${media_size.laptops}) {
        gap: none;
        justify-content: space-around;
    } */
`;

export const WrapperBackground = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 50px;
`;

const WrapperContentImage = styled.div`
    height: ${({ height }) => (height ? height : `600px`)};
    width: ${({ width }) => (width ? width : `500px`)};
    border-radius: ${({ round }) => round && `100%`};
    overflow: ${({ round }) => round && `hidden`};
    position: ${({ outside }) => (outside ? `absolute` : `relative`)};
    transform: ${({ outside }) => outside && `translateY(-50px)`};
`;

const ImageSrc = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Card = styled.div`
    height: 15%;
    width: 53%;
    position: absolute;
    background-color: white;
    border-radius: 20px;
    transform: ${({ posX }) => posX && `translateX(${posX})`};
    top: ${({ posY }) => posY && `${posY}`};
    /* display: flex;
  align-items: center; */
    padding: 0 2%;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    place-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const CardBigger = styled.div`
    /* height: 250px;
  width: 300px; */
    height: 30%;
    width: 56%;
    position: absolute;
    background-color: white;
    border-radius: 20px;
    transform: ${({ posX }) => posX && `translateX(${posX})`};
    top: ${({ posY }) => posY && `${posY}`};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin: 10% 2% 2% 2%; */
    /* justify-content: center; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const MenuFood = styled.div`
    margin-top: 20%;
    margin-bottom: 2%;
`;

const WrapperIcon = styled.div`
    display: flex;
`;

const Address = styled.p`
    width: 75%;
    text-align: center;
`;

export const Contentcard = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperIconArrow = styled.div`
    position: absolute;
    bottom: 5%;
    right: 2%;
`;

export const Text = styled.p`
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;
    padding: 0 15px;
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
    Address,
};
