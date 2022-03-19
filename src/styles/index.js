import styled from "styled-components";
import Button from "../Components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media  (max-width: 1080px){
    grid-template-columns: 1fr;
    justify-items: center;
    
  }
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 20px 50px;
  background-color: #FFF;

  @media  (max-width: 560px){
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
    color: #7a7672;
  }

  span {
    margin-bottom: 25px;
    color: #7a7672;
  }
`;

export const GoogleButton = styled(Button)`
  background-color: #fff;
  margin-bottom: 15px;
  border: 1px solid #7a7672;
  max-width: 350px;
  
`;


export const LinkedinButton = styled(Button)`
  background-color: #1e90ff;
  max-width: 350px;

  span {
    color: #fff;
  }
`;

export const Frame = styled.div`
  width: 100%;
  height: 100vh;

  background: url("https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_640.png") no-repeat center center/cover;

  @media  (max-width: 1080px){
    display: none;
  }
`;