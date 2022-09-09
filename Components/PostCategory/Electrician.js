import {
  Container,
  Wrapper,
  PostCard,
  PostText,
  PostDetails,
  UserDetails,
  PostComments,
  PostItem,
} from "@/components/Discussion/Style";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import { PostCategory } from "./Style";
import userImage from "public/userImage.png";

const Electrician = ({ posts, comments, allUsers }) => {
  console.log(posts);

  const router = useRouter();

  const displayPost = (e) => {
    router.push(`/electricians/${e.slug}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <Container>
      <Wrapper>
        <PostCard>
          <PostText>
            <p onClick={() => displayPost(posts)}>
              {posts.post.slice(0, 150).concat(" ...")}{" "}
              <span style={{ fontWeight: "bold" }}>Read more</span>
            </p>
          </PostText>
          <div className="images">
            {posts.images &&
              posts.images.map((i) => (
                <div className="imgs" key={i.id}>
                  <Image
                    src={i.url}
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt={i.name}
                    className="img"
                  />
                </div>
              ))}
          </div>
          <PostCategory className="post_category">
            <Link href="/electricians">
              <a>
                <button>#Electricians</button>
              </a>
            </Link>
          </PostCategory>
          <PostDetails>
            <UserDetails>
              {allUsers.map((all) =>
                posts.user === all.id ? (
                  <div className="user_details">
                    {all.user_image ? (
                      <Image
                        src={all.user_image.formats.small.url}
                        alt="User Image"
                        width={50}
                        height={50}
                        cursor="pointer"
                        objectFit="cover"
                        className="user_image"
                        onClick={() => displayProfile(all.slug)}
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
                        onClick={() => displayProfile(all.slug)}
                      />
                    )}

                    <div>
                      <h3 onClick={() => displayProfile(all.slug)}>
                        {all.username}
                      </h3>
                      <p className="time">
                        <Moment fromNow ago>
                          {posts.created_at}
                        </Moment>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </UserDetails>
            <PostComments>
              {/* {comments.map((e) =>
                posts.id === e.post.id ? (
                  <div key={e.id}>
                    <Image
                      src={e.users.user_image.formats.small.url}
                      alt="User Image"
                      width={50}
                      height={50}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                    />
                  </div>
                ) : (
                  <div></div>
                )
              )} */}
            </PostComments>
          </PostDetails>
        </PostCard>
      </Wrapper>
    </Container>
  );
};

export default Electrician;
