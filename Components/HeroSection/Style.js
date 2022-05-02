import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 2100px) {
    text-align: center;
    padding-top: 3rem;

    h1 {
      font-size: 95px;
      width: 60%;
      margin: 5rem auto 4rem auto;
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 104px;
    }

    p {
      font-size: 26px;
      color: #47586e;
      width: 50%;
      margin: 0rem auto 4rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 4rem;
      margin-bottom: -10rem;
      text-align: center;
    }

    div.btns {
      display: grid;
      justify-items: center;
    }
  }

  @media (max-width: 1900px) {
    padding-top: 2rem;

    h1 {
      margin: 8rem auto 1rem auto;
      width: 70%;
    }
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 75px;
      line-height: 1;
      margin: 2rem auto;
    }

    p {
      font-size: 22px;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 900px) {
    margin-top: 6rem;
    /* padding-top: 10rem; */

    h1 {
      font-size: 50px;
      margin: 1rem auto 2rem auto;
    }

    p {
      font-size: 19px;
    }

    .hero_icon {
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
    margin-top: 10rem;

    h1 {
      margin: 0rem auto 1rem auto;
      width: 80%;
    }

    p {
      width: 80%;
    }
  }

  @media (max-width: 375px) {
    text-align: center;
    width: 100%;

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 16px;
      width: 80%;
    }
  }
`;

export const Container = styled.div`
  @media (max-width: 2100px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 60rem;
    position: relative;
    padding-top: -2rem;
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (max-width: 1900px) {
    background-size: cover;
    height: 55rem;
    /* margin-bottom: 10rem; */
  }

  @media (max-width: 1200px) {
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 45rem;
  }

  @media (max-width: 900px) {
    height: 30rem;
    background-position: center;
    background-origin: padding-box;
    padding-bottom: 10rem;
  }

  @media (max-width: 768px) {
    background-size: cover;
  }

  @media (max-width: 375px) {
    background: url("/hero-background.png");
    background-size: cover;
    width: 100%;
  }
`;
