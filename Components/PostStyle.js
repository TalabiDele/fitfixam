import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10rem;
  display: grid;
  grid-template-columns: 30% 70%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PostImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 40%;
  /* margin-left: 2rem; */
  /* padding: 3rem 0rem; */
  /* background-color: #fcfdfd; */
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0rem auto;
  position: fixed;
  left: 50rem;
  right: 0rem;
  background: #fff;
  /* overflow-y: scroll; */
  border-radius: 10px 10px 0px 0px;
  height: 60rem;
  padding-bottom: 10rem;
  padding-right: 35rem;

  div.reactions {
    padding: 0rem 2rem;
    background: #fcfdfd;
  }

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

  .user_image {
    border-radius: 50%;
  }

  @media (min-width: 1281px) {
    left: 45rem;
  }

  @media (max-width: 1200px) {
    left: 5rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    left: 4rem;
    padding-right: 0rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    left: 5rem;
    padding-right: 0rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    left: 4rem;
    padding-right: 0rem;
  }

  @media (max-width: 480px) {
    left: 3rem;
    padding-right: 0rem;
  }

  /* @media (max-width: 1200px) {
    margin: auto;
    left: 0rem;
    right: 0rem;
    width: 100%;
    padding: 0rem 4rem 10rem 8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0rem 2rem 10rem 5rem;
  }

  @media (max-width: 600px) {
    padding: 0rem 0rem 10rem 3rem;
  } */
`;

export const PostItem = styled.div`
  width: 100%;
  margin: auto;

  p.post {
    margin-top: 0rem;
    font-size: 26px;
    color: #020127;
    font-weight: 400;
    width: 80%;
  }

  @media (min-width: 1281px) {
    p.post {
      width: 80%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    p.post {
      width: 90%;
      font-size: 19px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    p.post {
      width: 90%;
      font-size: 19px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    p.post {
      width: 90%;
      font-size: 19px;
    }
  }

  @media (max-width: 480px) {
    p.post {
      width: 90%;
      font-size: 19px;
    }
  }
`;

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  a {
    color: #07036e;
    transition: all 0.3 ease-in-out;

    &:hover {
      color: #f4442e;
      transition: all 0.3 ease-in-out;
    }
  }

  p {
    margin: 1rem 2rem;
  }
`;

export const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0rem 1rem;
  background-color: #fcfdfd;

  a {
    color: #07036e;
    transition: all 0.3 ease-in-out;

    &:hover {
      color: #f4442e;
      transition: all 0.3 ease-in-out;
    }
  }

  p {
    margin: 1rem 2rem;
    font-size: 26px;
  }

  @media (max-width: 600px) {
    /* font-size: 16px; */

    p.signin {
      margin: 1rem 0rem;
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    p.signin {
      margin: 1rem 0rem;
      font-size: 14px;
    }
  }
`;

export const FeedPosts = styled.div`
  display: block;

  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const UserPosted = styled.div`
  display: flex;
  align-items: center;
  background: #fcfdfd;
  padding: 2rem 0rem 2rem 2rem;

  .user_image {
    cursor: pointer;
  }

  h2 {
    /* margin-bottom: -15px; */
  }
`;

export const UserInfo = styled.div`
  margin-left: 1rem;

  h2 {
    font-size: 26px;
    color: #020127;
    cursor: pointer;
  }
`;

export const UserPost = styled.div`
  background: #fcfdfd;
  padding: 0rem 2rem;

  p {
    /* border-bottom: 1.5px solid #dad9e9; */
    padding-bottom: 1rem;
    margin-bottom: 0rem;
    width: 90%;
  }
`;

export const Interract = styled.div`
  align-items: center;
  /* height: 3rem; */
  background: #fcfdfd;
  padding: 0rem 2rem;
  z-index: 200;
  /* border-bottom: 1.5px solid #dad9e9;
  padding: 1rem 2rem;
  margin-bottom: 2rem; */

  div.interract {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    z-index: 300;
    padding: 1rem 0rem;
    width: 80%;
  }

  div.likes {
    /* border-bottom: 1.5px solid #dad9e9; */
    display: flex;
    align-items: center;
  }

  .liked_images {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .comment_share {
    display: flex;
    /* border-bottom: 1.5px solid #dad9e9; */

    .comment_count,
    .share_count {
      display: flex;
      align-items: center;
      padding-right: 10px;

      p {
        margin-right: 10px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.interract {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.interract {
      width: 90%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.interract {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    div.interract {
      width: 90%;
    }
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1.5px solid #dad9e9; */
  /* justify-content: space-between; */
  width: 100%;

  div.liking {
    height: 1.2rem;
    overflow: hidden;
  }

  p.user_likes {
    font-size: 15px;
    font-weight: 400;
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const Reactions = styled.div`
  width: 100%;
  background-color: #fcfdfd;
  padding-left: 2rem;
  padding-right: 2rem;

  div.reactions {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    padding: 1rem 0rem;
    margin-bottom: 2rem;
    width: 80%;
  }

  div {
    margin-right: 2rem;
  }

  .like,
  .comment_here,
  .share_here {
    display: flex;
    align-items: center;
    font-size: 19px;

    p {
      margin-left: 10px;
    }
  }

  @media (max-width: 900px) {
    .like,
    .comment_here,
    .share_here {
      font-size: 14px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    div.reactions {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    div.reactions {
      width: 90%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    div.reactions {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    div.reactions {
      width: 90%;
    }
  }
`;

export const Comments = styled.div`
  background-color: #fff;
  overflow-y: scroll;
  height: 30rem;
  padding-bottom: 5rem;
  width: 80%;

  p {
    font-weight: 400;
    font-size: 20px;
    width: 100%;
    /* padding: 0rem 2rem 0rem 0rem; */
  }

  .input_comment {
    display: flex;
    align-items: center;
    background-color: #fcfdfd;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    border-radius: 10px 0px 0px 0px;
    width: 63%;
    margin: auto;
    position: fixed;
    bottom: 0;
    right: 0;

    input {
      border-radius: 5px 0px 0px 5px;
      width: 90%;
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

  @media (min-width: 1281px) {
    width: 80%;

    /* .input_comment {
      width: 55%;
    } */
  }

  @media (max-width: 1900px) {
    width: 80%;

    .input_comment {
      width: 56%;
    }
  }

  @media (max-width: 1500px) {
    width: 80%;
    margin-right: 5rem;

    .input_comment {
      width: 48%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 90%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-left: 10rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-left: 10rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-left: 6rem;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    margin-right: 5rem;

    .input_comment {
      width: 100%;
      padding-left: 6rem;
    }
  }
`;

export const None = styled.div`
  display: none;
`;

export const UsersComments = styled.div`
  display: grid;
  grid-template-columns: 10% 80%;
  /* justify-items: center; */
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

  p.content {
    width: 100%;
  }

  .image {
    margin: 0px 20px 0px 0px;
    cursor: pointer;
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
    width: 100%;

    h2 {
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 15% 80%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 19px;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 365px) {
    padding: 0rem;
    grid-template-columns: 20% 80%;
  }
`;
