import { NEXT_PUBLIC_API_URL } from "../config/index";
import UserLayout from "@/components/UserLayout";
import Posts from "@/components/Discussion/Posts";
import { useContext, useState, useEffect } from "react";
import AuthContext from "@/context/AuthContext";
import Carpenter from "@/components/PostCategory/Carpenter";

const Carpenters = ({ post, posts, comments, likes, allUsers, allPosts }) => {
  return (
    <UserLayout
      title="Fitfixam | Carpenters Feed"
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
          <Carpenter
            key={e.id}
            posts={e}
            comments={comments}
            allUsers={allUsers}
            likes={likes}
            allPosts={allPosts}
          />
        ))}
      </div>
    </UserLayout>
  );
};

export default Carpenters;

export async function getServerSideProps({ query: { slug } }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/categories/1?_sort=created_at:DESC`
  );
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/post-likes`);
  const likes = await resLikes.json();

  const resUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resUsers.json();

  const resAllPosts = await fetch(`${NEXT_PUBLIC_API_URL}/posts`);
  const allPosts = await resAllPosts.json();

  return {
    props: { post, posts, comments, likes, allUsers, allPosts },
  };
}
