import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;
  padding: 10px 30px;

  background-color: #222;
  
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    font-size: 1.1rem;
    margin-left: 25px;
    color: #fff;

    @media  (max-width: 512px){
      font-size: 0.9rem;
    }

    img{
      border-radius: 50%;
      border: 1px solid #FFF;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.div`
  
`;
