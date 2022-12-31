import styled from "styled-components";

const ContainerSectionMuti = styled.div`
  height: 108vh;
  max-height: 870px;
  padding-top: 15%;
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextTitle = styled.h1`
  margin: ${({size}) => !size ? `20px 0 0 0` : `5px 0 0 0` } ;
  white-space: pre-line;
  /* background-color: black; */
  font-size: ${({size}) => size && `${size}rem`};
  text-align: ${({popular}) => popular && `center`};
`;

const TextDesc = styled.p`
  width: 50%;
  text-align: center;
`;

const WrapperIconHeart = styled.div`
  display: grid;
  place-items: center;
  cursor: pointer;
`

const WrapperImageGroup = styled.div`
  display: flex;
  max-height: 380px;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 5%;
  padding-top: 5%;
  /* background-color: yellow; */

`;

const WrapperCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: ${({popular}) => !popular && 'center'};
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  scale: ${({ shadow }) => (shadow ? `1` : `0.9`)};
`;

const ImageWrapper = styled.div`
  padding-top: 5%;
  height: 40%;
  width: 100%;
`;

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const TextDetail = styled.p``;

const WrapperIcon = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 15px;
`;

const WrapperCardContent = styled.div`
  padding: 0 10%;
`

const WrapperPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export {
  ContainerSectionMuti,
  WrapperText,
  TextTitle,
  TextDesc,
  WrapperImageGroup,
  WrapperCard,
  ImageWrapper,
  ImageSrc,
  TextDetail,
  WrapperIcon,
  WrapperCardContent,
  WrapperPrice,
  WrapperIconHeart
}