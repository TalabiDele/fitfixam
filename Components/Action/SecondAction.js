import { HeroBtn } from "Components/Buttons";
import { Container, Wrapper, Wrap } from "./Style";
import { useState } from "react";
import { FaScrewdriver } from "react-icons/fa";

const SecondAction = () => {
  const [isBlue, setIsBlue] = useState(true);

  return (
    <Wrap>
      <Container isBlue={isBlue} className="action">
        <Wrapper>
          <div className="wrapper">
            <h1>Are you an artisan?</h1>
            <p>Build trust with reviews from your satisfied clients</p>
            <div className="btn">
              <HeroBtn>Proceed</HeroBtn>
            </div>
          </div>
          <div className="wrench">
            <FaScrewdriver
              fontSize={510.88}
              color="#fff"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              // overflow={none}
              className="tool"
            />
          </div>
        </Wrapper>
      </Container>
    </Wrap>
  );
};

export default SecondAction;
