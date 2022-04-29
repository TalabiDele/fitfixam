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
        <Flex>
          <Image src={Logo} alt="Fitfixam logo" width={150} height={50} />
        </Flex>
        <Grid>
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
              <FaLinkedinIn />
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </Social>
            <p>fitfixam, 2022. All Rights Reserved</p>
          </Flex>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Footer;
