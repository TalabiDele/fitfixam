import styled from "styled-components";
import BG from "@/public/hammer-bg.png";

export const Container = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    padding: 5rem 0rem 5rem 0rem;
    width: 100%;
    margin: auto;
    /* background-color: #030046d4; */
    color: white;
    background: url("/hammer-bg.png"), #07036e;
    /* height: 500px; */
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    li {
      list-style: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 5rem 0rem 5rem 0rem;
    width: 100%;
    margin: auto;
    /* background-color: #030046d4; */
    color: white;
    background: url("/hammer-bg.png"), #07036e;
    /* height: 500px; */
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    li {
      list-style: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 5rem 0rem 5rem 0rem;
    width: 100%;
    margin: auto;
    /* background-color: #030046d4; */
    color: white;
    background: url("/hammer-bg.png"), #07036e;
    /* height: 500px; */
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    li {
      list-style: none;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    padding: 5rem 0rem 5rem 0rem;
    width: 100%;
    margin: auto;
    /* background-color: #030046d4; */
    color: white;
    background: url("/hammer-bg.png"), #07036e;
    /* height: 500px; */
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    text-align: center;

    li {
      list-style: none;
    }
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    display: grid;
    grid-template-columns: 2fr 6fr;
    justify-items: center;
    width: 90%;
    margin: auto;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 2fr 6fr;
    justify-items: center;
    width: 90%;
    margin: auto;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 90%;
    margin: auto;
  }
`;

export const Flex = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    ul {
      padding: 0;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    ul {
      padding: 0;
    }
  }

  @media (min-width: 375px) and (max-width: 812px) {
    ul {
      padding: 0;
    }
  }
  /* width: 90%; */
`;

export const Social = styled.div`
  @media (min-width: 375px) and (max-width: 812px) {
    text-align: center;
  }
`;

export const Grid = styled.div`
  @media (min-width: 1200px) and (max-width: 2100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;
    justify-items: center;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;
    justify-items: center;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    width: 100%;
  }
`;
