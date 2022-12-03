import styled from 'styled-components'

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

const OurCustommerCard = ({mt}) => {
  return (
    <Container mt={mt}>
      <CircleImage>
        <ImageSrc src='https://fakeimg.pl/300/' />  
      </CircleImage>
    </Container>
  )
}

export default OurCustommerCard