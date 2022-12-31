import { useEffect } from 'react';
import {
  HomeSectionOne,
  HomeSectionDuplicate,
  HomeSectionThird,
  HomeSectionFour,
  HomeSectionFive
} from '../components/Section/index.jsx'

const Home = () => {

  useEffect(() => {
    
    window.scrollTo({top:0})

  },[])

  return (
    <>
      <HomeSectionOne />
      <HomeSectionDuplicate />
      <HomeSectionThird />
      <HomeSectionDuplicate popular={'true'} />
      <HomeSectionFour />
      <HomeSectionFive />
    </>
  );
};

export default Home;
