import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios/axios";
import ProductCard from "../components/Cards/ProductCard";

const Container = styled.div`
  padding: 0 5%;
  height: 100%;
  display: flex;
  gap: 1%;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2.5%;
`;

const Product = () => {
  const [product, setProduct] = useState([]);
  const [endPage, setEndPage] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("products", { params: {limit: 9} } );
        setProduct(data);
      } catch (err) {
        console.err(err);
      }
    };

    fetchData();

    const handleScroll = () => {
      const endOfPage = window.scrollY + window.innerHeight === document.body.scrollHeight
      if(endOfPage){
        setEndPage(true)
      }
     
      // setEndPage(endOfPage)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("products", { params: { limit: product.length + 9 } } );
        if(data.length > 30) data.pop()
        setProduct(data);
      } catch (err) {
        console.err(err);
      }
    };
    if(endPage){
      const delayShowProductCard = setTimeout(() => {
        fetchData();
        setEndPage(false)
      }, 750);
      
      return () => clearTimeout(delayShowProductCard)
    }

  },[endPage, product])

  return (
    <Container>
      {
        Object.keys(product).length > 0
        ? product.map((el, index) => (
            <ProductCard {...el} key={`product-card-${index}-${el._id}`} />
          ))
        : null
      }
      {
        Array(3).fill(null).map(
          (el, index) => <ProductCard loading={'true'} {...el} key={`product-card-${index}`} />
        )
      }
    </Container>
  );
};

export default Product;
