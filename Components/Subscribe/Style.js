import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    background-color: #bdddfd1f;
    padding-top: 15rem;
    height: 70rem;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    background-color: #bdddfd1f;
    padding-top: 15rem;
    height: 60rem;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    background-color: #bdddfd1f;
    padding-top: 15rem;
    height: 60rem;
  }
`;

export const Container = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    text-align: center;
    z-index: 100;
    background: url("/subscribe-bg.png"), #f9fafb;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    /* padding: 5rem 0rem; */

    h1 {
      font-size: 45px;
    }

    p {
      color: #546881;
      font-size: 26px;
      width: 35%;
      margin: 2rem auto 5rem auto;
    }

    input {
      width: 30%;
      background-color: #fff;
      border: none;
      padding: 1.5rem;
      border-radius: 15px 0px 0px 15px;
      font-size: 24px;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    text-align: center;
    z-index: 100;
    background: url("/subscribe-bg.png"), #f9fafb;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    /* padding: 5rem 0rem; */

    h1 {
      font-size: 45px;
    }

    p {
      color: #546881;
      font-size: 26px;
      width: 35%;
      margin: 2rem auto 5rem auto;
    }

    input {
      width: 30%;
      background-color: #fff;
      border: none;
      padding: 1.5rem;
      border-radius: 15px 0px 0px 15px;
      font-size: 24px;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    text-align: center;
    z-index: 100;
    background: url("/subscribe-bg.png"), #f9fafb;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    /* padding: 5rem 0rem; */

    h1 {
      font-size: 38px;
      width: 80%;
      margin: auto;
    }

    p {
      color: #546881;
      font-size: 25px;
      width: 80%;
      margin: 2rem auto 5rem auto;
    }

    input {
      width: 60%;
      background-color: #fff;
      border: none;
      padding: 1.5rem;
      border-radius: 15px 0px 0px 15px;
      font-size: 24px;
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
      font-weight: bold;
    }
  }
`;
