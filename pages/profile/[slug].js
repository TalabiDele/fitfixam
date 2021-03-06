import React from "react";
import UserLayout from "@/components/UserLayout";
import Profile from "@/components/Profile/Profile";
import { parseCookies } from "@/helpers/index";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const Slug = ({ usersProfile, userPosts, token, artisanRatings }) => {
  const { user } = useContext(AuthContext);

  return (
    <UserLayout>
      {usersProfile.map((userProfile) => (
        <Profile
          usersProfile={userProfile}
          userPosts={userPosts}
          key={userProfile.id}
          token={token}
          artisanRatings={artisanRatings}
        />
      ))}
    </UserLayout>
  );
};

export default Slug;

export async function getServerSideProps({ query: { slug }, req }) {
  const { token } = parseCookies(req);

  const resUser = await fetch(`${NEXT_PUBLIC_API_URL}/users?slug=${slug}`);
  const usersProfile = await resUser.json();

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`);
  const posts = await res.json();

  const resUserPosts = await fetch(
    `${NEXT_PUBLIC_API_URL}/users/me?populate=*`
  );
  const userPosts = await resUserPosts.json();

  const resArtisanRatings = await fetch(
    `${NEXT_PUBLIC_API_URL}/artisan-ratings`
  );
  const artisanRatings = await resArtisanRatings.json();

  return {
    props: { usersProfile, posts, userPosts, token, artisanRatings },
  };
}
