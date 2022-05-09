import React from "react";
import { Container, Wrapper } from "./Style";
import AuthContext from "@/context/AuthContext";
import { useState, UseEffect, useContext } from "react";
import Image from "next/image";
import userImage from "public/userImage.png";
import {
  FaUserAlt,
  FaToolbox,
  FaPhone,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPen,
} from "react-icons/fa";
import Moment from "react-moment";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";

const Profile = ({ usersProfile, userPosts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: usersProfile.username,
    personal_information: usersProfile.personal_information,
    specializations: usersProfile.specializations,
    skills: usersProfile.skills,
    interest: usersProfile.interest,
    affiliations: usersProfile.affiliations,
    phone: usersProfile.phone,
    email: usersProfile.email,
    address: usersProfile.address,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");

  console.log(usersProfile);

  const { user } = useContext(AuthContext);

  const router = useRouter();

  const updateUserHandler = async (e) => {
    e.preventDefault();

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await res.json();
    router.push(`/profile/${data.slug}`);
    setIsOpen(false);

    console.log(data);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Container isOpen={isOpen}>
      <div className="form-modal">
        <GiCancel
          color="#F0F3F6"
          fontSize={40}
          className="cancel_icon"
          onClick={openModalHandler}
        />
        <form className="edit" onSubmit={(e) => updateUserHandler(e)}>
          <div className="user">
            <div className="user_info">
              <div className="img">
                {usersProfile.user_image ? (
                  <Image
                    src={usersProfile.user_image.url}
                    alt="user image"
                    width={170}
                    height={170}
                    className="image"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    src={userImage}
                    alt="user image"
                    width={170}
                    height={170}
                    className="image"
                    objectFit="cover"
                  />
                )}
              </div>
              <div className="edit_img">
                <FaPen color="#07036E" fontSize={15} className="pen" />
              </div>
              <h2>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userInfo.username}
                  onChange={(e) => handleInputChange(e)}
                  className="name"
                />
              </h2>
            </div>
            <div className="additionals">
              <p>
                <FaPhone color="#07036E" />
                <input
                  type="number"
                  placeholder={
                    usersProfile.phone
                      ? usersProfile.Phone
                      : "Enter phone number"
                  }
                  name="phone"
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
              <p>
                <FaEnvelope color="#07036E" />
                <input
                  type="email"
                  placeholder={
                    usersProfile.email ? usersProfile.email : "Enter your email"
                  }
                  name="email"
                  id="email"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
              <p>
                <FaMapMarkerAlt color="#07036E" />
                <input
                  type="text"
                  placeholder={
                    usersProfile.address
                      ? usersProfile.address
                      : "Enter your address"
                  }
                  name="address"
                  id="address"
                  value={userInfo.address}
                  onChange={(e) => handleInputChange(e)}
                />
              </p>
            </div>
          </div>
          <div className="edit_form">
            <div className="modal">
              <div className="header">
                <h1>Personal Information</h1>
                <button>Save</button>
              </div>
              <textarea
                placeholder={
                  usersProfile.personal_information
                    ? usersProfile.personal_information
                    : "Write about yourself"
                }
                rows="5"
                name="personal_information"
                id="personal_information"
                value={userInfo.personal_information}
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              {usersProfile.artisan ? (
                <div className="grid">
                  <h2>Specializations:</h2>
                  <input
                    type="text"
                    placeholder={
                      usersProfile.specializations
                        ? usersProfile.specializations
                        : "Enter your specializations"
                    }
                    name="specializations"
                    id="specializations"
                    value={userInfo.specializations}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              ) : (
                <div></div>
              )}
              {usersProfile.artisan ? (
                <div className="grid">
                  <h2>Skills:</h2>
                  <input
                    type="text"
                    placeholder={
                      usersProfile.skills
                        ? usersProfile.skills
                        : "Enter your Skills"
                    }
                    name="skills"
                    id="skills"
                    value={userInfo.skills}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              ) : (
                <div></div>
              )}
              <div className="grid">
                <h2>Interests:</h2>
                <input
                  type="text"
                  placeholder={
                    usersProfile.interests
                      ? usersProfile.interests
                      : "Enter your interests"
                  }
                  name="interest"
                  id="interest"
                  value={userInfo.interest}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
              <div className="grid">
                <h2>Affiliations:</h2>
                <input
                  type="text"
                  placeholder={
                    usersProfile.affiliations
                      ? usersProfile.affiliations
                      : "Enter your affiliations"
                  }
                  name="affiliations"
                  id="affiliations"
                  value={userInfo.affiliations}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <form className="reset">
              <h1>Security</h1>
              <div className="reset_password">
                <label htmlFor="">Change Password</label>
                <div className="reset_input">
                  <input type="password" placeholder="New Password" />
                  <input type="password" placeholder="Re-enter Password" />
                  <button>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </form>
      </div>
      <div className="profile">
        <div className="container">
          <div className="detail">
            <div className="user">
              <div className="img_container">
                {usersProfile.user_image ? (
                  <Image
                    src={usersProfile.user_image.url}
                    alt="User image"
                    width={170}
                    height={170}
                    objectFit="cover"
                    className="image"
                  />
                ) : (
                  <Image
                    src={userImage}
                    alt="User image"
                    width={170}
                    height={170}
                    objectFit="cover"
                    className="image"
                  />
                )}
              </div>
              <div className="name">
                <p>
                  {usersProfile.username}
                  {"      "}
                  {"      "}
                  {usersProfile.artisan ? <FaToolbox /> : <FaUserAlt />}
                </p>
              </div>
            </div>
            <div className="contact">
              <h1>Contact</h1>
              {usersProfile.phone ? (
                <p>
                  <FaPhone color="#07036E" />
                  {usersProfile.phone}
                </p>
              ) : (
                <p>
                  <FaPhone color="#07036E" />
                </p>
              )}
              {usersProfile.email ? (
                <p>
                  <FaEnvelope color="#07036E" />
                  {usersProfile.email}
                </p>
              ) : (
                <p>
                  <FaEnvelope color="#07036E" />
                </p>
              )}
              {usersProfile.address ? (
                <p>
                  <FaMapMarkerAlt color="#07036E" />
                  {usersProfile.address}
                </p>
              ) : (
                <p>
                  <FaMapMarkerAlt color="#07036E" />
                </p>
              )}
            </div>
          </div>
          <div className="info">
            <div className="split">
              <h1>Personal information</h1>
              {user ? (
                user.id === usersProfile.id ? (
                  <button onClick={openModalHandler}>Edit</button>
                ) : (
                  <div></div>
                )
              ) : (
                <div></div>
              )}
            </div>
            {usersProfile.personal_information ? (
              <p className="personal">{usersProfile.personal_information}</p>
            ) : (
              <p className="personal"></p>
            )}
            {usersProfile.artisan ? (
              usersProfile.specializations ? (
                <div className="flex">
                  <h2>Specialization: {"         "}</h2>
                  <p>{usersProfile.specializations}</p>
                </div>
              ) : (
                <div className="flex">
                  <h2>Specialization: {"         "}</h2>
                  <p></p>
                </div>
              )
            ) : (
              <div></div>
            )}
            {usersProfile.artisan ? (
              usersProfile.skills ? (
                <div className="flex">
                  <h2>Skills: {"         "}</h2>
                  <p>{usersProfile.skills}</p>
                </div>
              ) : (
                <div className="flex">
                  <h2>Skills: {"         "}</h2>
                  <p></p>
                </div>
              )
            ) : (
              <div></div>
            )}
            {usersProfile.interest ? (
              <div className="flex">
                <h2>Interests: {"         "}</h2>
                <p>{usersProfile.interest}</p>
              </div>
            ) : (
              <div className="flex">
                <h2>Interests: {"         "}</h2>
                <p></p>
              </div>
            )}
            {usersProfile.affiliations ? (
              <div className="flex">
                <h2>Affiliations: {"         "}</h2>
                <p>{usersProfile.affiliations}</p>
              </div>
            ) : (
              <div className="flex">
                <h2>Affiliations: {"         "}</h2>
                <p></p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Wrapper>
        {usersProfile.artisan ? (
          <div className="wrapper">
            <h1>What others have said</h1>
            {usersProfile.artisan_reviews.map((rev) => (
              <div className="card" key={rev.id}>
                <div className="dets">
                  <Image
                    src={usersProfile.user_image.url}
                    alt="User image"
                    width={70}
                    height={70}
                    objectFit="cover"
                    className="image"
                  />
                  <div className="post">
                    <div className="username">
                      <h2>{usersProfile.username}</h2>
                      <p className="time">
                        <Moment fromNow ago>
                          {rev.created_at}
                        </Moment>
                      </p>
                    </div>
                    <div className="user_post">
                      <p>{rev.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="wrapper">
            <h1>Recent Activities</h1>
            {usersProfile.posts.map((post) => (
              <div className="card" key={post.id}>
                <div className="dets">
                  <Image
                    src={usersProfile.user_image.url}
                    alt="User image"
                    width={70}
                    height={70}
                    objectFit="cover"
                    className="image"
                  />
                  <div className="post">
                    <div className="username">
                      <h2>{usersProfile.username}</h2>
                      <p className="time">
                        <Moment fromNow ago>
                          {post.created_at}
                        </Moment>
                      </p>
                    </div>
                    <div className="user_post">
                      <p>{post.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Wrapper>
    </Container>
  );
};

export default Profile;
