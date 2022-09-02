import React, { useState } from "react";
import { Container } from "./style";
import Image from "next/image";
import userImage from "@/public/userImage.png";
import Moment from "react-moment";
import { useRouter } from "next/router";
// import VerticalCarousel from "../Carousel";

const TrendingCards = ({ posts }) => {
  const router = useRouter();

  const handlePost = (e) => {
    router.push(`/feeds/${e.slug}`);
  };

  const handleUser = (e) => {
    router.push(`/profile/${e.slug}`);
  };

  return (
    <Container>
      <div className="container">
        {posts.map((e) => (
          <div className="card_container" key={e.id}>
            <div className="card" key={e.id}>
              <p onClick={() => handlePost(e)}>{e.post}</p>
              <div className="user">
                <div className="details" onClick={() => handleUser(e.user)}>
                  <div className="image">
                    {e.user.userImage ? (
                      <Image
                        src={e.user.userImage}
                        alt="user image"
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                    ) : (
                      <Image
                        src={userImage}
                        alt="user image"
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <h3>{e.user.username}</h3>
                </div>
                <h3>
                  <Moment format="D MMM YYYY" withTitle>
                    {posts.created_at}
                  </Moment>
                </h3>
                {/* <Moment date={posts.created_at} format="YYYY-MM-DD" withTitle /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingCards;
