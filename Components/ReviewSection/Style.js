import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 2100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    justify-items: center;
    /* align-items: center; */
    margin: auto;
    z-index: 10;

    p {
      color: #3d4c5e;
      width: 70%;
      margin: auto;
      font-size: 19px;
    }

    span.video {
      width: 100%;
      margin: auto;

      img {
        /* width: 100%; */
      }

      /* div.video-react-controls-enabled {
        padding-top: 0%;
      }

      button.video-react-button {
        display: none;
      }

      div.video-react-control-bar {
        display: none;
      } */

      div {
        width: 100%;
      }
    }

    video {
      border-radius: 10px;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
      width: 80%;
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

    p {
      font-size: 16px;
    }

    span.video div {
      width: 400px;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 16px;
    }

    span.video div {
      width: 300px;
      margin: auto;
    }
  }

  @media (max-width: 375px) {
    span.video div {
      width: 250px;
      margin: auto;
    }
  }
`;

export const Container = styled.div`
  margin-top: 2rem;
  padding-top: 10rem;
  background: url("/Blocks.png"), #f9fafb;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  z-index: 10;
`;

export const Arrow = styled.div`
  width: 5%;
  /* margin-left: 20rem; */
  margin: 2rem auto;
`;

export const Header = styled.h1`
  /* margin-left: 15rem; */
  /* width: 50%; */
  /* margin-top: 4rem;
  margin-bottom: 2rem; */
  margin: 0rem auto 1rem auto;
  width: 70%;
  /* margin-left: 12rem; */
  font-size: 30px;

  @media (max-width: 1900px) {
    /* margin: 3rem 0rem 1rem 3rem; */
  }

  @media (max-width: 1200px) {
    /* margin-left: 2rem; */
  }

  @media (max-width: 768px) {
    margin: 3rem auto 1rem auto;
    width: 90%;
    text-align: left;
    display: grid;
    justify-self: start;
    font-size: 24px;
  }

  @media (max-width: 600px) {
    /* margin-left: 2rem; */
  }

  @media (max-width: 375px) {
    /* margin-left: 1rem; */
    font-size: 20px;
  }
`;
