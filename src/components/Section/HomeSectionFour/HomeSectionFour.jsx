import React from 'react'
import * as Element from './Homesectionfourstyled'
import OurCustommerCard from '../../Cards/OurCustommerCard'

const HomeSectionFour = () => {
  return (
    <Element.Container>
      <Element.BackgroundContainer />
      <Element.WrapperCard>

        <OurCustommerCard />
        <OurCustommerCard />
        <OurCustommerCard mt={29}/>
        <OurCustommerCard />
      </Element.WrapperCard>
    </Element.Container>
  )
}

export default HomeSectionFour