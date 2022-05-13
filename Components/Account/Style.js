import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    /* grid-template-columns: 20% 80%; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    height: 100%;
    position: fixed;
    justify-items: center;
    /* grid-gap: 8rem; */
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  @media (min-width: 1281px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;

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

      div.category {
        transition: all 0.3s ease;
        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
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
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;

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

      div.category {
        p {
          font-size: 26px;
        }

        .artisan_category {
          display: flex;
          text-align: left;
          font-weight: 400;
          color: #050253;

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
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;

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

      div.category {
        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
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
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    margin-top: 4rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 40%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 16px;
    }

    p {
      font-size: 18px;
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

      div.category {
        p {
          font-size: 26px;
        }

        .artisan_category {
          display: flex;
          text-align: left;
          font-weight: 400;
          color: #050253;

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
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    justify-items: center;
    grid-gap: 10px;
    width: 100%;
    justify-self: flex-end;
    position: relative;
    margin: auto;
    overflow-y: scroll;
    height: 100%;
    margin-top: 6rem;
    padding-bottom: 5rem;

    h1 {
      font-size: 40px;
      margin: 5rem 0rem 3rem 0rem;
      padding: 0rem;
      height: 4rem;
    }

    .paragraph {
      width: 40%;
      margin: auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 16px;
    }

    p {
      font-size: 18px;
      margin: 0rem;
    }

    a {
      color: blue;
    }

    form {
      display: grid;
      width: 80%;
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

      div.category {
        p {
          font-size: 26px;
          text-align: left;
          font-weight: 400;
          color: #050253;
        }

        .artisan_category {
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
    }
  }
`;

export const Aside = styled.div`
  @media (min-width: 1281px) {
    text-align: center;
    background: url("/sign-up-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
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
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    text-align: center;
    background: url("/sign-up-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
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
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    text-align: center;
    background: url("/sign-up-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: #fff;
    padding: 10rem 3rem;
    /* position: fixed; */
    height: 100%;
    /* right: 100rem; */
    left: 0rem;
    top: 0rem;
    bottom: 0rem;

    h1 {
      font-size: 40px;
      margin-bottom: 0rem;
      margin-top: 15rem;
    }

    p {
      font-size: 20px;
      margin-top: 0rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ProviderBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
