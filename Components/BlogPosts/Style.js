import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1281px) {
    margin-left: 10rem;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-left: 7rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 7rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 2rem;
  }

  @media (max-width: 480px) {
    margin-left: 4rem;
    /* margin-right: 1rem; */
  }
`;

export const Wrapper = styled.div``;

export const Card = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    align-items: center;
    /* border: 0.5px solid #020127; */
    border-radius: 10px;
    width: 60%;
    padding: 1rem 2rem;
    margin-top: 5rem;
    background: #f9fafb;
    cursor: pointer;

    h2 {
      font-size: 24px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 16px;
    }

    div.image {
      margin-right: 2rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 70%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    align-items: center;
    /* border: 0.5px solid #020127; */
    border-radius: 10px;
    width: 90%;
    padding: 1rem 2rem;
    margin-top: 5rem;
    background: #f9fafb;
    cursor: pointer;

    h2 {
      font-size: 20px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 12px;
    }

    div.image {
      margin-right: 2rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 70%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    align-items: center;
    /* border: 0.5px solid #020127; */
    border-radius: 10px;
    width: 90%;
    padding: 1rem 2rem;
    margin-top: 5rem;
    background: #f9fafb;
    cursor: pointer;

    h2 {
      font-size: 20px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 12px;
    }

    div.image {
      margin-right: 2rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 70%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    border-radius: 10px;
    width: 80%;
    padding: 1rem 2rem;
    margin: 5rem auto 2rem auto;
    background: #f9fafb;
    /* border: 0.5px solid #020127; */
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;

    h2 {
      font-size: 16px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 12px;
    }

    div.image {
      margin-bottom: 2rem;
      width: 100%;
      margin-right: 1rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    border-radius: 10px;
    width: 95%;
    padding: 1rem 1rem;
    margin: 5rem auto 3rem auto;
    background: #f9fafb;
    /* border: 0.5px solid #020127; */
    cursor: pointer;
    justify-content: flex-start;

    h2 {
      font-size: 14px;
      color: #020127;
      margin-bottom: 1rem;
    }

    p {
      font-size: 12px;
    }

    div.blog_details {
      width: 100%;
    }

    div.image {
      margin-bottom: 2rem;
      width: 50%;
      margin-right: 1rem;

      .blog_image {
        border-radius: 10px;
      }
    }

    div.info {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: #020127;
      margin-top: 1rem;

      p {
        font-size: 8px;
      }
    }
  }
`;
