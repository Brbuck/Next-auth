import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const Container = styled.nav`
  width: 230px;
  height: auto;

  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 20px 6px;

  position: absolute;
  top: 55px;
  left: calc(100% - 250px);

  display: flex;
  flex-direction: column;
  align-items: left;

  background-color: #333;
  

  a {
    display: block;
    color: #FFF;
    padding: 4px;

    &:hover {
      color: #0ffff8;
    }
  }

  button {
    font-weight: bold;
    border-radius: 4px;
    padding: 8px;
    margin: 0;

    cursor: pointer;
    transition: all 0.3s;
    background-color: #0ffff8;

    &:hover {
      opacity: 0.9;
    }
  }
`;
