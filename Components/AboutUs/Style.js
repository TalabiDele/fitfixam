import styled from "styled-components";

export const Container = styled.div`
  background: url("/home-bg.png"), #f9fafb;
  background-size: contain;
  width: 100%;
  /* height: 50rem; */
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  padding: 4rem 0rem;

  h2 {
    font-size: 48px;
    padding-left: 5rem;
    margin-bottom: 3rem;
  }

  p {
    width: 30%;
    font-size: 30px;
  }

  p.first {
    margin-left: 15rem;
  }

  p.para {
    margin-left: 60rem;
  }

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
`;
