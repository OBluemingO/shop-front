import styled from "styled-components";
import { AiFillStar, AiFillPlusCircle } from "react-icons/ai";

const Container = styled.div`
    width: ${({ width }) => (width ? `${width}` : `350px`)};
    height: ${({ height }) => (height ? `${height}` : `250px`)};
    position: relative;
    background-color: white;
    border-radius: 20px;
    margin-top: ${({ mt }) => (mt ? `${mt}%` : `0`)};
`;

const CircleImage = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    top: -20%;
    right: 10%;
    border: 5px solid white;
`;

const ImageSrc = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const WrapperText = styled.div`
    padding: 45% 10%;
`;

const TextHeader = styled.h2`
    margin: 0;
    text-transform: capitalize;
`;

const WrapperIcon = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5%;
`;

const WrapperGroups = styled.div`
  position: relative;
  margin-top: 2%;
`;

const Rating = styled.h2`
    margin: 0;
`;

const WrapperIconPlus = styled.div`
  position: absolute;
  right: 0;
  top: 0;
` 

const OurCustommerCard = ({ mt, textHeader, price }) => {
    return (
        <Container mt={mt}>
            <CircleImage>
                <ImageSrc src="https://source.unsplash.com/random/?food" />
            </CircleImage>
            <WrapperText>
                <TextHeader>{textHeader}</TextHeader>
                <WrapperGroups>
                    <WrapperIcon>
                        {Array(3)
                            .fill(null)
                            .map((el, index) => (
                                <AiFillStar color="#FB9300" key={`star-index-${index}`} />
                            ))}
                    </WrapperIcon>
                    <Rating>{price}</Rating>
                    <WrapperIconPlus>
                      <AiFillPlusCircle color="#FB9300" size={50} />
                    </WrapperIconPlus>
                </WrapperGroups>
            </WrapperText>
        </Container>
    );
};

export default OurCustommerCard;
