import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    background-color: #3c91e6;
    color: #fff;
    padding: 2rem 0rem;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    background-color: #3c91e6;
    color: #fff;
    padding: 2rem 0rem;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    background-color: #3c91e6;
    color: #fff;
    padding: 4rem 0rem;
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
    }

    p {
      font-size: 34px;
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

  @media (min-width: 768px) and (max-width: 1200px) {
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
    }

    p {
      font-size: 34px;
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

  @media (min-width: 375px) and (max-width: 812px) {
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
