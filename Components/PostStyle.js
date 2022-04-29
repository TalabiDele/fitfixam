import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10rem;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0rem auto;
  position: fixed;
  left: 60rem;
  /* background: #fcfdfd; */
  background: #fff;
  overflow-y: scroll;
  height: 60rem;
  padding-bottom: 20rem;
  padding-right: 35rem;
  top: 0rem;
  z-index: -1;
  /* padding-top: 6rem; */

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
`;

export const PostItem = styled.div`
  width: 100%;
  margin: auto;

  p.post {
    margin-top: 0rem;
    font-size: 26px;
    color: #020127;
    font-weight: 400;
    width: 100%;
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
  margin: 0rem 6rem;
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
  }
`;

export const FeedPosts = styled.div``;

export const UserPosted = styled.div`
  display: flex;
  align-items: center;
  background: #fcfdfd;
  padding: 8rem 0rem 2rem 2rem;

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
    border-bottom: 1.5px solid #dad9e9;
    padding-bottom: 1rem;
    margin-bottom: 0rem;
  }
`;

export const Interract = styled.div`
  align-items: center;
  /* height: 3rem; */
  background: #fcfdfd;
  padding: 0rem 2rem;
  z-index: 200;
  border-bottom: 1.5px solid #dad9e9;
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  div.interract {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    z-index: 300;
    padding: 1rem 0rem;
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
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  /* border-bottom: 1.5px solid #dad9e9; */
  /* justify-content: space-between; */
  width: 100%;

  p.user_likes {
    font-size: 15px;
    font-weight: 400;
    text-decoration: underline;
    margin-left: 10px;
  }
`;

export const Reactions = styled.div`
  width: 100%;

  div.reactions {
    display: flex;
    border-bottom: 1.5px solid #dad9e9;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
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
`;

export const Comments = styled.div`
  background-color: #fff;

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

export const None = styled.div`
  display: none;
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
`;
