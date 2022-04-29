import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    margin: auto;
    justify-items: center;
    padding-bottom: 5rem;

    .card {
      background-color: #07036e;

      button {
        color: #07036e;
      }
    }
  }
`;

export const Container = styled.div``;

export const Card = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    width: 80%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: white;
    display: grid;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 1rem;
      font-size: 36px;
    }

    p {
      padding: 0rem 1rem;
      font-size: 19px;
      height: 8rem;
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 90%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: #fff;
    display: grid;
    margin: 2rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 0rem;
      font-size: 36px;
    }

    p {
      padding: 0rem 0rem;
      font-size: 19px;
      height: 8rem;
    }

    .image {
      border-radius: 10px;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    width: 60%;
    /* height: 489px; */
    background-color: #3c91e6;
    border-radius: 10px;
    color: #fff;
    display: grid;
    margin: 2rem;
    padding-bottom: 1rem;

    .card_details {
      padding: 0rem 1rem;
    }

    h1 {
      padding: 0rem 1rem;
      font-size: 36px;
    }

    p {
      padding: 0rem 1rem;
      font-size: 19px;
      height: 6rem;
    }

    .image {
      border-radius: 10px;
    }
  }
`;

export const Header = styled.h1`
  @media (min-width: 1200px) and (max-width: 2100px) {
    text-align: center;
    margin: 5rem 0rem;
    font-size: 45px;
    color: #040242;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    text-align: center;
    margin: 3rem 0rem;
    font-size: 45px;
    color: #040242;
  }
`;
