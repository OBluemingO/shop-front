import React from "react";
import ButtonRound from "../../Buttons/ButtonRound";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as Element from './Homesectiononestyled'


const HomeSectionOne = () => {
  return (
    <Element.ContainerSectionOne>
      <Element.WrapperContent>
        <Element.TitleText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Element.TitleText>
        <Element.DescText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          tempore dolores ducimus adipisci optio consequatur cupiditate
          temporibus est blanditiis perspiciatis. Quo voluptas officiis, enim ut
          dolorem obcaecati praesentium. Velit, voluptas!
        </Element.DescText>
        <Element.WrapperButton>
          <ButtonRound width={`30%`} bgColor={`true`}>
            Get Started
          </ButtonRound>
          <ButtonRound width={`30%`}>Order Now</ButtonRound>
        </Element.WrapperButton>
      </Element.WrapperContent>
      <Element.WrapperContent flex={`true`}>
        <Element.WrapperContentImage>
          <Element.ImageSrc src="https://fakeimg.pl/300/" />
          <Element.Card posX={`-50%`} posY={`60%`}>
            <Element.WrapperContentImage round height={`80%`} width={`28%`}>
              <Element.ImageSrc src="https://fakeimg.pl/300/" />
            </Element.WrapperContentImage>
          </Element.Card>
          <Element.Card posX={`90%`} posY={`25%`}>
            <Element.WrapperContentImage round height={`80%`} width={`28%`}>
              <Element.ImageSrc src="https://fakeimg.pl/300/" />
            </Element.WrapperContentImage>
          </Element.Card>
          <Element.CardBigger posX={`80%`} posY={`80%`} column>
            <Element.WrapperContentImage round height={`35%`} width={`30%`} outside>
              <Element.ImageSrc src="https://fakeimg.pl/300/" />
            </Element.WrapperContentImage>
            <Element.MenuFood>Barger</Element.MenuFood>
            <Element.WrapperIcon>
              {Array(5)
                .fill(null)
                .map((el, index) =>
                  index + 1 <= 3 ? (
                    <AiFillStar key={`star-index-${index}`} />
                  ) : (
                    <AiOutlineStar key={`star-index-${index}`} />
                  )
                )}
            </Element.WrapperIcon>
            <Element.Address>
              Lorem ipsum dolor sit ametLorem ipsum dolor sit amet.
            </Element.Address>
          </Element.CardBigger>
        </Element.WrapperContentImage>
      </Element.WrapperContent>
    </Element.ContainerSectionOne>
  );
};

export default HomeSectionOne;
