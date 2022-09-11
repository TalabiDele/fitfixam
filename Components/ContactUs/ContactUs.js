import { Container, Wrapper } from "./Style";
import {
  FaRegEnvelopeOpen,
  FaPhoneAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { LoginBtn } from "Components/Buttons";
import Subscribe from "Components/Subscribe/Subscribe";
import Link from "next/link";

const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <div className="card_wrapper">
          <div className="card">
            <FaRegEnvelopeOpen color="#060258" fontSize={36} />
            <h3>Via Email</h3>
            <p>support@fitfixam.com</p>
            <p>info@fitfixam.com</p>
          </div>
          <div className="card">
            <FaPhoneAlt color="#060258" fontSize={36} />
            <h3>Via Phone</h3>
            <p>+243 563 5363 353</p>
            <p>+243 563 5363 353</p>
          </div>
        </div>
        <div className="form">
          <form>
            <h2>Tell us Something</h2>
            <p>Questions or comments are welcome</p>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Phone Number" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <LoginBtn>Send</LoginBtn>
          </form>
        </div>
        <div className="social">
          <h2>Connect with us!</h2>
          <div className="soc">
            <a href="https://www.facebook.com/fitfixam/">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com/Ifitfixam?t=fvZSAX1y21YVuK8y6Axh-w&s=09">
              <FaTwitterSquare />
            </a>
            <a href="https://www.linkedin.com/company/fit-fixam/">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/fitfixam?igshid=YmMyMTA2M2Y=">
              <FaInstagramSquare />
            </a>
          </div>
        </div>
        <Subscribe />
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
