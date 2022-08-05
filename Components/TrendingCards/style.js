import styled from "styled-components";

export const Container = styled.div`
  background: url("/home-bg.png");
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  /* margin-top: 5rem; */

  div.card_container {
    position: relative;

    &:last-child {
      z-index: -1;
      bottom: 10rem;
    }

    &:nth-child(2) {
      z-index: 0;
    }

    &:first-child {
      z-index: -1;
      top: 10rem;
    }
  }

  div.card {
    background: #ffffff;
    box-shadow: 0px 10px 40px 60px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 3rem;
    width: 70%;
    z-index: 1;
    margin: auto;

    p {
      font-size: 19px;
      line-height: 1.5;
      color: #1d242d;
      width: 80%;
      margin: 0rem auto 3rem auto;
    }
  }

  div.user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
  }

  div.details {
    display: flex;
    gap: 1rem;

    h3 {
      margin-top: 1rem;
      color: #151a20;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.card {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.card {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.card {
      width: 100%;

      p {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 480px) {
    div.card {
      width: 100%;
      padding: 1rem;

      p {
        font-size: 13px;
        width: 100%;
      }
    }

    div.user {
      width: 100%;

      h3 {
        font-size: 14px;
      }
    }

    div.details {
      h3 {
        font-size: 14px;
      }
    }
  }
`;
