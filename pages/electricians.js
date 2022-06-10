import { NEXT_PUBLIC_API_URL } from "../config/index";
import UserLayout from "@/components/UserLayout";
import Posts from "@/components/Discussion/Posts";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Electrician from "@/components/PostCategory/Electrician";

const Electricians = ({ post, posts, comments, likes, allUsers }) => {
  return (
    <UserLayout title="Fitfixam | Electricians Feed">
      <div>
        {posts.posts.map((e) => (
          <Electrician
            key={e.id}
            posts={e}
            comments={comments}
            allUsers={allUsers}
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default Electricians;

export async function getServerSideProps({ query: { slug } }) {
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
