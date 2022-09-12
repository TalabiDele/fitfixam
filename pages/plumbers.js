import { NEXT_PUBLIC_API_URL } from "../config/index";
import UserLayout from "@/components/UserLayout";
import Posts from "@/components/Discussion/Posts";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Plumber from "@/components/PostCategory/Plumber";

const Plumbers = ({ post, posts, comments, likes, allUsers }) => {
  return (
    <UserLayout
      title="Fitfixam | Plumbers Feed"
      keywords="Artisans
    Repair
    Fix
    Carpenters
    Plumbers 
    Electricians 
    Reviews 
    Good 
    Bad 
    Services 
    Satisfied 
    Craftsmen
    Experience
    "
    >
      <div>
        {posts.posts.map((e) => (
          <Plumber
            key={e.id}
            posts={e}
            comments={comments}
            allUsers={allUsers}
            likes={likes}
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default Plumbers;

export async function getServerSideProps({ query: { slug } }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/categories/2`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resUsers.json();

  return {
    props: { post, posts, comments, likes, allUsers },
  };
}
