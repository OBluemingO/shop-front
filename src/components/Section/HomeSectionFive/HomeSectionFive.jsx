import React from 'react'
import * as Element from './Homesectionfivestyled'
import OurCustommerCard from '../../Cards/OurCustommerCard'
import PricingCard from '../../Cards/PricingCard'

const HomeSectionFour = () => {
  return (
    <Element.Container>
      <Element.BackgroundContainer />
      <Element.BackgroundContainer deg={135} />
      <Element.WrapperCard>
        <PricingCard />
        <PricingCard />
      </Element.WrapperCard>
    </Element.Container>
  )
}

export default HomeSectionFour