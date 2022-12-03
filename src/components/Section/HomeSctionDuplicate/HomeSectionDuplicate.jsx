import * as Element from './Homesectionduplicatestyled'

const HomeSctionDuplicate = () => {
  return (
    <Element.ContainerSectionMuti>
      <Element.WrapperText>
        <Element.TextTitle>Feature</Element.TextTitle>
        <Element.TextDesc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          possimus eligendi! Quasi tempore, ullam vel dolore corrupti velit
          cupiditate a doloribus rerum nesciunt cumque maxime qui, impedit
          suscipit? Accusamus, ullam?
        </Element.TextDesc>
      </Element.WrapperText>
      <Element.WrapperImageGroup>
        {Array(3)
          .fill(null)
          .map((el, index) => (
            <Element.WrapperCard shadow={index == 1} key={`menu_${index}`}>
              <Element.ImageWrapper>
                {/* <Element.ImageSrc src="https://fakeimg.pl/300/" /> */}
                <Element.ImageSrc src="https://photosfine.files.wordpress.com/2012/04/food-white-background-2.jpg" />
              </Element.ImageWrapper>
              <Element.TextTitle>Lorem.</Element.TextTitle>
              <Element.TextDetail>Lorem, ipsum dolor.</Element.TextDetail>
            </Element.WrapperCard>
          ))}
      </Element.WrapperImageGroup>
    </Element.ContainerSectionMuti>
  );
};

export default HomeSctionDuplicate;
