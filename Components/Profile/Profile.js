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
import spinner from "@/public/spinner.gif";
import axios from "axios";

const Profile = ({ usersProfile, token, userPosts }) => {
  // const cors = require("cors");
  // app.use(cors());

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
    user_image: usersProfile.user_image,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(null);
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // const [profilePicture, setProfilePicture] =

  const refreshData = () => router.reload();

  // console.log(usersProfile);

  const { user } = useContext(AuthContext);

  let binaryData = [];

  const router = useRouter();

  const imageUploaded = async (e) => {
    // e.preventDefault();
    setUserInfo({ ...userInfo, user_image: e });

    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    console.log(data);
    // setIsPosted(data);
    // setIsOpen(false);
  };

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
    // router.push(`/profile/${data.slug}`);

    // const formData = new FormData();
    // formData.append("files", image);
    // formData.append("ref", "users");
    // formData.append("refId", usersProfile.id);
    // formData.append("field", "user_image");
    // image.forEach(({ file }) =>
    //   bodyFormData.append(`files.images`, file, file.name)
    // );

    // const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: formData,
    // });

    // if (resUpload.ok) {
    //   imageUploaded();
    // }

    setIsOpen(false);

    console.log(data);

    refreshData();
  };

  const handleFileChange = (e) => {
    // const files = e.target;

    setImage(e.target.files[0]);

    // console.log(e.target.files[0]);

    binaryData.push(image);

    // uploadImage(e);
  };

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("File uploading...");

    const formData = new FormData();
    formData.append("files", image);
    // formData.append("ref", "user");
    formData.append("refId", usersProfile.id);
    formData.append("field", "user_image");

    const resUpload = await fetch(`${NEXT_PUBLIC_API_URL}/upload`, {
      method: "POST",
      // headers: {
      //   // "Content-Type": "multipart/form-data",
      //   Authorization: `Bearer ${token}`,
      // },
      body: formData,
    });

    const data = await resUpload.json();

    if (resUpload.ok) {
      imageUploaded(data);
      setMessage("File uploaded successfully! Save Chages.");
      setTimeout(() => {
        setMessage();
      }, 7000);
    } else {
      setMessage("Select a file");
      setTimeout(() => {
        setMessage();
      }, 7000);
    }

    setIsLoading(false);

    setUserProfileImage(data);

    console.log(userProfileImage);

    // const res = await fetch(`${NEXT_PUBLIC_API_URL}/users/${usersProfile.id}`);
    // const data = await res.json();
    // console.log(data);
    // axios({
    //   method: "post",
    //   url: `${NEXT_PUBLIC_API_URL}/upload`,
    //   data: formData,
    // }).then(({ data }) => {
    //   console.log("Succesfully uploaded: ", JSON.stringify(data));
    // });

    // if (resUpload.ok) {
    //   imageUploaded(e);
    // }

    // console.log(resUpload);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleIsImage = () => {
    setIsImage(true);
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
        {/* <form onSubmit={(e) => uploadImage(e)}>
          <input
            type="file"
            className="image-input"
            name="image"
            onChange={handleFileChange}
          />
          <button>Upload</button>
        </form> */}
        {/* <Image src={image} alt="image" width={100} height={100} /> */}
        {/* <h1>{image.name}</h1> */}
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
              {/* {image && (
                <div className="img-preview">
                  <Image
                    src={window.URL.createObjectURL(
                      new Blob(binaryData, { type: "application/zip" })
                    )}
                    alt="Image preview"
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                </div>
              )} */}
              <div className="edit_img" onClick={handleIsImage}>
                <div className="upload-form">
                  <label htmlFor="file-input">
                    <FaPen color="#07036E" fontSize={15} className="pen" />
                  </label>
                  <input
                    type="file"
                    id="file-input"
                    className="image-input"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              {/* {isImage ? (
                <div className="upload-form">
                  <input
                    type="file"
                    className="image-input"
                    onChange={handleFileChange}
                  />
                  <button onClick={uploadImage}></button>
                </div>
              ) : (
                <></>
              )} */}
              <div className="upload-btn">
                <button onClick={uploadImage}>Upload</button>
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
            <div className="message">
              <span>{message}</span>
              {isLoading && (
                <Image src={spinner} alt="spinner" width={20} height={20} />
              )}
            </div>
            <div className="modal">
              <div className="header">
                <h1>Personal Informations</h1>
                <button>Save</button>
              </div>
              <div className="textarea">
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
              </div>
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
                  {usersProfile.user_image ? (
                    <Image
                      src={usersProfile.user_image.url}
                      alt="User image"
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="image"
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="User image"
                      width={70}
                      height={70}
                      objectFit="cover"
                      className="image"
                    />
                  )}
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
