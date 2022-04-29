import styled from "styled-components";

export const Container = styled.div`
  margin-left: 7rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #020127;
  border-radius: 10px;
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 5rem;
  background: #f9fafb;
  cursor: pointer;
  height: 10rem;

  h2 {
    font-size: 19px;
    color: #020127;
    margin-bottom: 1rem;
  }

  p {
    font-size: 10px;
  }

  div.image {
    margin-right: 2rem;

    .blog_image {
      border-radius: 10px;
    }
  }

  div.info {
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    color: #020127;
    margin-top: 1rem;
  }
`;

export const Wrapper = styled.div`
  color: #020127;
  position: fixed;
  left: 65rem;
  overflow-y: scroll;
  height: 55rem;

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

  h1 {
    text-align: center;
  }

  div.details {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: auto;
    p {
      text-align: center;
    }
  }

  p.post_article {
    width: 90%;
    margin: auto;
    font-size: 26px;
  }
`;

export const Interract = styled.div``;

export const None = styled.div``;

export const Reactions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  div.like > div,
  div.comment_here,
  div.share_here {
    display: flex;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }
`;

export const UsersComments = styled.div`
  display: flex;
  justify-items: center;
  align-items: flex-start;
  color: #020127;
  padding: 0rem 2rem;
  margin-bottom: 2rem;

  div.comment {
    width: 100%;
  }

  h2 {
    font-size: 26px;
    margin-right: 10px;
  }

  /* p {
    margin: 0;
  } */

  .image {
    margin: 0px 20px 0px 0px;
  }

  p.time {
    font-size: 19px;
  }

  span {
    background-color: #020127;
    border-radius: 50%;
    height: 5px;
    width: 5px;
    margin-right: 10px;
  }

  .name_time {
    display: flex;
    align-items: center;
    /* margin-bottom: -40px; */
    width: 100%;

    h2 {
      cursor: pointer;
    }
  }
`;

export const Likes = styled.div``;

export const Comments = styled.div`
  background-color: #fff;
  /* margin-top: 5rem; */

  .user_image {
    cursor: pointer;
  }

  div.comment {
    margin-bottom: 18rem;
  }
  /* margin-bottom: 5rem; */

  p {
    font-weight: 400;
    font-size: 20px;
    width: 80%;
    /* padding: 0rem 2rem 0rem 0rem; */
  }

  .input_comment {
    display: flex;
    align-items: center;
    background-color: #fcfdfd;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 47%;
    margin: auto;
    position: fixed;
    bottom: 0;
    right: 0;

    input {
      border-radius: 5px 0px 0px 5px;
      width: 70%;
      border: none;
      background-color: #fff;
      height: 50px;
      font-size: 19px;
      color: #b2bbc6;
      padding: 0rem 1rem;
    }

    button {
      border: none;
      background: #07036e;
      border-radius: 0px 5px 5px 0px;
      color: #fff;
      height: 50px;
      font-size: 19px;
      padding: 0px 20px;
      cursor: pointer;
    }

    .input_icons {
      margin-right: 15px;
    }
  }
`;
