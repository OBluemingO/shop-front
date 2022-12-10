import styled from "styled-components";
import { forwardRef } from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Container = styled.div`
  width: 250px;
  height: 350px;
  /* background-color: ${({ loading }) => (loading ? `green` : `black`)}; */
  margin-right: 1%;
  border: 1px solid black;
  margin-bottom: 1%;
  border-radius: 20px;
  display:flex;
  flex-direction: column;
  /* align-items:center; */
`;

const WrapperImage = styled.div`
  height: 60%;
  width: 80%;
  background-color: black;
  margin: 5% auto;
`

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 0 10%;
`

const Text = styled.p`
  font-size: ${({size}) => size ? `${size}rem`: `1rem`};
  margin: 0;
  margin-top: 5%;
`

const ProductCard = ({ name, price, collection_product, loading, index },ref) => {
  return (
    <>
      {loading ? (
        <Container ref={el => ref.current[index] = el}>
          <Skeleton height={250} width={250} />
          <Skeleton height={24} style={{ marginTop: 22 }} />
          <Skeleton height={20} style={{ marginTop: 10, marginBottom: 22 }} />
        </Container>
      ) : (
        <Container>
          <WrapperImage>
            <ImageSrc src="https://fakeimg.pl/300/" />
          </WrapperImage>
          <WrapperContent>
            <Text>name: {name}</Text>
            <Text size={0.75}>collection: {collection_product}</Text>
            <Text size={1.5}>${price}</Text>
          </WrapperContent>
        </Container>
      )}
    </>
  );
};

export default forwardRef(ProductCard);
