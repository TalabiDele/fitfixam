import { useState, useContext, useEffect } from "react";
import {
  Container,
  Wrapper,
  Aside,
  ProviderBtns,
  Spinner,
  RegisterAlert,
} from "./Style";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/logo-blue.png";
import { useRouter } from "next/router";
import { GoogleBtn, FacebookBtn, RegisterBtn } from "../Buttons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BiShow, BiHide } from "react-icons/bi";
import Link from "next/link";
import spinner from "@/public/spinner.gif";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [artisan, setArtisan] = useState("");
  const [slug, setSlug] = useState(
    (Math.random() + 1).toString(36).substring(7)
  );
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [user_category, setUser_category] = useState({
    id: "",
  });
  const [isCarpenter, setIsCarpenter] = useState(false);
  const [isPlumber, setIsPlumber] = useState(false);
  const [isElectrician, setIsElectrician] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const router = useRouter();

  const {
    register,
    error,
    setError,
    emailError,
    setEmailError,
    isLoading,
    emailEmpty,
    setEmailEmpty,
    nameError,
    setNameError,
    passwordError,
    setPasswordError,
    confirmError,
    setConfirmError,
    sent,
  } = useContext(AuthContext);

  useEffect(() => {
    getIsArtisan();
    getIsUser();
  }, []);

  const validateEmail = (e) => {
    // const pattern =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const result = pattern.test(e);
    // console.log(result);
    // if (result) {
    //   console.log("Valid");
    //   setIsValid(false);
    // } else {
    //   console.log("Not valid");
    //   setIsValid(true);
    // }
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();

    // validateEmail(email);

    // if (isValid) {
    //   console.log("Email is not valid");
    // } else {
    //   console.log("Email is valid");
    // }

    if (password !== passwordConfirm) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
    if (username === "") {
      setNameError(true);

      setTimeout(() => {
        setNameError(false);
      }, 5000);
    }
    if (email === "") {
      setEmailEmpty(true);

      setTimeout(() => {
        setEmailEmpty(false);
      }, 5000);
    }
    if (password === "") {
      setPasswordError(true);

      setTimeout(() => {
        setPasswordError(false);
      }, 5000);
    }
    if (passwordConfirm === "") {
      setConfirmError(true);

      setTimeout(() => {
        setConfirmError(false);
      }, 5000);
    }

    // setSlug(username);
    register({ username, email, password, artisan, slug, user_category });

    // if (user_category.id === null) {
    //   console.log(user_category);
    // }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirm(!showConfirm);
  };

  const getIsArtisan = () => {
    setArtisan(true);
  };

  const getIsUser = () => {
    setArtisan(false);

    setUser_category(null);
  };

  const getCarpenter = (e) => {
    setIsCarpenter(true);
    setIsPlumber(false);
    setIsElectrician(false);

    setUser_category({
      id: e.target.name,
    });

    console.log(user_category);
  };

  const getPlumber = (e) => {
    // const { category, name } = e.target;

    setIsCarpenter(false);
    setIsPlumber(true);
    setIsElectrician(false);

    setUser_category({
      id: e.target.name,
    });

    console.log(user_category);
  };

  const getElectrician = (e) => {
    setIsCarpenter(false);
    setIsPlumber(false);
    setIsElectrician(true);

    setUser_category({
      id: e.target.name,
    });

    console.log(user_category);
  };

  return (
    <>
      {/* {isLoading && (
        <Spinner>
          <Image src={spinner} alt="spinner" width={500} height={500} />
        </Spinner>
      )} */}
      <Container>
        <Aside>
          <Image src={Logo} alt="Fitifixam logo" width={100} height={100} />
          <h1>Welcome</h1>
          <p>Are you ready to get started?</p>
        </Aside>
        <Wrapper error={error}>
          {/* <RegisterAlert sent={sent}>
            <p>
              Check your mail! A confirmation link has been sent to you.{" "}
              <IoMdCheckmarkCircleOutline color="#8bc34a" fontSize={30} />
            </p>
          </RegisterAlert> */}
          <h1>Create an Account</h1>
          {/* <p>You can either sign up with</p> */}
          <ProviderBtns>
            {/* <GoogleBtn>
            <FcGoogle /> Google
          </GoogleBtn>
          <FacebookBtn>
            <FaFacebookSquare /> Facebook
          </FacebookBtn> */}
          </ProviderBtns>
          {/* <h2>Or</h2> */}
          <form onSubmit={handleSubmitSignup}>
            {nameError && <span>Enter username</span>}
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className={nameError ? "error" : ""}
            />
            {emailError && <span>Email already exists</span>}
            {emailEmpty && <span>Enter a valid email</span>}
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className={emailError || emailEmpty ? "error" : ""}
            />
            <div className="password">
              {passwordError && <span>Enter password</span>}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className={error || passwordError ? "error" : ""}
              />
              <div className="show-password">
                {showPassword ? (
                  <BiHide onClick={() => handleShowPassword()} />
                ) : (
                  <BiShow onClick={() => handleShowPassword()} />
                )}
              </div>
            </div>
            <div className="password">
              {error && <span>Passwords do not match</span>}
              {confirmError && <span>Confirm password</span>}
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className={error || confirmError ? "error" : ""}
              />
              <div className="show-password">
                {showConfirm ? (
                  <BiHide onClick={() => handleShowConfirmPassword()} />
                ) : (
                  <BiShow onClick={() => handleShowConfirmPassword()} />
                )}
              </div>
            </div>
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
            {artisan && (
              <div className="category">
                <p>Choose category</p>
                <div className="artisan_category">
                  <input
                    type="button"
                    value="carpenter"
                    name="1"
                    onClick={getCarpenter}
                    className={!isCarpenter ? "" : "active"}
                  />
                  <input
                    type="button"
                    value="plumber"
                    name="2"
                    onClick={getPlumber}
                    className={!isPlumber ? "" : "active"}
                  />
                  <input
                    type="button"
                    value="electrician"
                    name="3"
                    onClick={getElectrician}
                    className={!isElectrician ? "" : "active"}
                  />
                </div>
              </div>
            )}

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
          </p>
          <p className="paragraph">
            Already have an account?{" "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default CreateAccount;
