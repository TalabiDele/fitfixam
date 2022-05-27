import BGImage from "Components/BG";
import { Wrapper, Container } from "./Style";
import { HeroBtn } from "Components/Buttons";
import HeroBg from "@/public/hero-background.png";
import Link from "next/link";
import { HiChevronDoubleDown } from "react-icons/hi";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          <span>Feedback</span> is the Building Block of Civilization.
        </h1>
        <p>
          Here, you can find reviews of artisans and companies that offer
          artisan services. Be girded with the information that will help you
          make the right decisions.
        </p>
        <div className="btns">
          <Link href="/signup">
            <a>
              <HeroBtn>Get Started</HeroBtn>
            </a>
          </Link>
          <HiChevronDoubleDown
            fontSize={70}
            color={"#f4442e"}
            className="hero_icon"
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
