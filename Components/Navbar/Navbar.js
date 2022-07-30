import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Logo from "@/public/Blue.png";
import {
  Wrapper,
  Container,
  UserNav,
  UserSideNav,
  IconNav,
  NavMenu,
  Search,
  Modal,
  CreatePost,
  PostContainer,
  Tags,
  Actions,
  Sign,
} from "./Style";
import { BtnNav } from "../Buttons";
import Link from "next/link";
import {
  FaToolbox,
  FaHammer,
  FaScrewdriver,
  FaWrench,
  FaRegCompass,
  FaUsersCog,
  FaFeatherAlt,
  FaRegLifeRing,
  FaBell,
  FaSearch,
  FaChevronDown,
  FaPlus,
  FaEnvelope,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import userImg from "@/public/userImage.png";
import logo from "@/public/logo-menu.png";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { useRouter } from "next/router";
import LogoWhite from "@/public/Logo-white.png";
import LogoBlue from "@/public/Blue.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  if (
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/forgot-password" ||
    router.pathname === "/reset-password"
  ) {
    return (
      <Sign>
        <div className="sign_nav">
          <Link href="/">
            <a>
              <div className="white">
                <Image
                  src={LogoWhite}
                  alt="logo"
                  width={200}
                  height={50}
                  objectFit="contain"
                  className="white"
                />
              </div>
              <div className="blue">
                <Image
                  src={LogoBlue}
                  alt="logo"
                  width={200}
                  height={50}
                  objectFit="contain"
                  className="blue"
                />
              </div>
            </a>
          </Link>
        </div>
      </Sign>
    );
  } else {
    return (
      <Wrapper isOpen={isOpen}>
        <ul>
          <li>
            <Link href="/">
              <a className="image">
                <Image
                  src={Logo}
                  alt="Fitfixam Logo"
                  width={200}
                  height={60}
                  className="img"
                  objectFit="contain"
                />
              </a>
            </Link>
          </li>
          <Container isOpen={isOpen}>
            <div className="contain">
              <Link href="/feeds">
                <a>
                  <li>Discussions</li>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  <li>Blog</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li>Contact us</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li>About us</li>
                </a>
              </Link>
            </div>
            <div className="button_nav">
              <Link href="/signup">
                <a>
                  <li>
                    <BtnNav>Sign up today!</BtnNav>
                  </li>
                </a>
              </Link>
            </div>
          </Container>
          {isOpen ? (
            <ImCancelCircle
              fontSize={40}
              className="burger_mobile"
              onClick={() => openMenu()}
            />
          ) : (
            <GiHamburgerMenu
              fontSize={40}
              className="burger_mobile"
              onClick={() => openMenu()}
            />
          )}
        </ul>
      </Wrapper>
    );
  }
};

export default Navbar;
