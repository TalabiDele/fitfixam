import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    text-align: center;
    padding-top: 3rem;

    h1 {
      font-size: 95px;
      width: 60%;
      margin: 1rem auto 4rem auto;
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

  @media (min-width: 768px) and (max-width: 1200px) {
    text-align: center;
    /* padding-top: 3rem; */

    h1 {
      font-size: 95px;
      width: 70%;
      margin: 3rem auto 3rem auto;
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
      width: 70%;
      margin: 0rem auto 4rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 3rem;
      text-align: center;
    }

    div.btns {
      display: grid;
      justify-items: center;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    text-align: center;
    /* padding-top: 3rem; */

    h1 {
      font-size: 50px;
      width: 70%;
      margin: 3rem auto 1rem auto;
      color: #040242;
      line-height: 1.1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 19px;
      color: #47586e;
      width: 70%;
      margin: 0rem auto 2rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 3rem;
      text-align: center;
      font-size: 40px;
    }

    div.btns {
      display: grid;
      justify-items: center;
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
    height: 70rem;
    position: relative;
    padding-top: -2rem;
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    height: 70rem;
    width: 100%;
    background-color: #f9fafb;
    margin-bottom: -20rem;
    padding-bottom: 10rem;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    background: url("/hero-background.png");
    background-size: contain;
    z-index: 3;
    background-repeat: no-repeat;
    height: 30rem;
    width: 100%;
    background-color: #f9fafb;
    margin-bottom: -10rem;
  }
`;
