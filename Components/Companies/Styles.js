import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 4rem auto;
  color: #020127;

  div.container {
    h1 {
      color: #020127;
    }

    .paragraph {
      /* margin: 0.5rem 0rem 3rem 0rem; */
      margin-bottom: 3rem;
    }
  }

  div.card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-left: 5px solid #546881;
    background-color: #f9fafb;
    border-radius: 5px;
    padding: 1rem 0rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  div.company {
    padding: 1rem 3rem;
    border-right: 0.5px solid #546881;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    svg {
      font-size: 1.5rem;
      color: #3c91e6;
      margin-right: 2rem;
    }
  }

  div.icon {
    background: #07036e;
    color: #fff;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    margin: 0rem auto 1rem auto;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  div.social {
    text-align: center;
  }

  div.details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    justify-items: center;
  }
`;
