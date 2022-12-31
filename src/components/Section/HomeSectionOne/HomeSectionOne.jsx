import React from "react";
import ButtonRound from "../../Buttons/ButtonRound";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as Element from "./Homesectiononestyled";
import CardImage from "../../Cards/CardImageSmall";

const HomeSectionOne = () => {

    const mock_data = [
        {
            image: "https://images.unsplash.com/photo-1668786905263-a1ac767e34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            position: {
                x: "-50%",
                y: "60%",
            },
        },
        {
            image: "https://images.unsplash.com/photo-1669310942495-d916e1d4f247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            position: {
                x: "90%",
                y: "25%",
            },
        },
        {
            image: "https://images.unsplash.com/photo-1668620682033-0d5b77ee7506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            position: {
                x: "80%",
                y: "80%",
            },
        },
    ];

    return (
        <Element.ContainerSectionOne>
            <Element.WrapperContent>
                <Element.TitleText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Element.TitleText>
                <Element.DescText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur tempore dolores ducimus adipisci optio
                    consequatur cupiditate temporibus est blanditiis
                    perspiciatis. Quo voluptas officiis, enim ut dolorem
                    obcaecati praesentium. Velit, voluptas!
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
                    <Element.WrapperBackground>
                        <Element.ImageSrc src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" />
                    </Element.WrapperBackground>
                    {mock_data.map(({ image, position: { x, y } }, index) =>
                        index === mock_data.length - 1 ? (
                            <Element.CardBigger
                                posX={x}
                                posY={y}
                                key={`card-section-one-${index}`}
                                column
                            >
                                <Element.WrapperContentImage
                                    round
                                    height={"90px"}
                                    width={"90px"}
                                    outside
                                >
                                    <Element.ImageSrc src={image} />
                                </Element.WrapperContentImage>

                                <Element.MenuFood>Barger</Element.MenuFood>
                                <Element.WrapperIcon>
                                    {Array(5)
                                        .fill(null)
                                        .map((el, index) =>
                                            index + 1 <= 3 ? (
                                                <AiFillStar
                                                    key={`star-index-${index}`}
                                                    color='#FB9300'
                                                />
                                            ) : (
                                                <AiOutlineStar
                                                    key={`star-index-${index}`}
                                                    color='#FB9300'
                                                />
                                            )
                                        )}
                                </Element.WrapperIcon>
                                <Element.Address>
                                    Lorem ipsum dolor sit ametLorem ipsum dolor
                                    sit amet.
                                </Element.Address>
                            </Element.CardBigger>
                        ) : (
                            <CardImage
                                posX={x}
                                posY={y}
                                image={image}
                                key={`image-${image}-${index}`}
                            />
                        )
                    )}
                </Element.WrapperContentImage>
            </Element.WrapperContent>
        </Element.ContainerSectionOne>
    );
};

export default HomeSectionOne;
