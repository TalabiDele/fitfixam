import styled from "styled-components";

export const Container = styled.div`
  background: url("/contact-us.png");
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  padding: 7rem;
  text-align: center;
  color: #fff;
  /* bottom: 0; */

  @media (max-width: 768px) {
  }
`;

export const Wrapper = styled.div`
  h1 {
    font-size: 86px;
  }

  p {
    font-size: 34px;
    width: 70%;
    margin: 0rem auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 19px;
    }
  }
`;
