import React from "react";
import { Container, Wrapper } from "./Style";
import Image from "next/image";
import arrow from "@/public/arrow-2.png";
import founder from "@/public/founder.png";

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <h2>A little bit about us</h2>
        <p className="first">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac eget mi
          diam enim ut. Velit nec mauris diam sed facilisi arcu in euismod.
          Adipiscing lacus ut lacus at. Libero ac id vitae amet augue.
        </p>
        <div className="img">
          <Image
            src={arrow}
            alt="arrow"
            width={155.81}
            height={124.8}
            className="image"
          />
        </div>
        <p className="para">
          Nibh cras magna non tincidunt. Nibh hendrerit dignissim erat vulputate
          blandit diam, odio pellentesque. Tempor in et integer nunc scelerisque
          neque id congue. Massa et dolor, id ullamcorper nec. Egestas enim,
          vulputate amet nam. Consequat natoque dignissim orci turpis.
        </p>
        <div className="about">
          <div className="vision">
            <h1>Vision</h1>
            <p>
              To be the go-to platform to find competent artisans around Nigeria
              and ultimately, across the world.
            </p>
          </div>
          <div>
            <h1>Mission</h1>
            <ul>
              <li>
                Gather information/reviews on artisans and organizations for
                artisans in a bid to ascertain their competence
              </li>
              <li>Reward competent artisans with publicity and referrals.</li>
              <li>
                Offer developmental content and training to grow capacity in
                artisans
              </li>
            </ul>
          </div>
        </div>
        <div className="founder">
          <div className="founder_image">
            <Image
              src={founder}
              alt="Mr Francis"
              width={521}
              height={615}
              objectFit="cover"
            />
          </div>
          <div className="about_founder">
            <h1>Mr. Francis Nwaochei</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              enim fringilla fames lectus leo facilisi vitae sit. Cursus et at
              non semper id semper. Mauris quis nibh enim malesuada metus sit
              quam. Risus cras in eget faucibus nec mauris, facilisis vitae
              proin. Et porttitor felis, euismod cursus. Dui et eu habitasse
              eget pulvinar lacus. Nec nibh nulla et etiam maecenas. Nam
              habitant leo ipsum maecenas. Elementum sit sed pharetra rutrum
              tristique aliquet dui. In ac. Nec nibh nulla et etiam maecenas.
              Nam habitant leo ipsum maecenas. Elementum sit sed pharetra rutrum
              tristique aliquet dui. In ac.
            </p>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
