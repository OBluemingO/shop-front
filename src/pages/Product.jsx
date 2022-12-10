import React from "react";
import { useRef } from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import axios from "../axios/axios";
import ProductCard from "../components/Cards/ProductCard";
import { check_element_on_viewport } from "../utils/check_element_on_viewport";

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
  const [product, setProduct] = useState([])
  const [scrollY, setScrollY] = useState(0)
  const [endPage, setEndPage] = useState(false)
  const [cardLimit, setCardLimit] = useState(false)
  const loadingRef = useRef([])
  const loadingMockRef = useRef([])

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
      setScrollY(window.scrollY)
      const endOfPage = window.scrollY + window.innerHeight === document.body.scrollHeight
      if(endOfPage){
        setEndPage(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ref_loading = loadingRef?.current[0]
    const bounding = ref_loading?.getBoundingClientRect()
    const result_element_onview_port = check_element_on_viewport(bounding)

    const fetchData = async () => {
      try {
        const { data: { card_product, limit } } = await axios.get("products", { params: { limit: (product.length-1) + 9 } } );
        setProduct(card_product[0]);
        setCardLimit(limit)
      } catch (err) {
        console.err(err);
      }
    }
    
    if(result_element_onview_port && !cardLimit){
      const delayShowProductCard = setTimeout(() => {
        fetchData()
      }, 250);
      
      return () => clearTimeout(delayShowProductCard)
    }
  }, [scrollY, product, cardLimit])

  return (
    <Container>
      {
        Object.keys(product).length > 0
        ? product.map((el, index) => (
            <ProductCard {...el} key={`product-card-${index}-${el._id}`} />
          ))
        : 
        Array(8).fill(null).map(
          (el, index) => <ProductCard index={index} loading={'true'} ref={loadingMockRef} {...el} key={`product-card-${index}-mock-fist`} />
        )
      }
      {
        !cardLimit ? 
        Array(3).fill(null).map(
          (el, index) => <ProductCard index={index} loading={'true'} ref={loadingRef} {...el} key={`product-card-${index}`} />
        )
        : 
        null
      }
    </Container>
  );
};

export default Product;
