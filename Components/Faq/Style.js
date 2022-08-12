import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin-left: 20rem;
  margin-top: 10rem;

  .back {
    font-size: 20pxrem;
    width: 15%;
    margin-left: 6rem;
    text-decoration: underline;
    cursor: pointer;
    color: #07036e;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      color: #f4442e;
    }
  }
`;

export const Wrapper = styled.div`
  div.help {
    div.dot {
      background-color: #d7d6dc;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      margin-top: 5px;
    }
  }

  div.container {
    display: grid;
    grid-template-columns: 40% 60%;
    width: 90%;
    margin: auto;
    justify-items: center;
    font-size: 30px;
    /* align-items: center; */

    div.faq,
    div.question,
    div.complaint,
    div.about,
    div.contact {
      display: flex;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    div.help {
      p {
        cursor: pointer;
      }
    }
  }

  div.help {
    margin-top: 5rem;
    width: 80%;

    h1 {
      margin-bottom: 3rem;
    }
  }

  div.dropdown {
    margin-left: 2rem;
    margin-top: 2rem;

    p {
      margin-bottom: 1rem;
    }
  }

  div.frequently {
    width: 100%;
    background: #fcfdfd;
    border-radius: 10px;
    margin-top: 2rem;
    padding: 2rem;

    div.wrap {
      border-bottom: 1px solid #07036e;
      margin-bottom: 2rem;
    }

    h1 {
      margin-bottom: 3rem;
    }

    h2 {
      margin-bottom: 3rem;
      font-size: 28px;
    }

    p {
      font-size: 26px;
      margin-bottom: 2rem;
      line-height: 1.5;
    }

    div.question {
      text-align: center;
      display: grid;
      width: 70%;
      margin: auto;

      form {
        display: grid;
        width: 100%;
      }

      input {
        border: none;
        border-radius: 10px;
        padding: 1rem;
        background: rgba(196, 196, 196, 0.1);
        margin-bottom: 2rem;
      }

      textarea {
        border-radius: 10px;
        border: none;
        margin-bottom: 3rem;
        font-size: 18px;
        padding: 1rem;
        background: rgba(196, 196, 196, 0.1);
      }

      button {
        background-color: #07036e;
        color: #fff;
        padding: 1rem 0rem;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        font-size: 26px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          color: #07036e;
          border: 1.5px solid #07036e;
          background: none;
        }
      }
    }
  }
`;
