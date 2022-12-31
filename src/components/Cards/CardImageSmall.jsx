import * as Element from '../Section/HomeSectionOne/Homesectiononestyled'
import { BsArrowDownRight } from 'react-icons/bs'

const CardImageSmall = ({ posX, posY, text, image }) => {
    return (
        <Element.Card posX={posX} posY={posY}>
            <Element.WrapperContentImage round height={`75px`} width={`75px`}>
                <Element.ImageSrc src={image} />
            </Element.WrapperContentImage>
            <Element.Contentcard>
                <Element.Text>
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when
                </Element.Text>
                <Element.WrapperIconArrow>
                    <BsArrowDownRight color={"#FB9300"} />
                </Element.WrapperIconArrow>
            </Element.Contentcard>
        </Element.Card>
    );
};

export default CardImageSmall