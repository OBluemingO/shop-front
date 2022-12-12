import styled from "styled-components";
import DashBorad from "../components/HOC/DashBorad";
import ButtonRound from '../components/Buttons/ButtonRound'
import { useEffect, useState } from "react";
import axios from '../axios/axios'

const Container = styled.div`
  padding: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperImage = styled.div`
  height: 35%;
  width: 25%;
`;

const Imgsrc = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const WrapperFormInfo = styled.div`
  width: 90%;
  /* display: flex;
  flex-direction: column; */
`;

const WrapperGroup = styled.div`
  margin: 0 10%;
  height: ${({button}) => button && `11%`};
  display: flex;
  flex-direction: column;
  align-items: ${({button}) => button && `center`};
`;

const LabelText = styled.label`
  font-size: 1.25rem;
  font-weight: 400;
`;

const InputText = styled.input``;

const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-left: 10%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1.5%;
  line-height: 2;
`;

const Profile = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUserData = async() => {
      try{

        const user = localStorage.getItem('username')
        const raw_data = {"username": `${user}`}
        const new_data = JSON.parse(JSON.stringify(raw_data))
        console.log(new_data)
        const { data: resData } = await axios.post('userProfile', new_data,{
          withCredentials: true,
        })
        setData(resData[0])
        console.log(resData[0])
        
      }catch(err) {
        console.log(err,'=========== respon err ')
      }
    }

    fetchUserData()

  },[])

  return (
    <DashBorad>
      <Container>
        <WrapperImage>
          <Imgsrc src="https://fakeimg.pl/300/" />
        </WrapperImage>
        <WrapperFormInfo>
          <WrapperGroup>
            <LabelText>Username</LabelText>
            <Text>
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              dolorum maxime vero, perspiciatis nemo tempore, a nulla
              dignissimos libero illo fuga quidem, obcaecati atque quae id ex
              eos! Corporis, corrupti? */}
              {data.username}
            </Text>
          </WrapperGroup>
          <WrapperGroup>
            <LabelText>Address</LabelText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              dolorum maxime vero, perspiciatis nemo tempore, a nulla
              dignissimos libero illo fuga quidem, obcaecati atque quae id ex
              eos! Corporis, corrupti?
            </Text>
          </WrapperGroup>
          <WrapperGroup>
            <LabelText>Phone number</LabelText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              dolorum maxime vero, perspiciatis nemo tempore, a nulla
              dignissimos libero illo fuga quidem, obcaecati atque quae id ex
              eos! Corporis, corrupti?
            </Text>
          </WrapperGroup>
          <WrapperGroup>
            <LabelText>Email</LabelText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              dolorum maxime vero, perspiciatis nemo tempore, a nulla
              dignissimos libero illo fuga quidem, obcaecati atque quae id ex
              eos! Corporis, corrupti?
            </Text>
          </WrapperGroup>
          <WrapperGroup button >
            <ButtonRound bgColor={'true'} height={'100%'} >Edit</ButtonRound>
          </WrapperGroup>
        </WrapperFormInfo>
      </Container>
    </DashBorad>
  );
};

export default Profile;
