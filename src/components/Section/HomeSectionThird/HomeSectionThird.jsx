import * as Element from "./Homesectionthirdstyled";
import { useState } from "react";
import { HiArrowRightCircle, HiArrowLeftCircle } from 'react-icons/hi2' 
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from 'react-icons/hi' 

const HomeSectionThird = () => {
  const [currentIndexMenu, setCurrentIndexMenu] = useState(0);

  const handleClickMenu = (index) => {
    setCurrentIndexMenu(index);
  };

  return (
    <Element.ContainerThird>
      <Element.WrapperWave rotation={'true'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FB9300"
            fillOpacity="1"
            d="M0,64L48,53.3C96,43,192,21,288,58.7C384,96,480,192,576,197.3C672,203,768,117,864,90.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Element.WrapperWave>
      <Element.WrapperWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FB9300"
            fillOpacity="1"
            d="M0,64L48,53.3C96,43,192,21,288,58.7C384,96,480,192,576,197.3C672,203,768,117,864,90.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </Element.WrapperWave>
      <Element.WrapperContentSectionThrid left={"true"}>
        <Element.TextTitle>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Element.TextTitle>
        <Element.MenuWrapper>
          {Array(5)
            .fill(null)
            .map((el, index) => (
              <Element.Menu
                onClick={() => handleClickMenu(index)}
                active={index == currentIndexMenu}
                first={index == 0}
                index={index}
                key={`menu_index-${index}`}
              >
                <Element.CircleIndex>{index + 1}</Element.CircleIndex> test
              </Element.Menu>
            ))}
          <Element.LineDetechItem
            color={"true"}
            height="100%"
            bottom={"true"}
          />
          <Element.LineDetechItem
            height="20%"
            top={"true"}
            posY={`${100 * currentIndexMenu}%`}
          />
        </Element.MenuWrapper>
      </Element.WrapperContentSectionThrid>
      <Element.WrapperContentSectionThrid center>
        <Element.WrapperContentImage>
          <Element.ImageSrc src="https://fakeimg.pl/300/" />
        </Element.WrapperContentImage>
        <Element.WrapperIcon>
          {/* <HiOutlineArrowCircleLeft size={50} color={`#FB9300`} /> */}

          {
            currentIndexMenu == 0  &&
            <HiArrowLeftCircle style={{cursor:'not-allowed'}} size={50} color={`#aaaaaa`} />
          }

          {
            currentIndexMenu >= 0 && currentIndexMenu <= 4  &&
            <>
              {currentIndexMenu != 0 && <HiOutlineArrowCircleLeft onClick={() => setCurrentIndexMenu(prev => prev - 1)} style={{cursor:'pointer'}} size={50} color={`#FB9300`} /> }
              {currentIndexMenu != 4 && <HiOutlineArrowCircleRight onClick={() => setCurrentIndexMenu(prev => prev + 1)} style={{cursor:'pointer'}} size={50} color={`#FB9300`} /> }
              {/* <HiOutlineArrowCircleRight size={50} color={`#FB9300`} /> */}
            </>
          }

          {
            currentIndexMenu == 4 &&
            <HiArrowRightCircle style={{cursor:'not-allowed'}} size={50} color={`#aaaaaa`} />
          }

            {/* <HiArrowLeftCircle size={50} color={`#FB9300`} /> */}
        </Element.WrapperIcon>
      </Element.WrapperContentSectionThrid>
    </Element.ContainerThird>
  );
};

export default HomeSectionThird;
