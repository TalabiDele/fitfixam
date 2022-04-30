import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 2100px) {
    background-color: #3c91e6;
    color: #fff;
    padding: 2rem 0rem;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding-left: 10rem;

    div.wrapper {
      width: 50%;
    }

    h1 {
      font-size: 48px;
      margin: 1rem 0rem;
    }

    p {
      font-size: 34px;
      margin-bottom: 1rem;
    }

    div.wrench {
      display: grid;
      position: relative;
      top: 3rem;
      overflow-x: clip;
      width: 20rem;
      right: 0rem;

      .tool {
        overflow-x: clip;
      }
    }
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;

    div.wrapper {
      width: 70%;
    }

    h1 {
      font-size: 48px;
      margin-bottom: 1rem;
    }

    p {
      font-size: 34px;
      margin-bottom: 1rem;
    }

    div.wrench {
      display: grid;
      position: relative;
      top: 3rem;
      overflow-x: clip;
      width: 20rem;
      right: 0rem;

      .tool {
        overflow-x: clip;
      }
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 0rem 3rem;

    div.wrapper {
      width: 100%;
    }

    h1 {
      font-size: 34px;
      width: 100%;
    }

    p {
      font-size: 25px;
    }

    div.wrench {
      display: grid;
      position: relative;
      top: 3rem;
      overflow-x: clip;
      width: 20rem;
      right: 0rem;

      .tool {
        overflow-x: clip;
        display: none;
      }
    }
  }

  @media (max-width: 600px) {
    display: grid;

    div.wrapper {
      width: 90%;
    }

    h1 {
      width: 100%;
      font-size: 29px;
    }
  }

  @media (max-width: 378px) {
    display: grid;
    justify-content: center;

    div.wrapper {
      padding: 0rem;
      margin: auto;
      width: 80%;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      width: 100%;
      /* margin: auto; */
    }

    p {
      font-size: 19px;
      width: 100%;
    }

    div.btn {
      width: 100%;
    }
  }
`;

export const Wrap = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    .action {
      background-color: #f4442e;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    .action {
      background-color: #f4442e;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    .action {
      background-color: #f4442e;
    }
  }
`;
