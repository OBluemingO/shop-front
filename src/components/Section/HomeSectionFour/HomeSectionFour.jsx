import React from 'react'
import * as Element from './Homesectionfourstyled'
import OurCustommerCard from '../../Cards/OurCustommerCard'
import LottieBase from '../../AnimationSvg/LottieBase'
import Samosa from '../../../assets/svg/samosa.json'
// import { useState } from 'react'
// import axios from '../../../axios/axios'

const HomeSectionFour = () => {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetch = async() => {
  //     try{
  //       axios.get('https://dummyjson.com/products')
  //     }
  //     catch(err){
  //       console.log(err.massege)
  //     }
  //   }

  //   fetch()
  // }, [])
  

  const mock_data = [
    {
      textHeader: `lorem lorem`,
      price: 15.25
    },
    {
      textHeader: `lorem lorem`,
      price: 12.80
    },
    {
      textHeader: `lorem lorem`,
      price: 17.75
    },
    {
      textHeader: `lorem lorem`,
      price: 8.50
    },
  ]

  return (
    <Element.Container>
      <Element.WrapperLottie>
        <LottieBase animationScene={Samosa} />
      </Element.WrapperLottie>

      <Element.BackgroundContainer /> 
      <Element.WrapperCard>

        {
          mock_data.map((el,index) => index == 2 ?  <OurCustommerCard mt={15} {...el} /> :  <OurCustommerCard {...el} /> )
        }
        {/* <OurCustommerCard />
        <OurCustommerCard />
        <OurCustommerCard mt={15} />
        <OurCustommerCard /> */}
      </Element.WrapperCard>
    </Element.Container>
  )
}

export default HomeSectionFour