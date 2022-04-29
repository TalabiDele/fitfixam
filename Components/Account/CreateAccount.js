import { useState, useContext, useEffect } from "react";
import { Container, Wrapper, Aside, ProviderBtns } from "./Style";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/logo-blue.png";
import { GoogleBtn, FacebookBtn, RegisterBtn } from "../Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artisan, setArtisan] = useState("");
  const [slug, setSlug] = useState(
    (Math.random() + 1).toString(36).substring(7)
  );
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    getIsArtisan();
    getIsUser();
  }, []);

  const handleSubmitSignup = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }
    setSlug(username);

    register({ username, email, password, artisan, slug });

    console.log(register);
  };

  const getIsArtisan = () => {
    setArtisan(true);
    console.log(artisan);
  };

  const getIsUser = () => {
    setArtisan(false);
    console.log(artisan);
  };

  return (
    <Container>
      <Aside>
        <Image src={Logo} alt="Fitifixam logo" width={100} height={100} />
        <h1>Welcome</h1>
        <p>Are you ready to get started?</p>
      </Aside>
      <Wrapper>
        <h1>Create an Account</h1>
        <p>You can either sign up with</p>
        <ProviderBtns>
          <GoogleBtn>
            <FcGoogle /> Google
          </GoogleBtn>
          <FacebookBtn>
            <FaFacebookSquare /> Facebook
          </FacebookBtn>
        </ProviderBtns>
        <h2>Or</h2>
        <form onSubmit={handleSubmitSignup}>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <p className="is_artisan">Are you an Artisan?</p>
          <div className="artisan_btn">
            <input
              type="button"
              value="Yes"
              name="true"
              onClick={getIsArtisan}
              className={artisan ? "active" : ""}
            />
            <input
              type="button"
              value="No"
              name="false"
              onClick={getIsUser}
              className={artisan ? "" : "active"}
            />
          </div>
          <RegisterBtn>Sign up</RegisterBtn>
        </form>
        <p className="paragraph">
          By Clicking “enter”, you hereby attest to have read our{" "}
          <Link href="/privacyPolicy">
            <a>Privacy Policy </a>
          </Link>
          and agree to our{" "}
          <Link href="/privacyPolicy">
            <a>Terms and Conditions</a>
          </Link>
          .
        </p>
        <p className="paragraph">
          Already have an account?{" "}
          <Link href="/login">
            <a>Login</a>
          </Link>
        </p>
      </Wrapper>
    </Container>
  );
};

export default CreateAccount;