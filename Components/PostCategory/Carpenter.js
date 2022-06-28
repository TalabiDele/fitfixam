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
import { PostCategory } from "./Style";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import userImage from "public/userImage.png";

const Carpenter = ({ posts, comments, allUsers }) => {
  console.log(posts);

  const router = useRouter();

  const displayPost = (e) => {
    router.push(`/carpenters/${e.slug}`);
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
              {posts.post.slice(0, 150).concat("...Read more")}
            </p>
          </PostText>
          <PostCategory className="post_category">
            <Link href="/carpenters">
              <a>
                <button>#Carpenters</button>
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

export default Carpenter;
