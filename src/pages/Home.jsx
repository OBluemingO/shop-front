import styled, { css } from "styled-components";
import ButtonRound from "../components/Buttons/ButtonRound";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

const ContainerSectionOne = styled.div`
  background-color: var(--bg-color);
  height: 103.5%;
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  max-height: 800px;
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
`;

const WrapperContentImage = styled.div`
  /* height: ${({ height }) => (height ? `80%` : `600px`)};
  width: ${({ width }) => (width ? `28%` : `500px`)}; */
  height: ${({ height }) => (height ? height : `600px`)};
  width: ${({ width }) => (width ? width : `500px`)};
  border-radius: ${({ round }) => round && `100%`};
  overflow: ${({ round }) => round && `hidden`};
  background-color: white;
  position: relative;
  transform: ${({ outside }) => outside && `translateY(-50px)`};
`;

const Card = styled.div`
  height: 100px;
  width: 300px;
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
  height: 250px;
  width: 300px;
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

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MenuFood = styled.div``;

const WrapperIcon = styled.div`
  display: flex;
`;

const Address = styled.p`
  width: 75%;
  text-align: center;
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextTitle = styled.h1`
  margin: 0;
`;

const TextDesc = styled.p`
  width: 50%;
  text-align: center;
`;

const ContainerSectionMuti = styled.div`
  /* height: 100%; */
  height: 814px;
  background-color: yellow;
  padding-top: 15%;
`;

const WrapperImageGroup = styled.div`
  display: flex;
  max-height: 380px;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 5%;
  padding-top: 5%;
`;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* box-shadow: ${({ shadow }) =>
    shadow && `0px 8px 6px 5px rgba(0,0,0,0.21)`}; */
  box-shadow: 0px 8px 6px 5px rgba(0, 0, 0, 0.21);
  scale: ${({ shadow }) => (shadow ? `1` : `0.9`)};
`;

const ImageWrapper = styled.div`
  max-width: 240px;
  max-height: 225px;
  height: 100%;
  width: 100%;
`;

const TextDetail = styled.p``;

const ContainerThird = styled.div`
  display: flex;
  max-height: 800px;
  height: 100%;
  padding: 0 5%;
  align-items: center;
`;

const WrapperContentSectionThrid = styled.div`
  height: 50%;
  width: 50%;
  display: ${({center}) => center ? `flex` : `block`};
  justify-content: ${({center}) => center && `center`};
`

const MenuWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* align-items: center; */
  margin-top: 10%;
  gap: 5%;

`

const Menu = styled.div`
  border: 1px solid green;
  width: 50%;
  height: 15%;
  display: grid;
  place-items: center;
`

const Home = () => {
  const [activeFoodMenu, setActiveFoodMenu] = useState([true,false,false])

  return (
    <>
      <ContainerSectionOne>
        <WrapperContent>
          <TitleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </TitleText>
          <DescText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur tempore dolores ducimus adipisci optio consequatur
            cupiditate temporibus est blanditiis perspiciatis. Quo voluptas
            officiis, enim ut dolorem obcaecati praesentium. Velit, voluptas!
          </DescText>
          <WrapperButton>
            <ButtonRound width={`30%`} bgColor={`true`}>
              Get Started
            </ButtonRound>
            <ButtonRound width={`30%`}>Order Now</ButtonRound>
          </WrapperButton>
        </WrapperContent>
        <WrapperContent flex={`true`}>
          <WrapperContentImage>
            <ImageSrc src="https://fakeimg.pl/300/" />
            <Card posX={`-50%`} posY={`60%`}>
              <WrapperContentImage round height={`80%`} width={`28%`}>
                <ImageSrc src="https://fakeimg.pl/300/" />
              </WrapperContentImage>
            </Card>
            <Card posX={`100%`} posY={`25%`}>
              <WrapperContentImage round height={`80%`} width={`28%`}>
                <ImageSrc src="https://fakeimg.pl/300/" />
              </WrapperContentImage>
            </Card>
            <CardBigger posX={`80%`} posY={`80%`} column>
              <WrapperContentImage round height={`35%`} width={`30%`} outside>
                <ImageSrc src="https://fakeimg.pl/300/" />
              </WrapperContentImage>
              <MenuFood>Barger</MenuFood>
              <WrapperIcon>
                {Array(5)
                  .fill(null)
                  .map((el, index) =>
                    index + 1 <= 3 ? (
                      <AiFillStar key={`star-index-${index}`} />
                    ) : (
                      <AiOutlineStar key={`star-index-${index}`} />
                    )
                  )}
              </WrapperIcon>
              <Address>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet.
              </Address>
            </CardBigger>
          </WrapperContentImage>
        </WrapperContent>
      </ContainerSectionOne>
      <ContainerSectionMuti>
        <WrapperText>
          <TextTitle>Feature</TextTitle>
          <TextDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            possimus eligendi! Quasi tempore, ullam vel dolore corrupti velit
            cupiditate a doloribus rerum nesciunt cumque maxime qui, impedit
            suscipit? Accusamus, ullam?
          </TextDesc>
        </WrapperText>
        <WrapperImageGroup>
          {Array(3)
            .fill(null)
            .map((el, index) => (
              <WrapperCard shadow={index == 1} key={`menu_${index}`}>
                <ImageWrapper>
                  <ImageSrc src="https://fakeimg.pl/300/" />
                </ImageWrapper>
                <TextTitle>Lorem.</TextTitle>
                <TextDetail>Lorem, ipsum dolor.</TextDetail>
              </WrapperCard>
            ))}
        </WrapperImageGroup>
      </ContainerSectionMuti>
      <ContainerThird>
        <WrapperContentSectionThrid>
          <TextTitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </TextTitle>
          <MenuWrapper>
            {
              activeFoodMenu.map((el, index) => 
                <Menu index={index} key={`menu_index-${index}`}>test</Menu>
                )
              }
          </MenuWrapper>
        </WrapperContentSectionThrid>
        <WrapperContentSectionThrid center>
          <WrapperContentImage>
            <ImageSrc src="https://fakeimg.pl/300/"  />
          </WrapperContentImage>
        </WrapperContentSectionThrid>
      </ContainerThird>
      <ContainerSectionMuti>
        <WrapperText>
          <TextTitle>Our Popular Update New Foods</TextTitle>
          <TextDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            possimus eligendi! Quasi tempore, ullam vel dolore corrupti velit
            cupiditate a doloribus rerum nesciunt cumque maxime qui, impedit
            suscipit? Accusamus, ullam?
          </TextDesc>
        </WrapperText>
        <WrapperImageGroup>
          {Array(3)
            .fill(null)
            .map((el, index) => (
              <WrapperCard shadow={index == 1} key={`menu-${index}`}>
                <ImageWrapper>
                  <ImageSrc src="https://fakeimg.pl/300/" />
                </ImageWrapper>
                <TextTitle>Lorem.</TextTitle>
                <TextDetail>Lorem, ipsum dolor.</TextDetail>
              </WrapperCard>
            ))}
        </WrapperImageGroup>
      </ContainerSectionMuti>
    </>
  );
};

export default Home;
