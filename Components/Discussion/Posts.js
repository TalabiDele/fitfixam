import {
  Container,
  Wrapper,
  PostCard,
  PostText,
  PostDetails,
  UserDetails,
  PostComments,
  PostItem,
} from "./Style";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/router";
import SinglePost from "./SinglePost";
import Link from "next/link";
import Moment from "react-moment";
import { PostCategory } from "Components/PostCategory/Style";
import userImage from "/public/userImage.png";

const Posts = ({ posts, comments, userPost }) => {
  const [postDisplay, setPostDisplay] = useState({});
  const { user, isLoading } = useContext(AuthContext);
  const router = useRouter();
  const initialState = [];

  useEffect(() => {
    setPostDisplay(posts);
  }, [postDisplay]);

  const displayPost = (e) => {
    setPostDisplay(e);
    // console.log(postDisplay.user.id);

    // if(e.user.id === )
    router.push(`/feeds/${e.slug}`);
  };

  if (posts.category === null || posts.category === undefined) {
    console.log("null");
  } else {
    console.log(posts.category.title);
  }

  const categoryPage = (e) => {
    router.push(`/${e}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Wrapper>
            <PostCard>
              {/* <Link href={`/${posts.slug}`}> */}
              {/* <a> */}
              <PostText>
                <p onClick={() => displayPost(posts)}>{posts.post}</p>
              </PostText>
              <PostCategory className="post_category">
                {posts.category === null || posts.category === undefined ? (
                  <div></div>
                ) : (
                  <a>
                    <button onClick={() => categoryPage(posts.category.title)}>
                      #{posts.category.title}
                    </button>
                  </a>
                )}
              </PostCategory>
              {/* </a> */}
              {/* </Link> */}
              <PostDetails>
                <UserDetails>
                  <div onClick={() => displayProfile(posts.user.slug)}>
                    {posts.user.user_image ? (
                      <Image
                        src={posts.user.user_image.formats.small.url}
                        alt="User Image"
                        width={50}
                        height={50}
                        cursor="pointer"
                        objectFit="cover"
                        className="user_image"
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
                      />
                    )}
                  </div>
                  <div>
                    <h3 onClick={() => displayProfile(posts.user.slug)}>
                      {posts.user.username}
                    </h3>
                    <p className="time">
                      <Moment fromNow ago>
                        {posts.created_at}
                      </Moment>
                    </p>
                  </div>
                </UserDetails>
                <PostComments>
                  {/* {comments.map((comment) =>
                    posts.id === comment.post.id ? (
                      <div key={comment.id}>
                        <Image
                          src={comment.users.user_image.formats.small.url}
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
      )}
    </>
  );
};

export default Posts;
