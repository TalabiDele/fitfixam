import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  font-size: 26px;

  div.container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #b2bbc6;
    padding-bottom: 2rem;

    .image {
      border-radius: 50%;
    }

    h3 {
      color: #6069f0;
      cursor: pointer;
    }
  }
`;

export const Wrapper = styled.div``;
