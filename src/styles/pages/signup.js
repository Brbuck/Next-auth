import styled from "styled-components";

export const CreateAccount = styled.form`
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 15px;

    label {
      color: #7a7672;
      margin-bottom: 5px;
    }

    p {
      color: red;
      margin-top: 5px;
    }

    .label-erro {
      color: red;
    }

    .erros {
      border: 1px solid red;
    }

    .message-email {
      color: #1e90ff;
    }
  }

 
`;
