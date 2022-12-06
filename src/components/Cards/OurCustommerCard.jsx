import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'

const Container = styled.div`
  width: ${({width}) => width ? `${width}` : `350px`};
  height: ${({height}) => height ? `${height}` : `250px`};
  position: relative;
  background-color:white;
  border-radius:20px;
  margin-top: ${({mt}) => mt ? `${mt}%` : `0`};
` 

const CircleImage = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  top: -20%;
  right: 20%;
`

const ImageSrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const WrapperText = styled.div`
  padding: 40% 10%;
`

const TextHeader = styled.h2`
  margin: 0;
  text-transform: capitalize;
`

const WrapperIcon = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3.5%;
  gap: 1.5%;
`

const Rating = styled.h2`
  margin: 0;
`

const OurCustommerCard = ({mt}) => {
  return (
    <Container mt={mt}>
      <CircleImage>
        <ImageSrc src='https://fakeimg.pl/300/' />  
      </CircleImage>
      <WrapperText>
        <TextHeader>test test</TextHeader>
        <WrapperIcon>
          {
            Array(3).fill(null).map((el,index) => 
              <AiFillStar key={`star-index-${index}`} />
            )
          }
        </WrapperIcon>
        <Rating>
          {Math.random()*100}
        </Rating>
      </WrapperText>
    </Container>
  )
}

export default OurCustommerCard