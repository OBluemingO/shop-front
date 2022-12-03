import styled, { css } from "styled-components";
import ButtonRound from "../components/Buttons/ButtonRound";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import {
  HomeSectionOne,
  HomeSectionDuplicate,
  HomeSectionThird,
  HomeSectionFour,
  HomeSectionFive
} from '../components/Section/index.jsx'

const Home = () => {

  return (
    <>
      <HomeSectionOne />
      <HomeSectionDuplicate />
      <HomeSectionThird />
      <HomeSectionDuplicate />
      <HomeSectionFour />
      <HomeSectionFive />
    </>
  );
};

export default Home;
