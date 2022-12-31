import { useState } from "react";
import * as Element from "../../components/Section/HomeSctionDuplicate/Homesectionduplicatestyled";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const GroupPrice = ({ price }) => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked((prev) => !prev);

    return (
        <Element.WrapperPrice>
            <Element.TextTitle size={1.25}>${price}</Element.TextTitle>
            <Element.WrapperIconHeart onClick={handleClick}>
                {clicked ? (
                    <AiFillHeart size={25} color={'#FB9300'} />
                ) : (
                    <AiOutlineHeart size={25} color={'#FB9300'} />
                )}
            </Element.WrapperIconHeart>
        </Element.WrapperPrice>
    );
};

export default GroupPrice;
