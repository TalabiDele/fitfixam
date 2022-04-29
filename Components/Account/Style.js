import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
`;

export const Wrapper = styled.div`
  text-align: center;
  /* display: grid; */
  justify-items: center;
  grid-gap: 10px;
  /* margin-top: 5rem; */
  position: relative;
  right: 0rem;
  left: 60rem;

  h1 {
    font-size: 60px;
    margin: 5rem 0rem 3rem 0rem;
    padding: 0rem;
    height: 4rem;
  }

  .paragraph {
    width: 40%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 18px;
  }

  p {
    font-size: 36px;
    margin: 0rem;
  }

  a {
    color: blue;
  }

  form {
    display: grid;
    width: 50%;
    margin: auto;

    input {
      border: 1px solid #909dad;
      height: 4rem;
      padding: 1rem;
      font-size: 18px;
      margin-bottom: 3rem;
      border-radius: 10px;
      border: ${({ error }) =>
        error ? "2px solid #ec3123" : "1px solid #909dad"};
    }

    span {
      /* margin-bottom: -2rem; */
      color: #ec3123;
      text-align: left;
    }

    p.is_artisan {
      font-size: 26px;
      font-weight: 400;
      text-align: left;
      color: #050253;
    }

    div.artisan_btn {
      display: flex;

      input {
        border: 1px solid #909dad;
        background: #fff;
        border-radius: 5px;
        padding: 0rem 2rem;
        margin-top: 1rem;
        margin-right: 2rem;
        cursor: pointer;
      }

      .active {
        background: #050253;
        color: #fff;
      }
    }
  }
`;

export const Aside = styled.div`
  text-align: center;
  background: url("/sign-up-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* width: 100%; */
  color: #fff;
  padding: 10rem;
  position: fixed;
  /* right: 100rem; */
  left: 0rem;
  top: 0rem;
  bottom: 0rem;

  h1 {
    font-size: 72px;
    margin-bottom: 0rem;
    margin-top: 15rem;
  }

  p {
    font-size: 36px;
    margin-top: 0rem;
  }
`;

export const ProviderBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
