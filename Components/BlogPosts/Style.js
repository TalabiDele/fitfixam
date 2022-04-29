import styled from "styled-components";

export const Container = styled.div`
  margin-left: 10rem;
`;

export const Wrapper = styled.div``;

export const Card = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #020127;
  border-radius: 10px;
  width: 70%;
  padding: 1rem 2rem;
  margin-top: 5rem;
  background: #f9fafb;
  cursor: pointer;

  h2 {
    font-size: 19px;
    color: #020127;
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
  }
`;
