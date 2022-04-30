import { Container, Wrapper, Flex, Social, Grid } from "./Style";
import Logo from "@/public/Logo-white.png";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import FooterBg from "@/public/hammer-bg.png";
import BGImage from "./BG";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src={Logo}
          alt="Fitfixam logo"
          width={200}
          height={100}
          objectFit="contain"
        />

        <Flex>
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </Flex>
        <Flex>
          <h2>Navigation</h2>
          <ul>
            <li>Discussions</li>
            <li>Carpenters</li>
            <li>Plumbers</li>
            <li>Electricians</li>
            <li>Company Reviews</li>
          </ul>
        </Flex>
        <Flex>
          <Social>
            <FaLinkedinIn fontSize={30} className="icon" />
            <FaInstagram fontSize={30} className="icon" />
            <FaFacebookF fontSize={30} className="icon" />
            <FaTwitter fontSize={30} className="icon" />
          </Social>
          <p>fitfixam, 2022. All Rights Reserved</p>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Footer;
