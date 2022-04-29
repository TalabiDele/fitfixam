import styled from "styled-components";

export const Container = styled.div`
  z-index: 500;
  background-color: #fff;

  button {
    background: #07036e;
    border-radius: 5px;
    font-size: 19px;
    border: none;
    color: #fff;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      border: 1.5px solid #07036e;
      background: none;
      color: #07036e;
    }
  }

  div.form-modal {
    background-color: #04023ac0;
    position: fixed;
    /* width: 100%; */
    height: 100%;
    z-index: 800;
    top: 0;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    transition: all 0.1s ease-in-out;

    .cancel_icon {
      position: relative;
      top: 5rem;
      width: 100%;
      bottom: 0;
      cursor: pointer;
    }

    form.edit {
      background-color: #f2f4f7;
      width: 70%;
      border-radius: 10px;
      margin: 7rem auto;
      grid-template-columns: 30% 70%;
      justify-items: center;
      width: ${({ isOpen }) => (isOpen ? "70%" : "0%")};
      display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
      transition: all 0.1s ease-in-out;
      /* align-items: center; */

      div.user {
        display: grid;
        justify-items: center;
        width: 100%;

        div.user_info {
          background: #d9d9de;
          width: 100%;
          border-radius: 10px 10px 0px 0px;
          height: 10rem;
          padding-top: 4rem;
          margin: 0rem auto;

          h2 {
            margin-bottom: 1rem;
          }

          div.img {
            width: 40%;
            margin: auto;
          }

          .image {
            border-radius: 50%;
            margin: auto;
            width: 60%;
          }

          div.edit_img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: #f2f4f7;
            position: relative;
            bottom: 3rem;
            left: 14rem;
            text-align: center;

            .pen {
              margin-top: 8px;
            }
          }

          h2 {
            text-align: center;
            input.name {
              font-size: 26px;
              text-align: center;
              font-weight: 700;
              border: 1px solid #b2bbc6;
              border-radius: 10px;
              padding: 0.5rem;
            }
          }
        }

        div.additionals {
          width: 90%;
          margin: 0rem auto;

          p {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            input {
              font-size: 19px;
              border-radius: 10px;
              padding: 0.5rem;
              width: 90%;
              border: 1px solid #b2bbc6;
            }
          }
        }
      }
    }

    div.edit_form {
      padding: 4rem 0rem;
      width: 95%;

      h1 {
        font-size: 26px;
      }

      h2,
      p {
        font-size: 19px;
      }

      div.modal {
        div.header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        textarea,
        input {
          border: 1px solid #b2bbc6;
          border-radius: 10px;
          font-size: 19px;
          padding: 0.5rem;
        }

        textarea {
          width: 80%;
          margin: 1rem 0rem;
        }

        div.grid {
          display: flex;
          grid-gap: 1rem;
          margin-bottom: 1rem;
          justify-content: space-between;
          width: 80%;
          align-items: center;

          input {
            width: 90%;
          }
        }
      }
    }

    form.reset {
      div.reset_password {
        display: grid;
        margin-top: 1rem;

        label {
          margin-bottom: 1rem;
        }

        div.reset_input {
          input {
            font-size: 19px;
            padding: 0.5rem;
            width: 30%;
            border-radius: 10px;
            border: 1px solid #b2bbc6;
            margin-right: 1rem;
          }
        }
      }
    }
  }

  div.container {
    display: grid;
    grid-template-columns: 30% 70%;
    justify-items: center;

    div.detail,
    div.info {
      background-color: #f9fafb;
      border-radius: 10px;
      margin: 4rem auto;
    }

    div.detail {
      width: 70%;
      display: grid;
      justify-items: center;

      div.user {
        background: #d9d9de;
        width: 100%;
        margin: 0rem auto;
        display: grid;
        justify-items: center;
        height: 10rem;
        border-radius: 10px 10px 0px 0px;
        margin-bottom: 2rem;

        div.img_container {
          margin: 4rem 0rem 0rem 0rem;

          .image {
            border-radius: 50%;
          }
        }

        div.name {
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          padding: 0rem 5rem 2rem 5rem;
          color: #020127;
          display: flex;
          font-size: 26px;
          font-weight: 700;
        }
      }
    }

    div.contact {
      margin-top: 8rem;
      margin-bottom: 4rem;
      width: 80%;

      h1 {
        color: #020127;
        font-size: 26px;
        margin-bottom: 1rem;
      }

      p {
        color: #020127;
        font-size: 19px;
        display: flex;
        align-items: center;
        grid-gap: 1rem;
        width: 90%;
        margin-bottom: 1rem;
      }
    }

    div.info {
      width: 90%;
      z-index: 500;
      color: #020127;
      /* margin-right: 10rem; */

      div.split {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 3rem auto 0rem auto;

        h1 {
          font-size: 26px;
          /* margin-bottom: 2rem; */
        }
      }

      p.personal {
        width: 80%;
        margin: 1rem auto;
        font-size: 19px;
      }

      div.flex {
        display: flex;
        grid-gap: 1rem;
        align-items: center;
        width: 90%;
        margin: auto;
        margin-bottom: 1rem;

        h2,
        p {
          font-size: 19px;
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;

  div.wrapper {
    background: #f9fafb;
    border-radius: 10px;
    padding: 3rem;
    z-index: 700;

    h1 {
      font-size: 26px;
      margin-bottom: 2rem;
    }

    div.card {
      background: #ebeef2;
      border-radius: 10px;
      padding: 2rem;
      margin-bottom: 2rem;

      div.dets {
        display: flex;
        gap: 1rem;
        align-items: center;

        .image {
          border-radius: 50%;
        }

        div.post {
          div.username {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;

            h2 {
              font-size: 26px;
            }

            p {
              font-size: 14px;
            }
          }
        }

        div.user_post {
          p {
            font-size: 19px;
          }
        }
      }
    }
  }
`;
