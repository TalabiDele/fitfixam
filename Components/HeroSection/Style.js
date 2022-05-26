import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1281px) {
    text-align: center;
    padding-top: 10rem;

    h1 {
      font-size: 70px;
      width: 50%;
      margin: 2rem auto 1rem auto;
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 24px;
      color: #47586e;
      width: 40%;
      margin: 0rem auto 2rem auto;
    }

    span {
      color: #f4442e;
    }

    .hero_icon {
      margin-top: 10rem;
      margin-bottom: -10rem;
      text-align: center;
    }

    div.btns {
      display: grid;
      justify-items: center;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    padding-top: 5rem;

    h1 {
      font-size: 50px;
      width: 55%;
      margin: 0rem auto 2rem auto;
      color: #040242;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 22px;
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

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 4rem;

    text-align: center;

    h1 {
      font-size: 50px;
      margin: 0rem auto 4rem auto;
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      margin: 2rem auto 1rem auto;
      width: 80%;
    }

    p {
      font-size: 20px;
      color: #47586e;
      width: 70%;
      margin: 0rem auto 2rem auto;
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

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    /* padding-top: 2rem; */

    h1 {
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      width: 90%;
      font-size: 50px;
      margin: 2rem auto 2rem auto;
    }

    p {
      color: #47586e;
      width: 90%;
      margin: 0rem auto 1rem auto;
      font-size: 16px;
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

  @media (max-width: 480px) {
    margin-top: 4rem;
    /* padding-top: 10rem; */

    h1 {
      font-size: 50px;
      margin: 0rem auto 1rem auto;
    }

    p {
      font-size: 19px;
    }

    .hero_icon {
      margin-top: 20px;
    }

    text-align: center;
    padding-top: 3rem;

    h1 {
      color: #040242;
      line-height: 1;
      z-index: -2;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 104px;
      width: 70%;
      font-size: 75px;
      line-height: 1;
      margin: 2rem auto;
      font-size: 35px;
    }

    p {
      color: #47586e;
      margin: 0rem auto 2rem auto;
      font-size: 16px;
      width: 80%;
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
`;

export const Container = styled.div`
  @media (min-width: 1281px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: -2rem;
    background-color: #f9fafb;
    margin-bottom: -4rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 70vh;
    position: relative;
    /* padding-bottom: 10rem; */
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 60vh;
    position: relative;
    padding-top: -2rem;
    background-color: #f9fafb;
    margin-bottom: -3rem;
    padding-top: 1rem;
    margin-top: 12rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 100%;
    height: 50vh;
    margin-top: 10rem;
    position: relative;
    /* padding-top: 10rem; */
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }

  @media (max-width: 480px) {
    z-index: 3;
    background: url("/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 35rem;
    position: relative;
    background-color: #f9fafb;
    margin-bottom: -3rem;
  }
`;
