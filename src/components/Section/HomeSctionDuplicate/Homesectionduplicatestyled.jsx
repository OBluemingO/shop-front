import styled from "styled-components";

const ContainerSectionMuti = styled.div`
  height: 108vh;
  max-height: 870px;
  /* background-color: yellow; */
  padding-top: 15%;
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

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const TextDetail = styled.p``;


export {
  ContainerSectionMuti,
  WrapperText,
  TextTitle,
  TextDesc,
  WrapperImageGroup,
  WrapperCard,
  ImageWrapper,
  ImageSrc,
  TextDetail
}