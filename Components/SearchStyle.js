import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 4rem auto;

  div.results {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem auto;

    div.btns {
      display: flex;
      align-items: center;
      font-size: 19px;

      p {
        margin-right: 1rem;
      }

      button {
        background: #ffffff;
        border: 1px solid #b2bbc6;
        border-radius: 5px;
        font-size: 19px;
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
    }
  }
`;
