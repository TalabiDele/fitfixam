import styled from "styled-components";

export const BtnNav = styled.button`
  border: 2px solid #f4442e;
  background-color: none;
  color: #f4442e;
  font-weight: bold;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f4442e;
    color: white;
    border: none;
    transition: all 0.3s ease-in-out;
  }
`;

export const HeroBtn = styled.button`
  border: 2px solid #060363;
  background-color: none;
  color: #060363;
  font-weight: bold;
  padding: 20px 50px;
  border-radius: 10px;
  cursor: pointer;
  /* width: 15%; */
  font-size: 26px;
  margin: auto;
  background-color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #060363;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    border: 2px solid #060363;
    background-color: none;
    color: #060363;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    /* width: 15%; */
    font-size: 19px;
    margin: auto;
    background-color: #fff;
  }
`;

export const InputBtn = styled.button`
  border: none;
  border-radius: 0px 15px 15px 0px;
  font-size: 24px;
  padding: 1.5rem;
  background-color: #07036e;
  width: 10%;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: none;
    border: 2px solid #07036e;
    color: #07036e;
  }

  @media (min-width: 375px) and (max-width: 812px) {
    border: none;
    border-radius: 0px 15px 15px 0px;
    font-size: 24px;
    padding: 1.5rem;
    background-color: #07036e;
    width: 30%;
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: none;
      border: 2px solid #07036e;
      color: #07036e;
    }
  }
`;

export const GoogleBtn = styled.button`
  background: none;
  border: 0.5px solid black;
  border-radius: 10px;
  font-size: 26px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  height: 4rem;
  margin: 0.5rem;
`;

export const FacebookBtn = styled.button`
  border: none;
  background: #3b5998;
  border-radius: 10px;
  font-size: 26px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  grid-gap: 1rem;
  color: white;
  height: 4rem;
  margin: 0.5rem;
`;

export const RegisterBtn = styled.button`
  border: 3px solid #07036e;
  background: none;
  height: 4rem;
  border-radius: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #07036e;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
  }
`;

export const LoginBtn = styled.button`
  border: none;
  background: #07036e;
  height: 4rem;
  border-radius: 10px;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #07036e;
    border: 2px solid #07036e;
    background: none;
  }
`;

export const BtnCard = styled.div`
  button {
    background-color: #fff;
    font-size: 26px;
    font-weight: 700;
    color: #3c91e6;
    border: none;
    border-radius: 5px;
    width: 90%;
    padding: 0.5rem 1rem;
    margin: 1rem;
    display: grid;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: none;
      color: #fff;
    }
  }

  .btn {
    &:hover {
      background: none;
      color: #fff;
    }
  }
`;
