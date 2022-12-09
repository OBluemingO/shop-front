import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios/axios";
import ProductCard from "../components/Cards/ProductCard";

const Container = styled.div`
  padding: 0 5%;
  height: auto;
  display: flex;
  gap: 2% 1%;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2.5%;
`;

const Product = () => {
  const [product, setProduct] = useState([]);
  const [endPage, setEndPage] = useState(false)
  const [cardLimit, setCardLimit] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { card_product } } = await axios.get("products", { params: {limit: 8} } );
        setProduct(card_product[0]);
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
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('keep fetch data.... ')
        const { data: { card_product, limit } } = await axios.get("products", { params: { limit: (product.length-1) + 9 } } );
        setProduct(card_product[0]);
        setCardLimit(limit)
      } catch (err) {
        console.err(err);
      }
    }
    
    if(endPage && !cardLimit){
      const delayShowProductCard = setTimeout(() => {
        fetchData()
        setEndPage(false)
      }, 750);
      
      return () => clearTimeout(delayShowProductCard)
    }

  },[endPage, product, cardLimit])

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
        !cardLimit ? 
        Array(3).fill(null).map(
          (el, index) => <ProductCard loading={'true'} {...el} key={`product-card-${index}`} />
        )
        : 
        null
      }
    </Container>
  );
};

export default Product;
