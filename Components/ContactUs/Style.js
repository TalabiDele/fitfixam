import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0rem;
`;

export const Wrapper = styled.div`
  div.card_wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 60%;
    text-align: center;
    justify-items: center;
    margin: auto;
  }

  div.card {
    background-color: #f9fafb;
    border-radius: 10px;
    padding: 2rem 3rem;

    h3 {
      font-size: 34px;
    }

    p {
      font-size: 36px;
    }
  }

  div.form {
    display: grid;
    width: 50%;
    justify-content: center;
    margin: 5rem auto;
    background: #fff;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 4rem;

    form {
      display: grid;

      input {
        width: 550px;
        border: 2px solid #b2bbc6;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;
        font-size: 24px;
      }

      textarea {
        width: 550px;
        border: 2px solid #b2bbc6;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 2rem;
        font-size: 24px;
      }
    }
  }

  div.social {
    background: #3c91e6;
    color: #fff;
    text-align: center;
    padding: 5rem 0rem;

    h2 {
      font-size: 36px;
    }

    div.soc {
      font-size: 58px;
      display: flex;
      width: 15%;
      margin: auto;
      justify-content: space-between;
    }
  }
`;
