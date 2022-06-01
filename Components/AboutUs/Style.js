import styled from "styled-components";

export const Container = styled.div`
  background: url("/home-bg.png"), #f9fafb;
  background-size: contain;
  width: 100%;
  /* height: 50rem; */
  background-repeat: no-repeat;

  @media (min-width: 1281px) {
    background: url("/home-bg.png"), #f9fafb;
    background-size: contain;
    width: 100%;
    /* height: 50rem; */
    background-repeat: no-repeat;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background: url("/home-bg.png"), #f9fafb;
    background-size: contain;
    width: 100%;
    /* height: 50rem; */
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: url("/home-bg.png"), #f9fafb;
    background-size: contain;
    width: 100%;
    /* height: 50rem; */
    background-repeat: no-repeat;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background: url("/home-bg.png"), #f9fafb;
    background-size: cover;
    width: 100%;
    /* height: 50rem; */
    background-repeat: no-repeat;
  }

  @media (max-width: 480px) {
    background: url("/home-bg.png"), #f9fafb;
    background-size: cover;
    width: 100%;
    /* height: 50rem; */
    background-repeat: no-repeat;
  }
`;

export const Wrapper = styled.div`
  padding: 4rem 0rem;

  h2 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 3rem;
  }

  p {
    width: 30%;
    font-size: 20px;
  }

  /* p.first {
    margin-left: 15rem;
  }

  p.para {
    margin-left: 60rem;
  } */

  .image {
    position: relative;
    transform: rotate(-50deg);
    /* padding-left: 20rem; */
    left: 20rem;
  }

  div.img {
    margin-left: 40rem;
    position: relative;
    top: 4rem;
  }

  div.about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 100%;
    margin: 5rem auto;
    padding: 7rem 0rem;
    background-color: #fff;

    div.vision {
      border-right: 2px solid #060258;
    }

    p {
      width: 60%;
      margin: auto;
    }

    h1,
    p {
      text-align: center;
    }

    ul {
      font-weight: 400;
      font-size: 30px;
      line-height: 45px;
      width: 60%;
      margin: auto;

      li {
        font-size: 20px;
      }
    }
  }

  div.founder {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 80%;
    margin: 5rem auto;
    /* align-items: center; */
    background: #f9fafb;
    padding: 5rem 0rem;
  }

  div.about_founder {
    width: 90%;
    margin: auto;

    p {
      width: 100%;
    }
  }

  @media (min-width: 1281px) {
    padding: 4rem 0rem;

    h2 {
      font-size: 38px;
      text-align: center;
      margin-bottom: 3rem;
    }

    p {
      width: 60%;
      margin: auto;
      font-size: 20px;
    }

    p.first {
      /* margin-left: 15rem; */
      text-align: center;
    }

    /* p.para {
      margin-left: 60rem;
    } */

    .image {
      position: relative;
      transform: rotate(-50deg);
      /* padding-left: 20rem; */
      left: 20rem;
    }

    div.img {
      margin-left: 40rem;
      position: relative;
      top: 4rem;
    }

    div.about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      padding: 7rem 0rem;
      background-color: #fff;

      div.vision {
        border-right: 2px solid #060258;
      }

      p {
        width: 60%;
        margin: auto;
      }

      h1,
      p {
        text-align: center;
      }

      ul {
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
        width: 60%;
        margin: auto;

        li {
          font-size: 20px;
        }
      }
    }

    div.founder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 80%;
      margin: 5rem auto;
      /* align-items: center; */
      background: #f9fafb;
      padding: 5rem 0rem;
    }

    div.about_founder {
      width: 90%;
      margin: auto;

      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    padding: 4rem 0rem;

    h2 {
      font-size: 38px;
      text-align: center;
      margin-bottom: 3rem;
    }

    p {
      width: 60%;
      margin: auto;
      font-size: 20px;
    }

    p.first {
      /* margin-left: 15rem; */
      text-align: center;
    }

    .image {
      position: relative;
      transform: rotate(-50deg);
      /* padding-left: 20rem; */
      left: 15rem;
    }

    div.img {
      margin-left: 25rem;
      position: relative;
      top: 4rem;
    }

    div.about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      padding: 7rem 0rem;
      background-color: #fff;

      div.vision {
        border-right: 2px solid #060258;
      }

      p {
        width: 60%;
        margin: auto;
      }

      h1,
      p {
        text-align: center;
      }

      ul {
        font-weight: 400;
        font-size: 30px;
        line-height: 45px;
        width: 60%;
        margin: auto;

        li {
          font-size: 20px;
        }
      }
    }

    div.founder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 80%;
      margin: 5rem auto;
      /* align-items: center; */
      background: #f9fafb;
      padding: 5rem 0rem;
    }

    div.about_founder {
      width: 90%;
      margin: auto;

      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 4rem 0rem;

    h2 {
      text-align: center;
      font-size: 38px;
      margin-bottom: 3rem;
    }

    p {
      width: 60%;
      margin: auto;
      font-size: 20px;
    }

    p.first {
      /* margin-left: 15rem; */
      text-align: center;
    }

    .image {
      position: relative;
      transform: rotate(-50deg);
      /* padding-left: 20rem; */
      left: 15rem;
    }

    div.img {
      margin-left: 15rem;
      position: relative;
      top: 2rem;
    }

    div.about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      padding: 7rem 0rem;
      background-color: #fff;

      div.vision {
        border-right: 2px solid #060258;
      }

      p {
        width: 60%;
        margin: auto;
        font-size: 20px;
      }

      h1,
      p {
        text-align: center;
      }

      ul {
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        width: 60%;
        margin: auto;

        li {
          font-size: 20px;
        }
      }
    }

    div.founder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 90%;
      margin: 5rem auto;
      /* align-items: center; */
      background: #f9fafb;
      padding: 5rem 0rem;
      grid-gap: 2rem;
    }

    div.about_founder {
      width: 100%;
      margin: auto;

      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 4rem 0rem;

    h2 {
      font-size: 25px;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      width: 80%;
      margin: auto;
      font-size: 16px;
    }

    p.first {
      /* margin-left: 15rem; */
      text-align: center;
    }

    .image {
      position: relative;
      transform: rotate(-50deg);
      /* padding-left: 20rem; */
      left: 15rem;
    }

    div.img {
      margin-left: 15rem;
      position: relative;
    }

    div.about {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      padding: 7rem 0rem;
      background-color: #fff;

      div.vision {
        border-right: 2px solid #060258;
      }

      p {
        width: 100%;
        margin: auto;
        font-size: 16px;
      }

      h1,
      p {
        text-align: center;
      }

      ul {
        font-weight: 400;
        font-size: 20px;
        line-height: 45px;
        width: 90%;
        padding-left: 1rem;
        margin: auto;

        li {
          font-size: 16px;
        }
      }
    }

    div.founder {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      /* align-items: center; */
      background: #f9fafb;
      padding: 2rem 2rem;
      grid-gap: 2rem;
    }

    div.about_founder {
      width: 100%;
      margin: auto;

      p {
        width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 4rem 0rem;

    h2 {
      font-size: 25px;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      width: 80%;
      margin: auto;
      font-size: 16px;
    }

    p.first {
      /* margin-left: 15rem; */
      text-align: center;
    }

    .image {
      position: relative;
      transform: rotate(-50deg);
      /* padding-left: 20rem; */
      left: 15rem;
    }

    div.img {
      margin-left: 10rem;
      position: relative;
    }

    div.about {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      padding: 7rem 0rem;
      background-color: #fff;

      div.vision {
        border-right: none;
        margin-bottom: 4rem;
      }

      p {
        width: 90%;
        margin: auto;
        font-size: 16px;
      }

      h1,
      p {
        text-align: center;
      }

      ul {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        width: 90%;
        padding-left: 1rem;
        margin: auto;

        li {
          font-size: 16px;
        }
      }
    }

    div.founder {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      /* align-items: center; */
      background: #f9fafb;
      padding: 2rem 2rem;
      grid-gap: 2rem;
    }

    div.about_founder {
      width: 100%;
      margin: auto;

      p {
        width: 100%;
      }
    }
  }
`;
