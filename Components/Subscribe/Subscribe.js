import { InputBtn } from "Components/Buttons";
import { Container, Wrapper } from "./Style";
import BGImage from "./BG";
import Bg from "@/public/subscribe-bg.png";

const Subscribe = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Get exclusive news first-hand</h1>
        <p>Sign up to our newsletter to receive regular updates</p>
        <input type="email" placeholder="Enter your email" />
        <InputBtn>Enter</InputBtn>
      </Wrapper>
    </Container>
  );
};

export default Subscribe;
