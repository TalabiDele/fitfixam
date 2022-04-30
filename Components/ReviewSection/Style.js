import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 2100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    justify-items: right;
    align-items: top;
    margin: auto;

    p {
      color: #3d4c5e;
      width: 70%;
      margin: auto;
      font-size: 24px;
    }
  }

  @media (max-width: 1900px) {
  }

  @media (max-width: 1200px) {
    margin-top: 5rem;
    /* gap: 2rem; */
    /* grid-template-columns: repeat(1, 1fr); */
    display: flex;
    flex-direction: column-reverse;

    p {
      width: 90%;
    }
  }

  @media (max-width: 900px) {
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    p {
      font-size: 19px;
    }
  }

  @media (max-width: 375px) {
  }
`;

export const Container = styled.div`
  margin-top: 2rem;
  padding-top: 3rem;
  background: url("/Blocks.png"), #f9fafb;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Arrow = styled.div`
  width: 10%;
  /* margin-left: 20rem; */
  margin: 2rem auto;
`;

export const Header = styled.h1`
  /* margin-left: 15rem; */
  /* width: 50%; */
  margin-top: 4rem;
  margin-left: 12rem;
  font-size: 34px;

  @media (max-width: 1900px) {
    margin: 3rem 0rem 1rem 3rem;
  }

  @media (max-width: 1200px) {
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 0rem;
    text-align: left;
    display: grid;
    justify-self: start;
  }

  @media (max-width: 600px) {
    margin-left: 2rem;
  }

  @media (max-width: 375px) {
    margin-left: 1rem;
    font-size: 26px;
  }
`;
