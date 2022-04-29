import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10rem;
  display: grid;
  grid-template-columns: 60% 40%;
  justify-content: center;
  /* height: 100rem; */
`;

export const Wrapper = styled.div`
  /* height: 10rem; */
  /* overflow-y: scroll; */
`;

export const PostCard = styled.div`
  border: 0.5px solid #020127;
  background: #f9fafb;
  border-radius: 10px;
  width: 70%;
  margin: 2rem 0rem;
  color: #020127;
  font-weight: 400;
  font-size: 16px;
  /* padding: 1rem 3rem; */

  .user_image {
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const PostDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-top: 0.5px solid #c4c4c4;
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const PostText = styled.div`
  cursor: pointer;
  padding: 1rem 2rem 1rem 2rem;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0rem 1rem 2rem;

  div.user_details {
    display: flex;
    align-items: center;
  }

  h3 {
    margin-left: 1rem;
    cursor: pointer;
  }

  p.time {
    margin-left: 1rem;
  }
`;

export const PostComments = styled.div`
  display: flex;
  justify-self: end;
  padding: 0rem 2rem 0rem 0rem;
`;

export const PostItem = styled.div`
  height: 100%;
`;

export const PostContainer = styled.div`
  position: absolute;
  top: 10rem;
`;

export const PostWrapper = styled.div``;
