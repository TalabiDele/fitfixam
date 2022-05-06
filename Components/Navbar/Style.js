import styled from "styled-components";

export const Sign = styled.div`
  /* position: absolute; */

  div.sign_nav {
    z-index: 100;
    position: absolute;
    color: white;
    margin-left: 3rem;
    font-size: 26px;
    transition: all 2s ease;
    margin-top: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }
  .blue {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.sign_nav {
      color: #07036e;
    }

    .white {
      display: none;
    }

    .blue {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .white {
      display: none;
    }

    .blue {
      display: block;
      width: 100%;
      margin: auto;
    }
  }
`;

export const Modal = styled.div`
  @media (min-width: 1281px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 8.5rem;
      right: 17rem;
      cursor: pointer;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 8.5rem;
      right: 10rem;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 8.5rem;
      right: 2rem;
      cursor: pointer;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 8.5rem;
      right: 2rem;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    background: #0201278f;
    position: fixed;
    height: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    width: ${({ isModal }) => (!isModal ? "0rem" : "100%")};
    opacity: ${({ isModal }) => (!isModal ? "0" : "1")};
    /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
    z-index: 200;
    transition: all 0.1s ease-in-out;

    div.cancel_icon {
      position: absolute;
      top: 8.5rem;
      right: 1rem;
      cursor: pointer;
    }
  }
`;

export const CreatePost = styled.div`
  @media (min-width: 1281px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "70%")};
    margin: 10rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "70%")};
    margin: 10rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 10rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 10rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 480px) {
    background-color: #fff;
    width: ${({ isModal }) => (isModal ? "0rem" : "90%")};
    margin: 10rem auto;
    border-radius: 20px;
    transition: all 0.1s ease-in-out;
  }
`;

export const Tags = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 20px;
    }

    input {
      font-size: 15px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 16px;
    }

    input {
      font-size: 12px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 1rem;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;

    .active {
      border: 1.5px solid #07036e;
      background: none;
    }

    h2 {
      color: #020127;
      margin-right: 2rem;
      font-size: 16px;
    }

    input {
      font-size: 12px;
      border: none;
      padding: 0.7rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 1rem;
    }

    input.carpenter {
      background: #c3ddf7;
      margin-right: 2rem;
    }

    input.plumber {
      background: #d9d9de;
      margin-right: 2rem;
    }

    input.electrician {
      background: #fcc5be;
      margin-right: 2rem;
    }

    input.artisan {
      background: #fdd6bb;
    }
  }
`;

export const Contain = styled.div`
  display: ${({ isModal }) => (!isModal ? "none" : "block")};
  text-align: center;
  padding: 5rem 0rem;

  h1 {
    font-size: 40px;
    color: #07036e;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 30px;
    color: #07036e;
  }
`;

export const PostContainer = styled.div`
  @media (min-width: 1281px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem 4rem 2rem 4rem;
      font-size: 24px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 4rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem;
      font-size: 19px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 2rem;
    }
  }

  @media (max-width: 480px) {
    position: relative;
    display: ${({ isModal }) => (!isModal ? "none" : "block")};
    /* width: ${({ isModal }) => (!isModal ? "0rem" : "70%")}; */

    textarea {
      margin-top: 1rem;
      border-right: none;
      border-left: none;
      border-top: 2px solid #d9d9de;
      border-bottom: 2px solid #d9d9de;
      width: 100%;
      /* width: ${({ isModal }) => (isModal ? "0rem" : "100%")}; */
      /* display: ${({ isModal }) => (!isModal ? "none" : "block")}; */
      height: 20rem;
      padding: 2rem;
      font-size: 19px;
    }

    h2.post_header {
      color: #020127;
      padding: 2rem 2rem 0rem 2rem;
    }
  }
`;

export const Actions = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 50%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 80%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 80%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 1rem;
      font-size: 19px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 3rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 90%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 0.7rem;
      font-size: 14px;
      border-radius: 10px;
      cursor: pointer;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 1rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    flex-direction: column;
    width: 90%;
    margin: auto;

    /* div.btn {
    display: flex;
    justify-self: flex-end;
  } */

    button {
      border: none;
      padding: 0.7rem;
      font-size: 14px;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 1rem;
    }

    button.btn_cancel {
      background: #f5f7f9;
      margin-right: 1rem;
    }

    button.btn_send {
      background: #07036e;
      font-weight: 700;
      color: #fff;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 1rem;

  a.image {
    width: 10rem;
  }

  .img {
    height: 10rem;
  }

  div.sign_nav {
    z-index: 100;
    position: absolute;
    color: white;
    margin-left: 3rem;
    font-size: 26px;
    transition: all 2s ease;
    margin-top: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    list-style: none;
  }

  ul {
    display: grid;
    grid-template-columns: 10% 90%;
    justify-items: center;
    align-items: center;
    height: 6rem;
  }

  .burger_mobile {
    display: none;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 900px) {
    transition: all 0.2s ease-in-out;
    position: fixed;
    z-index: 500;
    top: 0rem;
    /* margin-bottom: 4rem; */
    /* bottom: 0rem; */
    background-color: #f0f3f6;
    height: 6rem;
    padding-top: 1px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);

    .img {
      z-index: 600;
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;
    }

    div.button_nav {
      z-index: 700;
    }

    .burger_mobile {
      z-index: 800;
      position: absolute;
      right: 0;
      margin-right: 2rem;
      display: block;
      cursor: pointer;
    }

    ul {
      grid-template-columns: 30%;
      justify-content: space-between;
      transition: all 0.2s ease-in-out;
    }

    a {
      font-weight: 700;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  /* grid-template-columns: repeat(2, 1fr); */
  /* justify-items: flex-end; */
  align-items: center;
  width: 95%;
  font-size: 26px;
  margin: auto;
  transition: all 0.2s ease-in-out;

  div.contain {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
  }

  div.button_nav {
    justify-self: end;
  }

  @media (max-width: 1200px) {
    /* grid-template-columns: repeat(1, 1fr); */
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    /* height: 100%; */
    height: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: 0rem;
    bottom: 0rem;
    z-index: 200;
    background-color: #f0f3f6;
    width: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    padding-top: 0rem;
    padding-bottom: 7rem;
    transition: all 0.2s ease-in-out;

    div.contain {
      flex-direction: column;
      text-align: center;
      align-content: space-between;
      height: 50%;
      transition: all 0.2s ease-in-out;
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }

    div.button_nav {
      display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    }

    /* .burger_mobile {
      position: absolute;
    } */
  }
`;

export const UserNav = styled.div`
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    /* margin: auto; */
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    div {
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;
      /* width: 100%;
      justify-content: space-between; */

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 12%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    /* margin: auto; */
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    div {
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;
      /* width: 100%;
      justify-content: space-between; */

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 12%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  /* @media (max-width: 768px) {
    input {
      width: 90%;
    }
  } */

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    /* grid-template-columns: 10% 60% 30%; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 90%;
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 12%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    /* grid-template-columns: 10% 60% 30%; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 90%;
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 100%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 12%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }

    .username {
      display: none;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    /* grid-template-columns: 10% 60% 30%; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #f0f3f6;
    color: #07036e;
    padding: 1rem 2rem 1rem 0rem;
    transition: all 0.3s ease;

    .bell {
      transform: rotate(9.21deg);
      margin: 0rem 1rem 0rem -2rem;
    }

    .user_image {
      border-radius: 50%;
      cursor: pointer;
    }

    form {
      width: 90%;
    }
    input {
      /* width: ${({ userIsOpen }) => (userIsOpen ? "60rem" : "100rem")}; */
      width: 90%;
      border: none;
      padding: 1rem;
      font-size: 18px;
      border-radius: 15px;
      transition: all 0.3s ease;
    }

    div.user_profile {
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      justify-self: flex-end;

      div.user_info {
        display: flex;
        align-items: center;
      }

      h3 {
        margin: 0rem 1rem;
        cursor: pointer;
      }
    }

    div.profile_dropdown {
      position: absolute;
      /* left: 50rem; */
      right: 0rem;
      margin-right: 2rem;
      margin-top: 5.3rem;
      top: 0rem;
      background: #f0f3f6;
      box-shadow: 0px 4px 8px rgba(6, 2, 88, 0.25);
      border-radius: 0px 0px 5px 5px;
      width: 12%;
      padding: 2rem 2rem;
      text-align: center;
      height: ${({ isProfile }) => (isProfile ? "12rem" : "0rem")};
      opacity: ${({ isProfile }) => (isProfile ? "1" : "0")};
      transition: all 0.1s ease-in-out;
      z-index: 1000;

      div {
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #020127;
        padding-bottom: 2rem;
        font-size: 19px;
        width: 100%;
        margin: 0rem auto 1rem auto;
        display: ${({ isProfile }) => (isProfile ? "flex" : "none")};

        p {
          margin-left: 10px;
          cursor: pointer;
        }
      }

      button {
        border: none;
        background: none;
        color: #07036e;
        font-weight: 700;
        font-size: 19px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        display: ${({ isProfile }) => (isProfile ? "inline-block" : "none")};
        /* text-align: center;
        justify-content: center; */

        &:hover {
          background-color: #f4442e;
          color: #fff;
        }
      }
    }

    .username {
      display: none;
    }
  }

  /* @media (max-width: 600px) {
    input {
      width: 80%;
    }
  }

  @media (max-width: 378px) {
    input {
      width: 80%;
    }

    .username {
      display: none;
    }
  } */
`;

export const UserSideNav = styled.div`
  display: grid;
  /* padding: 1rem; */
  background: #f0f3f6;
  width: ${({ userIsOpen }) => (userIsOpen ? "15%" : "4%")};
  height: 100%;
  position: fixed;
  transition: all 0.1s ease;
  padding: 0rem;
  z-index: 100;
  transition: all 0.3s ease-in-out;

  .active {
    border-right: 5px solid #07036e;
    background-color: #dad9e9;
    transition: all 0.3s ease-in-out;
  }

  .add_post_page {
    background-color: #07036e;
    padding: 3px;
    border-radius: 7px;
    position: fixed;
    left: 55rem;
    top: 30rem;
  }

  div.settings {
    margin-top: 15rem;
  }

  @media (min-width: 1281px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "16%" : "4%")};
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "25%" : "6%")};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "30%" : "8%")};
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "50%" : "12%")};
  }

  @media (max-width: 480px) {
    width: ${({ userIsOpen }) => (userIsOpen ? "75%" : "12%")};
  }
`;

export const IconNav = styled.div`
  padding-left: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  height: 4rem;

  p {
    color: #07036e;
    margin-left: 2rem;
    font-weight: bold;
  }

  &:hover {
    background-color: #dad9e9;
  }

  .add_post {
    background-color: #f4442e;
    padding: 3px;
    border-radius: 3px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "30px" : "10px")};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-right: ${({ userIsOpen }) => (userIsOpen ? "30px" : "10px")};
  }
`;

export const NavMenu = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "16%" : "5%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "25%" : "6%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "30%" : "8%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "50%" : "12%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    position: fixed;
    left: 0;
    z-index: 100;
    width: ${({ userIsOpen }) => (userIsOpen ? "75%" : "12%")};
    /* width: 4%; */

    div.side_menu {
      background: #f0f3f6;
      height: 10rem;
      width: 4.7rem;
    }

    .menu {
      margin-left: 1rem;
      top: 1rem;
      left: 0rem;
      position: relative;
      top: 4rem;
    }

    .logo_image {
      background-color: #f0f3f6;
      padding: 2rem 5rem 2rem 2rem;
      z-index: 400;
      width: 100%;
      position: relative;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const Search = styled.div`
  @media (min-width: 1281px) {
    margin-left: 8rem;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 8rem;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 3rem;
    width: 80%;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 5rem;
    margin-right: 1rem;
    width: 80%;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }

  @media (max-width: 480px) {
    margin-left: 4rem;
    width: 80%;
    /* display: flex; */

    .search {
      position: absolute;
      margin-left: 1rem;
      margin-top: 0.8rem;
      z-index: 1;
    }

    input {
      padding-left: 3rem;
    }
  }
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: right;

  button {
    border: none;
    background: none;
    color: #07036e;
    font-weight: 700;
    font-size: 19px;
    padding: 1rem 1rem;
    width: 7rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    /* display: grid;
    grid-template-columns: repeat(3, 1fr); */

    &:hover {
      color: #fff;
      background: #07036e;
      border-radius: 7px;
    }
  }

  h3 {
    margin: 0rem 1rem;
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    gap: 0.5rem;

    button {
      font-size: 14px;
      width: 4rem;
      padding: 1rem 0.2rem;
    }
  }

  @media (max-width: 375px) {
    justify-content: left;
    margin-left: -20px;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(6, 2, 88, 0.25);
  border-radius: 10px;
  width: 70%;
  margin: auto;
  left: 15rem;
  z-index: 800;
  font-size: 19px;
  height: ${({ isSearch }) => (isSearch ? "40rem" : "0rem")};
  overflow-y: scroll;
  transition: all 0.3s ease;

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #dbdbdb;
  }

  div.search_container {
    padding-top: 2rem;
    width: 90%;
    margin: auto;
    display: ${({ isSearch }) => (isSearch ? "block" : "none")};
  }

  div.search_item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #b2bbc6;
    padding-bottom: 2rem;

    h3 {
      color: #6069f0;
      cursor: pointer;
    }
  }
`;
