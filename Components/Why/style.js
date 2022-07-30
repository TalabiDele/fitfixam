import styled from "styled-components";

export const Container = styled.div`
  div.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #e6e6e9;
    height: 60vh;
  }

  div.image {
    background: url("/whyBg.png");
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      font-size: 64px;

      span {
        color: #f4442e;
      }
    }
  }

  div.texts {
    background: #07036e;

    p {
      font-size: 24px;
      width: 70%;
    }
  }

  div.texts,
  div.image {
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;
