import * as Element from "./Homesectionduplicatestyled";
import FoodCheckLocation from "../../../assets/svg/food_check_location.json";
import FoodDrive from "../../../assets/svg/food_drive.json";
import FoodProtect from "../../../assets/svg/food_protect.json";
import LottieBase from "../../AnimationSvg/LottieBase";
import * as Image from "../../../assets/images/index";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import GroupPrice from "../../UtilComponent/GroupPrice";

const HomeSctionDuplicate = ({ popular }) => {
    const [favorite, setFavorite] = useState([
        { id: 1, value: false },
        { id: 2, value: false },
        { id: 3, value: false },
    ]);
    const sectionTwo = [
        {
            image: Image.Stak,
            headerText: "Lorem, ipsum",
            bodyText:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            svg: FoodCheckLocation,
            price: 5.9,
        },
        {
            image: Image.Pizza,
            headerText: "Lorem, ipsum",
            bodyText:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            svg: FoodDrive,
            price: 7.6,
        },
        {
            image: Image.Noodle,
            headerText: "Lorem, ipsum",
            bodyText:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            svg: FoodProtect,
            price: 8.5,
        },
    ];

    const header_text = popular ? "Our Popular\nUpdate New Foods" : "Feature";

    const handleClickIcon = (idToupdate) => {
        const updatedItems = favorite.map((item) => {
            if (item.id === idToupdate + 1) {
                return { ...item, value: !item.value };
            }
            return item;
        });

        setFavorite(updatedItems)
    };

    return (
        <Element.ContainerSectionMuti>
            <Element.WrapperText>
                <Element.TextTitle popular={popular}>
                    {header_text}
                </Element.TextTitle>
                <Element.TextDesc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, possimus eligendi! Quasi tempore, ullam vel
                    dolore corrupti velit cupiditate a doloribus rerum nesciunt
                    cumque maxime qui, impedit suscipit? Accusamus, ullam?
                </Element.TextDesc>
            </Element.WrapperText>
            <Element.WrapperImageGroup>
                {sectionTwo.map(
                    ({ image, headerText, bodyText, svg, price }, index) => (
                        <Element.WrapperCard
                            shadow={index == 1}
                            popular={popular}
                            key={`menu_${index}`}
                        >
                            {popular ? (
                                <>
                                    <Element.ImageWrapper>
                                        <Element.ImageSrc src={image} />
                                    </Element.ImageWrapper>
                                    <Element.WrapperCardContent>
                                        <Element.WrapperIcon>
                                            {Array(5)
                                                .fill(null)
                                                .map((el, indexIn) => (
                                                    <AiFillStar
                                                        key={`star-index-${indexIn}-duplication`}
                                                        color="#FB9300"
                                                    />
                                                ))}
                                        </Element.WrapperIcon>
                                        <Element.TextTitle size={1.25}>
                                            {headerText}
                                        </Element.TextTitle>
                                        <Element.TextDetail>
                                            {bodyText}
                                        </Element.TextDetail>
                                        {/* <Element.WrapperPrice>
                                            <Element.TextTitle size={1.25}>
                                                ${price}
                                            </Element.TextTitle>
                                            <Element.WrapperIconHeart
                                                onClick={() =>
                                                    handleClickIcon(index)
                                                }
                                            >
                                                <AiOutlineHeart size={25} />
                                            </Element.WrapperIconHeart>
                                        </Element.WrapperPrice> */}
                                        <GroupPrice price={price} />
                                    </Element.WrapperCardContent>
                                </>
                            ) : (
                                <>
                                    <LottieBase animationScene={svg} />
                                    <Element.TextTitle>
                                        {headerText}
                                    </Element.TextTitle>
                                    <Element.TextDetail>
                                        {bodyText}
                                    </Element.TextDetail>
                                </>
                            )}
                        </Element.WrapperCard>
                    )
                )}
            </Element.WrapperImageGroup>
        </Element.ContainerSectionMuti>
    );
};

export default HomeSctionDuplicate;
