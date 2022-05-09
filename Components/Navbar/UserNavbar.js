import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import qs from "qs";
import Logo from "@/public/Blue.png";
import userImage from "public/userImage.png";
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
  Btn,
  Contain,
  SearchContainer,
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
  FaChevronUp,
  FaPlus,
  FaEnvelope,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTrendingUp, BiUserCircle } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import userImg from "@/public/userImage.png";
import logo from "@/public/logo-menu.png";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const [image, setImage] = useState(null);
  // const [imagePreview, setImagePreview] = useState(
  //   isPosted.image ? isPosted.image.formats.thumbnail.url : null
  // );
  const [userIsOpen, setUserIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [postCategory, setPostCategory] = useState("");
  const [postItem, setPostItem] = useState({
    post: "",
    slug: (Math.random() + 1).toString(36).substring(7),
    user: user,
    category: {
      id: "",
    },
  });
  const [isProfile, setIsProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isCarpenter, setIsCarpenter] = useState(false);
  const [isPlumber, setIsPlumber] = useState(false);
  const [isElect, setIsElect] = useState(false);

  useEffect(() => {
    // setPostCategory(postCategory);
    // console.log(postCategory);
  }, [postCategory]);

  const refreshData = () => router.replace(router.asPath);

  const imageUploaded = async (e) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts/${e.id}`);
    const data = await res.json();
    console.log(data);
    // setIsPosted(data);
    setIsModal(false);
  };

  const openProfileDropdown = () => {
    setIsProfile(!isProfile);

    console.log(isProfile);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };

  const handleIsOpen = () => {
    setUserIsOpen(!userIsOpen);

    console.log(userIsOpen);
  };

  const openModal = () => {
    setIsModal(!isModal);
  };

  const handlePostCategory = (e) => {
    // console.log(postItem.category);
    const { post, name } = e.target;
    setPostCategory(name);
    setPostItem({
      ...postItem,
      category: {
        id: name,
      },
    });
  };

  // fetch("https://ip.jsontest.com", { mode: "cors" })
  //   .then((resp) => resp.json())
  //   .then((ip) => {
  //     console.log(ip);
  //   });

  const handleInputChange = (e) => {
    const { post, value } = e.target;
    setPostItem({
      ...postItem,
      post: value,
      slug: (Math.random() + 1).toString(36).substring(7),
      user: user,
      // category: {
      //   id: postCategory,
      // },
    });
  };

  const handlePost = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postItem),
    });

    const data = await res.json();
    // setIsPosted(data);
    console.log(data);
    setPostItem({
      post: "",
      slug: "",
      user: "",
    });

    // if (!res.ok) {
    //   alert("something went wrong");
    // } else {
    //   const data = await res.json();
    //   setIsPosted(data);
    //   console.log(isPosted);
    // }

    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "posts");
    formData.append("refId", data.id);
    formData.append("field", "images");

    const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: formData,
    });

    if (resUpload.ok) {
      imageUploaded(data);
    }

    setIsModal(false);

    refreshData();
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearchChange = async (e) => {
    setIsSearch(true);
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setIsSearch(false);
    }

    // const query = qs.stringify({
    //   _where: {
    //     _or: [{ post_contains: e }],
    //   },
    // });

    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/posts?post_contains=${searchValue}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(postItem),
      }
    );

    const data = await res.json();
    setSearchData(data);
    console.log(data);
  };

  const submitSearch = async (e) => {
    e.preventDefault();
    setSearchValue("");
    // setSearchValue(e.target.value);
    // if (e.target.value === "") {
    //   setIsSearch(false);
    // }

    // const query = qs.stringify({
    //   _where: {
    //     _or: [{ post_contains: e }],
    //   },
    // });

    // const res = await fetch(
    //   `${NEXT_PUBLIC_API_URL}/posts?post_contains=${searchValue}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const data = await res.json();
    router.push(`/feeds/search?term=${searchValue}`);
    setIsSearch(false);

    // setSearchData(data);
  };

  const handleCarpenter = (e) => {
    setIsCarpenter(true);
    setIsPlumber(false);
    setIsElect(false);

    handlePostCategory(e);
  };
  const handlePlumber = (e) => {
    setIsCarpenter(false);
    setIsPlumber(true);
    setIsElect(false);

    handlePostCategory(e);
  };
  const handleElect = (e) => {
    setIsCarpenter(false);
    setIsPlumber(false);
    setIsElect(true);

    handlePostCategory(e);
  };

  return (
    <>
      <Modal isModal={isModal}>
        <div className="cancel_icon" onClick={() => openModal()}>
          <MdCancel color="#EBEEF2" fontSize={40} />
        </div>
        <CreatePost>
          {user ? (
            <PostContainer isModal={isModal}>
              <h2 className="post_header">
                <FaEnvelope /> Write Something
              </h2>
              <textarea
                type="text"
                placeholder="Start typing here..."
                className="post_input"
                value={postItem.post}
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              <Tags>
                <h2>Add a tag:</h2>
                <input
                  type="button"
                  placeholder="#Carpenters"
                  value="#Carpenters"
                  name="1"
                  className={isCarpenter ? "carpenter active" : "carpenter"}
                  onClick={(e) => handleCarpenter(e)}
                />
                <input
                  type="button"
                  placeholder="#Electricians"
                  value="#Electricians"
                  name="3"
                  className={isElect ? "electrician active" : "electrician"}
                  onClick={(e) => handleElect(e)}
                />
                <input
                  type="button"
                  placeholder="#Plumbers"
                  value="#plumbers"
                  name="2"
                  className={isPlumber ? "plumber active" : "plumber"}
                  onClick={(e) => handlePlumber(e)}
                />
                <input
                  type="button"
                  placeholder="#ArtisanWahala"
                  value="#ArtisanWahala"
                  name="artisanwahala"
                  className="artisan"
                  onClick={(e) => console.log(e.target.name)}
                />
              </Tags>
              <Actions>
                <input
                  type="file"
                  placeholder="Upload an image"
                  onChange={handleFileChange}
                  // multiple="multiple"
                />
                <div className="btn">
                  <button
                    className="btn_cancel"
                    onClick={() => setIsModal(false)}
                  >
                    Cancel
                  </button>
                  <button onClick={handlePost} className="btn_send">
                    Send
                  </button>
                </div>
              </Actions>
            </PostContainer>
          ) : (
            <Contain isModal={isModal}>
              <h1>You are not logged in!</h1>
              <Btn className="btn">
                <Link href="/login">
                  <a>
                    <button>Sign in</button>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <button>Sign up</button>
                  </a>
                </Link>
              </Btn>
              <p>to create a post...</p>
            </Contain>
          )}
        </CreatePost>
      </Modal>
      <UserNav isProfile={isProfile}>
        <NavMenu
          userIsOpen={userIsOpen}
          onMouseEnter={() => setUserIsOpen(true)}
          onMouseLeave={() => setUserIsOpen(false)}
        >
          <div className="side_menu">
            <GiHamburgerMenu
              fontSize={30}
              cursor="pointer"
              onClick={() => handleIsOpen()}
              className="menu"
            />
          </div>
          {userIsOpen && (
            <div className="logo_image">
              <Image src={logo} alt="Fitfixam Logo" width={130} height={50} />
            </div>
          )}
        </NavMenu>
        <Search>
          <form onSubmit={submitSearch}>
            <FaSearch fontSize={26} className="search" color="#E5E5E5" />
            <input
              type="text"
              placeholder="Search"
              userIsOpen={userIsOpen}
              value={searchValue}
              name="search Value"
              onChange={(e) => handleSearchChange(e)}
            />
          </form>
        </Search>
        {user ? (
          <>
            <div className="user_profile">
              <FaBell fontSize={26} cursor="pointer" className="bell" />
              {user.userImage ? (
                <Image
                  src={user.user_image.formats.small.url}
                  alt="User Image"
                  width={50}
                  height={50}
                  cursor="pointer"
                  objectFit="cover"
                  className="user_image"
                  onClick={() => router.push(`/profile/${user.slug}`)}
                />
              ) : (
                <Image
                  src={userImage}
                  alt="User Image"
                  width={50}
                  height={50}
                  cursor="pointer"
                  objectFit="cover"
                  className="user_image"
                  onClick={() => router.push(`/profile/${user.slug}`)}
                />
              )}

              <div className="user_info">
                <h3
                  onClick={() => router.push(`/profile/${user.slug}`)}
                  className="username"
                >
                  {user.username}
                </h3>
                {isProfile ? (
                  <FaChevronUp
                    fontSize={19}
                    cursor="pointer"
                    onClick={() => openProfileDropdown()}
                  />
                ) : (
                  <FaChevronDown
                    fontSize={19}
                    cursor="pointer"
                    onClick={() => openProfileDropdown()}
                  />
                )}
              </div>
            </div>
            <div className="profile_dropdown" isProfile={isProfile}>
              <div>
                <BiUserCircle fontSize={19} />
                <p onClick={() => router.push(`/profile/${user.slug}`)}>
                  Go to Profile
                </p>
              </div>
              <button onClick={() => logout()}>Logout</button>
            </div>
          </>
        ) : (
          <Btn>
            <Link href="/login">
              <a>
                <button>Sign in</button>
              </a>
            </Link>
            <Link href="/signup">
              <a>
                <button>Sign up</button>
              </a>
            </Link>
          </Btn>
        )}
      </UserNav>
      <UserSideNav
        userIsOpen={userIsOpen}
        onMouseEnter={() => setUserIsOpen(true)}
        onMouseLeave={() => setUserIsOpen(false)}
      >
        <div>
          <IconNav onClick={() => openModal()}>
            <FaPlus
              fontSize={26}
              cursor="pointer"
              color="#fff"
              className="add_post"
            />{" "}
          </IconNav>
          <Link href="/feeds">
            <a>
              <IconNav className={router.pathname === "/feeds" ? "active" : ""}>
                <FaToolbox fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>General Discussions</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/trending">
            <a>
              <IconNav
                className={router.pathname == "/trending" ? "active" : ""}
              >
                <BiTrendingUp fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Trending</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/carpenters">
            <a>
              <IconNav
                className={router.pathname == "/carpenters" ? "active" : ""}
              >
                <FaHammer fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Carpenters</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/electricians">
            <a>
              <IconNav
                className={router.pathname == "/plumbers" ? "active" : ""}
              >
                <FaScrewdriver fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Electricians</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/plumbers">
            <a>
              <IconNav
                className={router.pathname == "/electricians" ? "active" : ""}
              >
                <FaWrench fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Plumbers</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/companies">
            <a>
              <IconNav userIsOpen={userIsOpen}>
                <FaRegCompass fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Companies</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/find-an-artisan">
            <a>
              <IconNav>
                <FaUsersCog fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Find an Artisan</p>}
              </IconNav>
            </a>
          </Link>
          <Link href="/blog">
            <a>
              <IconNav>
                <FaFeatherAlt fontSize={26} cursor="pointer" color="#07036e" />
                {userIsOpen && <p>Articles</p>}
              </IconNav>
            </a>
          </Link>
          <div className="settings">
            <Link href="/faq">
              <a>
                <IconNav>
                  <FaRegLifeRing
                    fontSize={26}
                    cursor="pointer"
                    color="#07036e"
                  />
                  {userIsOpen && <p>Help</p>}
                </IconNav>
              </a>
            </Link>
          </div>
        </div>
        {/* <FaPlus
          fontSize={50}
          cursor="pointer"
          color="#fff"
          className="add_post_page"
          onClick={() => openModal()}
        /> */}
      </UserSideNav>
      <SearchContainer isSearch={isSearch}>
        <div className="search_container">
          {searchData.length === 0 ? (
            <p>Not found, try something else...</p>
          ) : (
            searchData.map((e) => (
              <div className="search_item" key={e.id}>
                <h2>{e.user.username}</h2>
                {"-"}
                <p>{e.post.slice(0, 60).concat("...")}</p>
                <h3 onClick={() => router.push(`/feeds/${e.slug}`)}>
                  Read more
                </h3>
              </div>
            ))
          )}
        </div>
      </SearchContainer>
    </>
  );
};

export default Navbar;
