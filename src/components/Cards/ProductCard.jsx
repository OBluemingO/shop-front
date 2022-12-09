import styled from "styled-components"

const Container = styled.div`
    width: 25%;
    height: 50%;
    background-color: ${({loading}) => loading ? `green` : `black`};
` 

const ProductCard = ({name, price, collection_product, loading}) => {
  return (
    <Container loading={loading}>

    </Container>
  )
}

export default ProductCard