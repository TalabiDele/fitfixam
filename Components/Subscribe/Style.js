import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 2100px) {
    background-color: #bdddfd1f;
    padding-top: 10rem;
    height: 40rem;
  }

  @media (max-width: 1200px) {
    background-color: #bdddfd1f;
    padding-top: 10rem;
    height: 40rem;
  }

  @media (max-width: 768px) {
    background-color: #bdddfd1f;
    padding-top: 10rem;
    height: 40rem;
  }
`;

export const Container = styled.div`
  @media (max-width: 2100px) {
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

  @media (max-width: 1200px) {
    h1 {
      font-size: 45px;
    }

    p {
      color: #546881;
      font-size: 26px;
      width: 70%;
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

  @media (max-width: 768px) {
    h1 {
      width: 80%;
      margin: auto;
    }

    p {
      color: #546881;
      font-size: 25px;
      width: 80%;
      margin: 2rem auto 5rem auto;
    }
  }

  @media (max-width: 375px) {
    h1 {
      width: 90%;
      font-size: 30px;
    }

    p {
      font-size: 19px;
    }

    input {
      width: 90%;
      border-radius: 10px;
    }
  }
`;
