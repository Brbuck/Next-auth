import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;
  padding: 10px 30px;

  background-color: #222;
  color: #fff;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  li {
    margin-left: 25px;
  }
`;

export const Logo = styled.div`
  width: 100%;
`;
