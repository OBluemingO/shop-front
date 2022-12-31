import React from "react";
import * as Element from "./Homesectionfivestyled";
import OurCustommerCard from "../../Cards/OurCustommerCard";
import PricingCard from "../../Cards/PricingCard";

const HomeSectionFour = () => {
    const mock_data = [
        { price: 0, mode: "free" },
        { price: 50, mode: "Normal" },
    ];
    return (
        <Element.Container>
            <Element.WrapperBackground>
                <Element.BackgroundContainer />
                <Element.BackgroundContainer deg={135} />
            </Element.WrapperBackground>
            <Element.WrapperCard>
                {mock_data.map((el, index) => (
                    <PricingCard {...el} key={`price-mode-${index}`} />
                ))}
            </Element.WrapperCard>
        </Element.Container>
    );
};

export default HomeSectionFour;
