import styled from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 20px 50px;
  background-color: #fff;

  @media (max-width: 560px) {
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

  div {
    display: flex;
    align-items: center;
    margin-top: 20px;

    p {
      color: #7a7672;

      &:nth-child(1) {
        margin-right: 5px;
      }

      &:nth-child(3) {
        margin-left: 5px;
      }
    }
  }
`;

export const SigninWithEmailAndPassword = styled.form`
  display: ${({ stateSign }) => (stateSign ? "block" : "none")};
  width: 100%;
  height: auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;

    label {
      color: #7a7672;
      margin-bottom: 5px;
    }
  }

  a {
    display: block;
    color: #1e90ff;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p{
    text-align: center;
    color: #7a7672;
  }
`;

export const EditInput = styled(Input)`
  border: 1px solid #7a7672;
  border-radius: 6px;
`;

export const SignInButton = styled(Button)`
  color: #fff;
  margin-bottom: 15px;
  background-color: #1e90ff;
`;

export const GoogleButton = styled(Button)`
  background-color: #fff;
  margin: 15px 0px;
  border: 1px solid #7a7672;
`;

export const LinkedinButton = styled(Button)`
  background-color: #1e90ff;
  margin-bottom: 15px;

  p {
    color: #fff;
  }
`;

export const EmailButton = styled(Button)`
  display: ${({ stateSign }) => (stateSign ? "none" : "flex")};
  background-color: #fff;
  border: 1px solid #1e90ff;
  margin-bottom: 15px;
`;

export const CreateAccount = styled.p`
  font-size: 0.9rem;
  color: #7a7672;

  a {
    margin-left: 6px;
    color: #1e90ff;
    font-weight: bold;
  }
`;

export const Frame = styled.div`
  width: 100%;
  height: 100vh;

  background: url("https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_640.png")
    no-repeat center center/cover;

  @media (max-width: 1080px) {
    display: none;
  }
`;
