import { useState, useContext, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import UserLayout from "Components/UserLayout";
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
  Cont,
  Contain,
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
import { PostCategory } from "@/components/PostCategory/Style";
import { AiOutlineGif } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import Moment from "react-moment";
import { parseCookies } from "@/helpers/index";
import Link from "next/link";
import userImage from "public/userImage.png";

const Slug = ({ post, posts, comments, likes, allUsers }) => {
  console.log(posts);
  const { user } = useContext(AuthContext);
  const [postId, setPostId] = useState({});
  const [commentDisplayed, setCommentDisplay] = useState(false);

  const [isComment, setIsComment] = useState({
    content: "",
    post: postId,
    timestamp: "",
    users: user,
  });

  const [liked, setLiked] = useState(false);

  const [isLiked, setIsLiked] = useState({
    like: liked,
    post: postId,
    users_permissions_user: user,
  });
  // const [commentLike, setCommentLike] = useState({})

  useEffect(() => {
    getPostId();
    likePost();
    // setLiked(!liked);
    // setLiked(!liked);
    setIsLiked({
      ...isLiked,
      like: liked,
      post: postId,
      users_permissions_user: user,
    });
  }, []);

  const router = useRouter();

  const refreshData = () => router.replace(router.asPath);

  let postLike = 0;

  const displayPost = (e) => {
    router.push(`/electricians/${e.slug}`);
  };

  const getPostId = (e) => {
    setPostId(e);
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
    // console.log(postId);

    // handleData(e);
  };

  const likePost = async (e) => {
    getPostId(e);
    setLiked(!liked);
    setIsLiked({
      ...isLiked,
      like: liked,
      post: postId,
      users_permissions_user: user,
    });

    try {
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(isLiked),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // refreshData();
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

  const displayProfile = (slug) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <UserLayout>
      <Container>
        <FeedPosts>
          {posts.posts.map((post) => (
            <PostCard key={post.id}>
              <PostText>
                <p onClick={() => displayPost(post)}>{post.post}</p>
              </PostText>
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
                    post.user === all.id ? (
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
                    post.id === e.post.id ? (
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
          ))}
        </FeedPosts>
        <Wrapper>
          {post.map((e) => (
            <PostItem key={e.id}>
              <UserPosted>
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
              </UserPost>
              <Interract>
                <Likes>
                  {/* <FaHeart fontSize={26} color="#F4442E" /> */}
                  <div className="liked_images">
                    {/* {likes.map((l) => (
                      <div key={l.id}>
                        {l.post.id === e.id ? (
                          <div>
                            <Image
                              src={
                                l.users_permissions_user.user_image.formats
                                  .small.url
                              }
                              alt="User Image"
                              width={30}
                              height={30}
                              className="user_image"
                              objectFit="cover"
                            />
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))} */}
                    {/* {likes.slice(0, 5).map((like) => (
                      <p className="user_likes" key={like.id}>
                        {like.post.id === e.id ? (
                          <div>
                            <None>{(postLike = e.likes.length - 1)}</None>
                            {postLike < 1 ? (
                              <p className="user_likes">
                                {like.users_permissions_user.username} likes
                                your post
                              </p>
                            ) : (
                              <p className="user_likes">
                                {like.users_permissions_user.username} and{" "}
                                {postLike} others like your post
                              </p>
                            )}
                          </div>
                        ) : (
                          <p></p>
                        )}
                      </p>
                    ))} */}
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
              </Interract>
              <Reactions>
                {/* {user ? (
                  <div className="reactions">
                    <div className="like">
                      {liked ? (
                        <FaHeart
                          fontSize={26}
                          onClick={() => likePost(e)}
                          color="#F4442E"
                        />
                      ) : (
                        <FaRegHeart
                          fontSize={26}
                          onClick={() => likePost(e)}
                          color="#F4442E"
                        />
                      )}
                      <p>Like</p>
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
                )} */}
              </Reactions>
              <Comments>
                {comments.map((com) => (
                  <div key={com.key}>
                    {e.id === com.post.id ? (
                      <UsersComments>
                        <div className="image">
                          {com.users.user_image ? (
                            <Image
                              src={com.users.user_image.formats.small.url}
                              alt="User Image"
                              width={70}
                              height={70}
                              className="user_image"
                              objectFit="cover"
                              onClick={() => displayProfile(com.users.slug)}
                            />
                          ) : (
                            <Image
                              src={userImage}
                              alt="User Image"
                              width={70}
                              height={70}
                              className="user_image"
                              objectFit="cover"
                              onClick={() => displayProfile(com.users.slug)}
                            />
                          )}
                        </div>
                        <div>
                          <div className="name_time">
                            <h2 onClick={() => displayProfile(com.users.slug)}>
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
                ))}
                {user ? (
                  <form
                    className="input_comment"
                    onSubmit={(s) => postComment(s, e)}
                  >
                    <FaCamera
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
                    />
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

export async function getServerSideProps({ query: { slug }, req }) {
  const { token } = parseCookies(req);

  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/categories/3`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resUsers.json();

  return {
    props: { post, posts, comments, likes, allUsers },
  };
}
