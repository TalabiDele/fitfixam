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

const Navbar = () => {
  const router = useRouter();

  if (router.pathname === "/login" || router.pathname === "/signup") {
    return (
      <Wrapper>
        <div className="sign_nav">
          <Link href="/">
            <a>Back</a>
          </Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ul>
          <li>
            <Link href="/">
              <a>
                <Image src={Logo} alt="Fitfixam Logo" width={150} height={60} />
              </a>
            </Link>
          </li>
          <Container>
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
          </Container>
          <Link href="/signup">
            <a>
              <li>
                <BtnNav>Get Started</BtnNav>
              </li>
            </a>
          </Link>
        </ul>
      </Wrapper>
    );
  }
};

export default Navbar;
