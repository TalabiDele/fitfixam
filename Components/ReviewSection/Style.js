import styled from "styled-components";

export const Wrapper = styled.div`
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

  @media (min-width: 768px) and (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
    justify-items: center;
    align-items: center;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    display: flex;
    flex-direction: column-reverse;
    justify-items: center;
    align-items: center;
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

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: 0rem;
    text-align: left;
    display: grid;
    justify-self: start;
  }
`;
