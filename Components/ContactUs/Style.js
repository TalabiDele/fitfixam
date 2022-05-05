import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1281px) {
    margin: 5rem 0rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin: 5rem 0rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin: 5rem 0rem;
  }

  @media (max-width: 480px) {
    margin: 5rem 0rem;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1281px) {
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
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.card_wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 90%;
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
        width: 30%;
        margin: auto;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.card_wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 90%;
      text-align: center;
      justify-items: center;
      margin: 2rem auto;
    }

    div.card {
      background-color: #f9fafb;
      border-radius: 10px;
      padding: 2rem 3rem;
      margin-bottom: 2rem;

      h3 {
        font-size: 27px;
      }

      p {
        font-size: 27px;
      }
    }

    div.form {
      display: grid;
      width: 90%;
      justify-content: center;
      margin: 5rem auto;
      background: #fff;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 4rem;

      form {
        display: grid;
        width: 100%;
        margin: auto;

        input {
          border: 2px solid #b2bbc6;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 2rem;
          font-size: 24px;
        }

        textarea {
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
        width: 30%;
        margin: auto;
        justify-content: space-between;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.card_wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 90%;
      text-align: center;
      justify-items: center;
      margin: 2rem auto;
    }

    div.card {
      background-color: #f9fafb;
      border-radius: 10px;
      padding: 2rem 3rem;
      margin-bottom: 2rem;

      h3 {
        font-size: 27px;
      }

      p {
        font-size: 27px;
      }
    }

    div.form {
      display: grid;
      width: 90%;
      justify-content: center;
      margin: 5rem auto;
      background: #fff;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 4rem;

      form {
        display: grid;
        width: 100%;

        input {
          border: 2px solid #b2bbc6;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 2rem;
          font-size: 24px;
        }

        textarea {
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
        width: 60%;
        margin: auto;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 480px) {
    div.card_wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      width: 90%;
      text-align: center;
      justify-items: center;
      margin: 2rem auto;
    }

    div.card {
      background-color: #f9fafb;
      border-radius: 10px;
      padding: 2rem 3rem;
      margin-bottom: 2rem;

      h3 {
        font-size: 27px;
      }

      p {
        font-size: 27px;
      }
    }

    div.form {
      display: grid;
      width: 90%;
      justify-content: center;
      margin: 5rem auto;
      background: #fff;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      padding: 4rem;

      form {
        display: grid;
        width: 100%;

        input {
          border: 2px solid #b2bbc6;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 2rem;
          font-size: 24px;
        }

        textarea {
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
        width: 60%;
        margin: auto;
        justify-content: space-between;
      }
    }
  }
`;
