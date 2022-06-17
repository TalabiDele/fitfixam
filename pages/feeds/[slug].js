import { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import UserLayout from "Components/UserLayout";
import Link from "next/link";
import {
  Container,
  Wrapper,
  PostItem,
  FeedPosts,
  UserPosted,
  UserInfo,
  UserPost,
  Likes,
  Comments,
  Interract,
  None,
  Reactions,
  UsersComments,
  Contain,
  Cont,
  PostImages,
} from "@/components/PostStyle";
import Image from "next/image";
import {
  PostCard,
  PostComments,
  PostDetails,
  PostText,
  UserDetails,
} from "@/components/Discussion/Style";
import { useRouter } from "next/router";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaRegComment,
  FaCamera,
  FaSmile,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiOutlineGif } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import Moment from "react-moment";
import { parseCookies } from "@/helpers/index";
import { PostCategory } from "Components/PostCategory/Style";
import userImage from "public/userImage.png";
import { LikesContext } from "@/context/LikesContext";
import cookie from "cookie";

const Slug = ({ post, posts, comments, likes, token, loggedUsers }) => {
  const { user, userData, isToken } = useContext(AuthContext);

  const [postId, setPostId] = useState({});
  const [isComment, setIsComment] = useState({
    content: "",
    post: postId,
    timestamp: "",
    users: user,
  });
  const [isLiked, setIsLiked] = useState(false);
  const [userLiked, setUserLiked] = useState();

  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);

  const findUserLiked = () => {
    if (user) {
      post.map((e) => {
        setUserLiked(
          likes.find(
            (like) => user.id === like.user.id && e.id === like.post.id
          )
        );

        if (userLiked) {
          console.log(userLiked);
        } else {
          console.log("User Like is null");
        }
      });
    }
  };

  useEffect(() => {
    getPostId();
    findUserLiked();
  }, [user]);

  let postLike = 0;

  const displayPost = (e) => {
    router.push(`/feeds/${e.slug}`);
  };

  const getPostId = () => {
    post.map((m) => {
      setPostId(m);
    });
  };

  const handleInputChange = (e, p) => {
    getPostId(p);
    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      post: postId,
      users: user,
    });

    getPostId(p);
  };

  const updateLike = async (e) => {
    console.log(token);
    setIsLiked(true);

    console.log(isLiked);

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          post: postId,
        }),
      });
      const data = await res.json();
      // setLikedPost(data);
      console.log(data);
      setUserLiked(true);
      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const unlike = async (e) => {
    // try {
    setIsLiked(false);
    const res = await fetch(
      `${NEXT_PUBLIC_API_URL}/post-likes/${userLiked.id}`,
      {
        method: "DELETE",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        // body: JSON.stringify(isLiked),
      }
    );
    const data = await res.json();
    // setLikedPost(data);
    console.log(data);
    setUserLiked(false);
    refreshData();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const postComment = async (e, p) => {
    getPostId(p);
    e.preventDefault();

    const { content, value } = e.target;
    setIsComment({
      ...isComment,
      content: value,
      post: postId,
      users: user,
    });

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(isComment),
      });
      const data = await res.json();
      console.log(data);
      setIsComment({
        content: "",
        post: "",
        users: "",
      });
    } catch (error) {
      console.log(error);
    }

    refreshData();
  };

  const categoryPage = (e) => {
    router.push(`/${e}`);
  };

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  const getUserComment = (comm) => {
    const uniqueId = Array.from(new Set(comm.map((a) => a.users.id))).map(
      (id) => {
        return comments.find((a) => a.users.id === id);
      }
    );
  };

  // setUserComments(uniqueId);
  // console.log(uniqueId);

  // console.log(comments);

  // console.log(uniqueId);

  return (
    <UserLayout>
      <Container>
        <FeedPosts>
          {posts.map((e) => (
            <PostCard key={e.id}>
              <PostText>
                <p onClick={() => displayPost(e)}>{e.post}</p>
              </PostText>
              <PostCategory className="post_category">
                {e.category === null || e.category === undefined ? (
                  <div></div>
                ) : (
                  <a>
                    <button onClick={() => categoryPage(e.category.title)}>
                      #{e.category.title}
                    </button>
                  </a>
                )}
              </PostCategory>
              <PostDetails>
                <UserDetails>
                  <div onClick={() => displayProfile(e.user.slug)}>
                    {e.user.user_image ? (
                      <Image
                        src={e.user.user_image.formats.small.url}
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
                    <h3 onClick={() => displayProfile(e.user.slug)}>
                      {e.user.username}
                    </h3>
                    <p className="time">
                      <Moment fromNow ago>
                        {e.created_at}
                      </Moment>
                    </p>
                  </div>
                </UserDetails>
                <PostComments>
                  {/* {comments.map((comment, index) =>
                    e.id === comment.post.id ? (
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
          ))}
        </FeedPosts>
        <Wrapper>
          {post.map((e) => (
            <PostItem key={e.id}>
              <UserPosted>
                <div onClick={() => displayProfile(e.user.slug)}>
                  {e.user.user_image ? (
                    <Image
                      src={e.user.user_image.formats.small.url}
                      alt="User Image"
                      width={80}
                      height={80}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                      onClick={() => displayProfile(e.user.slug)}
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="User Image"
                      width={80}
                      height={80}
                      cursor="pointer"
                      objectFit="cover"
                      className="user_image"
                      onClick={() => displayProfile(e.user.slug)}
                    />
                  )}
                </div>
                <UserInfo>
                  <h2 onClick={() => displayProfile(e.user.slug)}>
                    {e.user.username}
                  </h2>
                  <p>
                    <Moment fromNow ago>
                      {e.created_at}
                    </Moment>
                  </p>
                </UserInfo>
              </UserPosted>
              <UserPost>
                <p className="post">{e.post}</p>
                <PostImages>
                  {e.images &&
                    e.images.map((img) => (
                      <div className="post_images" key={img.id}>
                        <Image
                          src={img.url}
                          alt={img.name}
                          width={img.width}
                          height={img.height}
                          obajectFit="cover"
                        />
                      </div>
                    ))}
                </PostImages>
              </UserPost>
              <Interract>
                <div className="interract">
                  <Likes>
                    <FaHeart fontSize={26} color="#F4442E" />
                    <div className="liked_images">
                      {likes
                        .slice(0, 4)
                        .map((l) =>
                          user ? (
                            <div key={l.id}>
                              {l.post.id === e.id ? (
                                <div>
                                  {l.user.user_image ? (
                                    <Image
                                      src={l.user.user_image.formats.small.url}
                                      alt="User Image"
                                      width={30}
                                      height={30}
                                      className="user_image"
                                      objectFit="cover"
                                    />
                                  ) : (
                                    <Image
                                      src={userImage}
                                      alt="User Image"
                                      width={30}
                                      height={30}
                                      className="user_image"
                                      objectFit="cover"
                                    />
                                  )}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          ) : (
                            <div></div>
                          )
                        )}
                      <div className="liking">
                        {likes.map((like) =>
                          user ? (
                            <p className="user_likes" key={like.id}>
                              {e.post_likes.map((use) =>
                                console.log(use.user, user.id)
                              )}
                              {like.post.id === e.id ? (
                                <div>
                                  <None>
                                    {(postLike += e.post_likes.length)}
                                  </None>
                                  {console.log(postLike)}

                                  {userLiked && e.post_likes.length > 1 && (
                                    <p className="user_likes">
                                      You and {e.post_likes.length - 1} other(s)
                                      like this post
                                    </p>
                                  )}

                                  {userLiked && e.post_likes.length === 1 && (
                                    <p className="user_likes">
                                      You like this post
                                    </p>
                                  )}

                                  {!userLiked && e.post_likes.length === 1 && (
                                    <p className="user_likes">
                                      {like.user.username} likes this post
                                    </p>
                                  )}

                                  {!userLiked && e.post_likes.length > 1 && (
                                    <p className="user_likes">
                                      {likes
                                        .slice(-1)
                                        .map((last) => last.user.username)}{" "}
                                      and {e.post_likes.length - 1} other(s)
                                      like this post
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div></div>
                              )}
                            </p>
                          ) : (
                            <p></p>
                          )
                        )}
                      </div>
                    </div>
                  </Likes>
                  <div className="comment_share">
                    <div className="comment_count">
                      <p>{e.comments.length}</p>
                      <FaComment fontSize={16} color="#3074B8" />
                    </div>
                    <div className="share_count">
                      <FaShare fontSize={16} color="#FA7B23" />
                    </div>
                  </div>
                </div>
              </Interract>
              <Reactions>
                {user ? (
                  <div className="reactions">
                    <div className="like">
                      {/* {findUserLiked()} */}
                      {/* {findUserLiked !== undefined && ( */}
                      {userLiked ? (
                        <>
                          <FaHeart
                            fontSize={26}
                            onClick={() => unlike(e)}
                            color="#F4442E"
                          />
                          <p>Liked</p>
                        </>
                      ) : (
                        <>
                          <FaRegHeart
                            fontSize={26}
                            onClick={() => updateLike(e)}
                            color="#060258"
                          />
                          <p>Like</p>
                        </>
                      )}
                      {/* )} */}
                      {/* {findUserLiked === undefined && ( */}
                      {/* )} */}
                    </div>
                    <div className="comment_here">
                      <FaRegComment fontSize={26} color="#020127" />
                      <p>Comment</p>
                    </div>
                    <div className="share_here">
                      <RiShareForwardLine fontSize={26} color="#020127" />
                      <p>Share</p>
                    </div>
                  </div>
                ) : (
                  <Contain>
                    <p>
                      <span>
                        <Link href="/login">
                          <a>Sign in</a>
                        </Link>
                      </span>{" "}
                      or{" "}
                      <span>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </span>{" "}
                      to react to this post...
                    </p>
                  </Contain>
                )}
              </Reactions>
              <Comments>
                {comments ? (
                  comments.map((com) => (
                    <div key={com.key}>
                      {e.id === com.post.id ? (
                        <UsersComments>
                          <div
                            className="image"
                            onClick={() => displayProfile(e.user.slug)}
                          >
                            {com.users.user_image ? (
                              <Image
                                src={com.users.user_image.formats.small.url}
                                alt="User Image"
                                width={70}
                                height={70}
                                className="user_image"
                                objectFit="cover"
                              />
                            ) : (
                              <Image
                                src={userImage}
                                alt="User Image"
                                width={70}
                                height={70}
                                className="user_image"
                                objectFit="cover"
                              />
                            )}
                          </div>
                          <div>
                            <div className="name_time">
                              <h2 onClick={() => displayProfile(e.user.slug)}>
                                {com.users.username}
                              </h2>
                              <span></span>
                              <p className="time">
                                <Moment fromNow ago>
                                  {com.created_at}
                                </Moment>
                              </p>
                            </div>
                            <p>{com.content}</p>
                            {/* {e.comments.slice(0, 1).map((c) => (
                              <div key={c.id}>
                                <p>{c.content}</p>
                              </div>
                            ))} */}
                          </div>
                        </UsersComments>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  ))
                ) : (
                  <></>
                )}
                {user ? (
                  <form
                    className="input_comment"
                    onSubmit={(s) => postComment(s, e)}
                  >
                    {/* <FaCamera
                      fontSize={26}
                      color="#07036E"
                      className="input_icons"
                    />
                    <AiOutlineGif
                      fontSize={16}
                      color="#07036E"
                      className="input_icons"
                    />
                    <FaSmile
                      fontSize={26}
                      color="#07036E"
                      className="input_icons"
                    /> */}
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={isComment.content}
                      onChange={(input) => handleInputChange(input, e)}
                    />

                    <button>
                      <FaTelegramPlane />
                    </button>
                  </form>
                ) : (
                  <Cont>
                    <p className="signin">
                      <span>
                        <Link href="/login">
                          <a>Sign in</a>
                        </Link>
                      </span>
                      <span>
                        <Link href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </span>{" "}
                      to react to this post...
                    </p>
                  </Cont>
                )}
              </Comments>
            </PostItem>
          ))}
        </Wrapper>
      </Container>
    </UserLayout>
  );
};

export default Slug;

export async function getServerSideProps({ req, query: { slug } }) {
  // const { token } = parseCookies(req);
  // function parseCookies(req) {
  //   return cookie.parse(req ? req.headers.cookie || "" : "");
  // }

  const { token } = parseCookies(req);

  console.log(token);

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const loggedUsers = await resUsers.json();

  return {
    props: { post, posts, comments, likes, token, loggedUsers },
  };
}
